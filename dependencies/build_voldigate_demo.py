
#!/usr/bin/env python3

import json
import os
import pathlib
import shutil
import subprocess
import sys

WORKING_DIR = pathlib.Path(__file__).resolve().parent
PROJECT_DIR = WORKING_DIR.parent

LIBKIPR_DIR = WORKING_DIR / "libwallaby"

DOCS_DIR = WORKING_DIR / "demo_documentation"
C_BUILD_DIR = WORKING_DIR / "libkipr_voldigate" / "libkipr_build_c"

DOCUMENTATION_JSON = DOCS_DIR / "json.json"
COMMON_DOCUMENTATION_JSON = DOCS_DIR / "json_common.json"

DEPENDENCIES_JSON = WORKING_DIR / "dependencies.json"


def run(command, cwd=None):
    print("Running:", " ".join(map(str, command)), flush=True)
    subprocess.run(
        [str(arg) for arg in command],
        cwd=cwd,
        check=True,
    )


def check_tools():
    required = ["cmake", "make", "doxygen"]

    missing = [
        tool for tool in required
        if shutil.which(tool) is None
    ]

    if missing:
        raise RuntimeError(
            "Missing build tools: " + ", ".join(missing)
        )


def generate_documentation():
    print("Generating libkipr documentation...")

    check_tools()

    C_BUILD_DIR.mkdir(parents=True, exist_ok=True)
    DOCS_DIR.mkdir(parents=True, exist_ok=True)

    # Configure libkipr with documentation enabled.
    run([
        "cmake",
        "-Dwith_camera=OFF",
        "-Dwith_tello=OFF",
        "-Dwith_python_binding=OFF",
        "-Dwith_documentation=ON",
        "-Dwith_tests=OFF",
        "-DBUILD_SHARED_LIBS=OFF",
        str(LIBKIPR_DIR),
    ], cwd=C_BUILD_DIR)

    # Build documentation only.
    # Verify that this target exists in your libwallaby CMake setup.
    run([
        "cmake",
        "--build",
        str(C_BUILD_DIR),
        "--target",
        "documentation",
    ])

    xml_dir = C_BUILD_DIR / "documentation" / "xml"

    if not xml_dir.is_dir():
        raise RuntimeError(
            f"Doxygen XML directory not found: {xml_dir}"
        )

    run([
        sys.executable,
        WORKING_DIR / "generate_doxygen_json.py",
        xml_dir,
        DOCUMENTATION_JSON,
        COMMON_DOCUMENTATION_JSON,
    ], cwd=WORKING_DIR)


def verify_documentation():
    for path in [
        DOCUMENTATION_JSON,
        COMMON_DOCUMENTATION_JSON,
    ]:
        if not path.is_file():
            raise RuntimeError(
                f"Required documentation file missing: {path}"
            )

        with path.open("r", encoding="utf-8") as file:
            json.load(file)

        print(f"Verified documentation: {path}")


def write_dependencies_json():
    # These are absolute paths generated for the current
    # machine. Do not commit this dependencies.json.
    dependencies = {
        "libkipr_c_documentation": str(
            DOCUMENTATION_JSON.resolve()
        ),
        "libkipr_c_common_documentation": str(
            COMMON_DOCUMENTATION_JSON.resolve()
        ),
    }

    with DEPENDENCIES_JSON.open(
        "w", encoding="utf-8"
    ) as file:
        json.dump(dependencies, file, indent=2)

    print(f"Generated {DEPENDENCIES_JSON}")


def main():
    # Set DEMO_REBUILD_DOCS=true when regenerating locally.
    rebuild = os.environ.get("DEMO_REBUILD_DOCS") == "true"

    if rebuild:
        generate_documentation()

    verify_documentation()
    write_dependencies_json()

    print("Voldigate demo dependencies ready.")


if __name__ == "__main__":
    main()

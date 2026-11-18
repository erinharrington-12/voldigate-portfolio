## Building the Portfolio Demo

This repository contains a browser-based demonstration of Voldigate, KIPR's robotics programming IDE.

The demo includes:
- C, C++, and Python code editors
- Blockly graphical programming
- libkipr API documentation
- Project, user, and classroom management
- Browser-based persistence using localStorage

The demo runs without requiring a physical robot or native hardware libraries.

### Prerequisites

- Node.js
- Yarn 1.x
- Python 3 (for preparing demo dependencies)

### Installation

```bash
yarn install
```

### Build

```bash
DEMO_MODE=true yarn build
```

If the demo documentation dependencies need to be prepared separately, run:

```bash
python3 dependencies/build_voldigate_demo.py
```

The demo build uses pre-generated documentation and browser-compatible assets rather than compiling the full native Voldigate environment.

### Running Locally

```bash
DEMO_MODE=true yarn start-dev
```

### Full Voldigate Build

The original dependency-building script is retained for the full Voldigate development environment:

```bash
python3 dependencies/build_voldigate.py
```

This full build requires additional native development tools and dependencies.

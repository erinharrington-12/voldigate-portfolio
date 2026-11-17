export const getDemoCompileOutput = (
  fileName: string
): string => {
  return [
    `[Demo] Checking ${fileName}...`,
    '[Demo] Compilation simulated successfully.',
    '[Demo] No code was compiled or executed.',
  ].join('\n');
};
export const getDemoRunOutput = (
  code: string,
  language: 'c' | 'python'
): string => {
  const output: string[] = [
    '[Demo] Simulating program...',
  ];

  // Recognize motor(port, power)
  const motorRegex =
    /(?:wombat\.)?motor\s*\(\s*(\d+)\s*,\s*(-?\d+)\s*\)/g;

  let match: RegExpExecArray | null;

  while ((match = motorRegex.exec(code)) !== null) {
    const port = Number(match[1]);
    const power = Number(match[2]);

    output.push(
      `[Demo] Motor ${port} set to ${power}% power.`
    );
  }

  // Recognize msleep(milliseconds)
  const sleepRegex =
    /(?:wombat\.)?msleep\s*\(\s*(\d+)\s*\)/g;

  while ((match = sleepRegex.exec(code)) !== null) {
    const milliseconds = Number(match[1]);

    output.push(
      `[Demo] Waiting ${milliseconds} ms.`
    );
  }

  // Recognize ao() (all motors off)
  const stopRegex =
    /(?:wombat\.)?ao\s*\(\s*\)/;

  if (stopRegex.test(code)) {
    output.push('[Demo] All motors stopped.');
  }

  if (output.length === 1) {
    output.push(
      '[Demo] No supported simulation commands found.'
    );
  }

  output.push('[Demo] Simulation complete.');

  return output.join('\n');
};
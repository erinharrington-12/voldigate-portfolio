import { demoProjects } from './demoProjects';

export const getDemoFileContent = (
  projectName: string,
  fileName: string,
): string => {
  const project = demoProjects.find((project) => project.name === projectName);

  const file = project?.files.find((file) => file.name === fileName);

  if (!file) {
    throw new Error(`Demo file not found: ${projectName}/${fileName}`);
  }

  return file.content;
};

import { loadDemoWorkspace } from './demoWorkspace';

export const getDemoWorkspaceFileContent = (
  userName: string,
  projectName: string,
  fileName: string,
): string => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find((user) => user.name === userName);

  const project = user?.projects.find(
    (project) => project.name === projectName,
  );

  const file = project?.files.find((file) => file.name === fileName);

  if (!file) {
    throw new Error(
      `Demo file not found: ${userName}/${projectName}/${fileName}`,
    );
  }

  return file.content;
};

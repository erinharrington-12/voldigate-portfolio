import { Project } from 'ivygate/dist/src/types/project';
import ProgrammingLanguage from '../ProgrammingLanguage'
import { loadDemoWorkspace } from './demoWorkspace';
import { DemoProject } from './demoProjects';

const toIvygateProject = (
  demoProject: DemoProject
): Project => {
  const language: ProgrammingLanguage =
    demoProject.files[0]?.language ?? 'c';

  return {
    projectName: demoProject.name,
    projectLanguage: language,

    srcFolderFiles: demoProject.files
      .filter(file =>
        /\.(c|cpp|py|graphical)$/i.test(file.name)
      )
      .map(file => file.name),

    includeFolderFiles: demoProject.files
      .filter(file => /\.h$/i.test(file.name))
      .map(file => file.name),

    dataFolderFiles: demoProject.files
      .filter(file => /\.txt$/i.test(file.name))
      .map(file => file.name),
  };
};

export const getDemoProjectsForUser = (
  userName: string
): Project[] => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  return (user?.projects ?? []).map(toIvygateProject);
};
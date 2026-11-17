import { getDemoFileContent } from './demoFileService';
import { loadDemoWorkspace, saveDemoWorkspace } from './demoWorkspace';

const STORAGE_PREFIX = 'voldigate-portfolio:';

const getStorageKey = (
  projectName: string,
  fileName: string
): string =>
  `${STORAGE_PREFIX}${JSON.stringify([projectName, fileName])}`;

export const saveDemoFile = (
  projectName: string,
  fileName: string,
  content: string
): void => {

  localStorage.setItem(
    getStorageKey(projectName, fileName),
    content
  );
};

export const deleteDemoUser = (userName: string): void => {
  const workspace = loadDemoWorkspace();

  const userIndex = workspace.users.findIndex(
    user => user.name === userName
  );

  if (userIndex === -1) {
    throw new Error(`User not found: ${userName}`);
  }

  workspace.users.splice(userIndex, 1);
  saveDemoWorkspace(workspace);
};
export const deleteDemoFile = (
  projectName: string,
  fileName: string
): void => {
  localStorage.removeItem(getStorageKey(projectName, fileName));

  const workspace = loadDemoWorkspace();

  for (const user of workspace.users) {
    const project = user.projects.find(
      project => project.name === projectName
    );

    if (project) {
      const fileIndex = project.files.findIndex(
        file => file.name === fileName
      );

      if (fileIndex !== -1) {
        project.files.splice(fileIndex, 1);
        saveDemoWorkspace(workspace);
        return;
      }
    }
  }
};

export const deleteDemoProject = (
  userName: string,
  projectName: string
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  const projectIndex = user.projects.findIndex(
    project => project.name === projectName
  );

  if (projectIndex === -1) {
    throw new Error(`Project not found: ${userName}/${projectName}`);
  }

  user.projects.splice(projectIndex, 1);
  saveDemoWorkspace(workspace);
};

export const deleteDemoClassroom = (classroomId: string): void => {
  const workspace = loadDemoWorkspace();

  const classroomIndex = workspace.classrooms.findIndex(
    classroom => classroom.name === classroomId
  );

  if (classroomIndex === -1) {
    throw new Error(`Classroom not found: ${classroomId}`);
  }

  workspace.classrooms.splice(classroomIndex, 1);

  // Remove classroomId from users assigned to this classroom
  for (const user of workspace.users) {
    if (user.classroomId === classroomId) {
      user.classroomId = null;
    }
  }

  saveDemoWorkspace(workspace);
};

export const loadDemoFile = (
  projectName: string,
  fileName: string
): string => {
  const savedContent = localStorage.getItem(
    getStorageKey(projectName, fileName)
  );
  return savedContent !== null
    ? savedContent
    : getDemoFileContent(projectName, fileName);
};

export const loadDemoWorkspaceFile = (
  userName: string,
  projectName: string,
  fileName: string
): string => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  const project = user?.projects.find(
    project => project.name === projectName
  );

  const file = project?.files.find(
    file => file.name === fileName
  );

  if (!file) {
    throw new Error(
      `Demo file not found: ${userName}/${projectName}/${fileName}`
    );
  }

  return file.content;
};

export const saveDemoWorkspaceFile = (
  userName: string,
  projectName: string,
  fileName: string,
  content: string
): void => {
  const workspace = loadDemoWorkspace();

  const file = workspace.users
    .find(user => user.name === userName)
    ?.projects.find(project => project.name === projectName)
    ?.files.find(file => file.name === fileName);

  if (!file) {
    throw new Error(
      `Cannot save missing demo file: ${userName}/${projectName}/${fileName}`
    );
  }

  file.content = content;

  saveDemoWorkspace(workspace);
};

export const moveDemoUserToClassroom = (
  userName: string,
  newClassroomId: string | null
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  user.classroomId = newClassroomId;

 saveDemoWorkspace(workspace);
}

export const removeDemoUserFromClassroom = (
  userName: string
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  user.classroomId = null;
  saveDemoWorkspace(workspace);
}

export const renameDemoClassroom = (
  oldClassroomId: string,
  newClassroomId: string
): void => {
  const workspace = loadDemoWorkspace();

  const classroom = workspace.classrooms.find(
    classroom => classroom.name === oldClassroomId
  );

  if (!classroom) {
    throw new Error(`Classroom not found: ${oldClassroomId}`);
  }

  classroom.name = newClassroomId;

  // Update classroomId for users assigned to this classroom
  for (const user of workspace.users) {
    if (user.classroomId === oldClassroomId) {
      user.classroomId = newClassroomId;
    }
  }

  saveDemoWorkspace(workspace);

};

export const renameDemoUser = (
  oldUserName: string,
  newUserName: string
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === oldUserName
  );

  if (!user) {
    throw new Error(`User not found: ${oldUserName}`);
  }

  user.name = newUserName;

  saveDemoWorkspace(workspace);
};

export const renameDemoProject = (
  userName: string,
  oldProjectName: string,
  newProjectName: string
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  const project = user.projects.find(
    project => project.name === oldProjectName
  );

  if (!project) {
    throw new Error(`Project not found: ${userName}/${oldProjectName}`);
  }

  project.name = newProjectName;

  saveDemoWorkspace(workspace);
};

export const renameDemoFile = (
  userName: string,
  projectName: string,
  oldFileName: string,
  newFileName: string
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  const project = user.projects.find(
    project => project.name === projectName
  );

  if (!project) {
    throw new Error(`Project not found: ${userName}/${projectName}`);
  }

  const file = project.files.find(
    file => file.name === oldFileName
  );

  if (!file) {
    throw new Error(`File not found: ${userName}/${projectName}/${oldFileName}`);
  }

  file.name = newFileName;

  saveDemoWorkspace(workspace);
};

export const moveDemoProjectToUser = (
  oldUserName: string,
  newUserName: string,
  projectName: string
): void => {
  const workspace = loadDemoWorkspace();

  const oldUser = workspace.users.find(
    user => user.name === oldUserName
  );
  if (!oldUser) {
    throw new Error(`Old user not found: ${oldUserName}`);
  }

  const projectIndex = oldUser.projects.findIndex(
    project => project.name === projectName
  );

  if (projectIndex === -1) {
    throw new Error(`Project not found for old user: ${oldUserName}/${projectName}`);
  }

  const [project] = oldUser.projects.splice(projectIndex, 1);

  const newUser = workspace.users.find(
    user => user.name === newUserName
  );

  if (!newUser) {
    throw new Error(`New user not found: ${newUserName}`);
  }

  newUser.projects.push(project);

  saveDemoWorkspace(workspace);
};

export const copyDemoProjectToUser = (
  toPasteData: {pasteFromData: any, pasteToData: any}
): void => {
  const {pasteFromData, pasteToData } = toPasteData;

  const sourceUserName = pasteFromData.toPasteObject.copyObjectUser.userName;
  const targetUserName = pasteToData.pasteWhereUser.userName;
  const projectName = pasteFromData.toPasteObject.copyObjectProject.projectName;

  const workspace = loadDemoWorkspace();

  const sourceUser = workspace.users.find(
    user => user.name === sourceUserName
  );

  if (!sourceUser) {
    throw new Error(`Source user not found: ${sourceUserName}`);
  }

  const project = sourceUser.projects.find(
    project => project.name === projectName
  );

  if (!project) {
    throw new Error(`Project not found for source user: ${sourceUserName}/${projectName}`);
  }

  const targetUser = workspace.users.find(
    user => user.name === targetUserName
  );

  if (!targetUser) {
    throw new Error(`Target user not found: ${targetUserName}`);
  }

  // Create a deep copy of the project to avoid reference issues
  const copiedProject = JSON.parse(JSON.stringify(project));
  targetUser.projects.push(copiedProject);

  saveDemoWorkspace(workspace);
};


export const updateDemoUserInterfaceMode = (
  userName: string,
  newInterfaceMode: 'Simple' | 'Advanced'
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  user.interfaceMode = newInterfaceMode;

  saveDemoWorkspace(workspace);
};
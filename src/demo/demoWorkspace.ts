import { demoProjects, DemoProject } from './demoProjects';
import ProgrammingLanguage from '../ProgrammingLanguage';

export interface DemoUser {
  id: string;
  name: string;
  classroomId: string | null;
  projects: DemoProject[];
  interfaceMode: 'Simple' | 'Advanced';
}

export interface DemoClassroom {
  id: string;
  name: string;
}

export interface DemoWorkspace {
  version: 1;
  users: DemoUser[];
  classrooms: DemoClassroom[];
}

const STORAGE_KEY = 'voldigate-portfolio:workspace';

const createDefaultWorkspace = (): DemoWorkspace => ({
  version: 1,
  users: [
    {
      id: 'demo-user',
      name: 'Demo User',
      projects: structuredClone(demoProjects),
      classroomId: null,
      interfaceMode: 'Advanced',

    },
  ],
  classrooms: [],
});

export const loadDemoWorkspace = (): DemoWorkspace => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return createDefaultWorkspace();
  }

  try {
    const workspace = JSON.parse(stored) as DemoWorkspace;

    if (
      workspace.version !== 1 ||
      !Array.isArray(workspace.users)
    ) {
      throw new Error('Invalid demo workspace');
    }
    workspace.classrooms ??= [];

    workspace.users = workspace.users.map(user => ({
      ...user,
      classroomId: user.classroomId ?? null,
    }));

    return workspace;
  } catch (error) {
    console.error('Unable to load demo workspace:', error);
    return createDefaultWorkspace();
  }
};

export const saveDemoWorkspace = (
  workspace: DemoWorkspace
): void => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(workspace)
  );
};

export const resetDemoWorkspace = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
export const createDemoClassroom = (
  name: string
): DemoClassroom => {
  const workspace = loadDemoWorkspace();
  const trimmedName = name.trim();

  if (!trimmedName) {
    throw new Error('Classroom name cannot be empty');
  }

  if (
    workspace.classrooms.some(
      classroom =>
        classroom.name.toLowerCase() === trimmedName.toLowerCase()
    )
  ) {
    throw new Error('Classroom already exists');
  }

  const classroom: DemoClassroom = {
    id: crypto.randomUUID(),
    name: trimmedName,
  };

  workspace.classrooms.push(classroom);
  saveDemoWorkspace(workspace);

  return classroom;
}; export const assignDemoUserToClassroom = (
  userId: string,
  classroomId: string | null
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.id === userId
  );

  if (!user) {
    throw new Error('Demo user not found');
  }

  if (
    classroomId !== null &&
    !workspace.classrooms.some(
      classroom => classroom.id === classroomId
    )
  ) {
    throw new Error('Demo classroom not found');
  }

  user.classroomId = classroomId;

  saveDemoWorkspace(workspace);
};
export const createDemoUser = (userName: string, interfaceMode: 'Simple' | 'Advanced'): DemoUser => {
  const workspace = loadDemoWorkspace();

  const trimmedName = userName.trim();

  if (!trimmedName) {
    throw new Error('User name cannot be empty');
  }

  const existingUser = workspace.users.find(
    user => user.name.toLowerCase() === trimmedName.toLowerCase()
  );

  if (existingUser) {
    throw new Error(`Demo user already exists: ${trimmedName}`);
  }

  const newUser: DemoUser = {
    id: crypto.randomUUID(),
    name: trimmedName,
    projects: [],
    classroomId: null,
    interfaceMode: interfaceMode
  };

  workspace.users.push(newUser);

  saveDemoWorkspace(workspace);

  return newUser;
};

export const createDemoProject = (
  userName: string,
  projectName: string,
  language: ProgrammingLanguage
): DemoWorkspace => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`User not found: ${userName}`);
  }

  const name = projectName.trim();

  if (!name) {
    throw new Error('Project name cannot be empty');
  }

  if (user.projects.some(project => project.name === name)) {
    throw new Error('A project with that name already exists');
  }

  const extension = ProgrammingLanguage.FILE_EXTENSION[language];
  const content = ProgrammingLanguage.DEFAULT_CODE[language];

  const project: DemoProject = {
    id: crypto.randomUUID(),
    name,
    files: [
      {
        name: `main.${extension}`,
        language,
        content,
      },
    ],
  };

  user.projects.push(project);

  saveDemoWorkspace(workspace);

  return workspace;
};

export const createDemoFile = (
  userName: string,
  projectName: string,
  fileName: string,
  content: string = ''
): void => {
  const workspace = loadDemoWorkspace();

  const user = workspace.users.find(
    user => user.name === userName
  );

  if (!user) {
    throw new Error(`Demo user not found: ${userName}`);
  }

  const project = user.projects.find(
    project => project.name === projectName
  );

  if (!project) {
    throw new Error(`Demo project not found: ${projectName}`);
  }

  if (project.files.some(file => file.name === fileName)) {
    throw new Error(`File already exists: ${fileName}`);
  }

  const extension = fileName.split('.').pop();

  const language: 'c' | 'python' =
    extension === 'py' ? 'python' : 'c';

  project.files.push({
    name: fileName,
    language,
    content,
  });

  saveDemoWorkspace(workspace);
};
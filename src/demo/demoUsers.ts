import { User } from 'ivygate/dist/src/types/user';
import { InterfaceMode } from '../types/interfaceModes';
import { loadDemoWorkspace } from './demoWorkspace';
import { getDemoProjectsForUser } from './demoProjectAdapter';

export const getDemoUsers = (): User[] => {
  const workspace = loadDemoWorkspace();
  return workspace.users.map(user => {
    const classroom = workspace.classrooms.find(
      classroom => classroom.id === user.classroomId
    );

    return {
      userName: user.name,
      interfaceMode: user.interfaceMode as InterfaceMode,
      projects: getDemoProjectsForUser(user.name),
      classroomName: classroom?.name ?? null,
      type: 'user' as const,
    };
  });
};
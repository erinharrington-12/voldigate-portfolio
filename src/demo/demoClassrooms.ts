import Classroom from 'ivygate/dist/src/types/classroomTypes';
import { getDemoUsers } from './demoUsers';
import { loadDemoWorkspace } from './demoWorkspace';
import { User } from '../components/User';

export const getDemoClassrooms = (): Classroom[] => {
  const workspace = loadDemoWorkspace();
  const users = getDemoUsers();

  const classrooms: Classroom[] = workspace.classrooms.map(
    classroom => {
      const assignedDemoUsers = workspace.users.filter(
        user => user.classroomId === classroom.name
      );

      return {
        name: classroom.name,
        type: 'classroom',
        users: assignedDemoUsers
          .map(demoUser => {
            const user = users.find(
              user => user.userName === demoUser.name
            );

            if (!user) {
              console.warn(
                'Could not find adapted user:',
                demoUser.name
              );
              return null;
            }

            return {
              ...user,
              classroomName: classroom.name,
            };
          })
          .filter((user): user is NonNullable<typeof user> => user !== null)
      };
    }
  );

  return classrooms;
};
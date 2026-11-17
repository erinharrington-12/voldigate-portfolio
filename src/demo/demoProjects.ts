import ProgrammingLanguage from 'ProgrammingLanguage';

export interface DemoFile {
  name: string;
  language: ProgrammingLanguage;
  content: string;
}
export interface DemoProject {
  id: string;
  name: string;
  files: DemoFile[];
}

export const demoProjects: DemoProject[] = [
  {
    id: 'robot-basics-c',
    name: 'Robot Basics (C)',
    files: [
      {
        name: 'main.c',
        language: 'c',
        content: `#include <kipr/wombat.h>

int main() {
    motor(0, 50);
    msleep(2000);
    ao();
    return 0;
}`
      }
    ]
  },
  {
    id: 'robot-basics-python',
    name: 'Robot Basics (Python)',
    files: [
      {
        name: 'main.py',
        language: 'python',
        content: `from kipr import wombat

wombat.motor(0, 50)
wombat.msleep(2000)
wombat.ao()`
      }
    ]
  }
];
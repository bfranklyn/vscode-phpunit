import * as path from 'path';

export const fixturePath = (uri: string) => path.join(__dirname, 'fixtures', uri);
export const projectPath = (uri: string) => fixturePath(path.join('project-stub', uri));
export const normalPath = (path: string) =>
    path.replace(/^\w:/, (matched) => matched.toLowerCase());

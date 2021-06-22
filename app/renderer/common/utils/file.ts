import fs, { promises } from 'fs'

const fileAction = {
  read: (path: string) => promises.readFile(path, { encoding: 'utf8' }),
  write: (path: string, content: string) => promises.writeFile(path, content, { encoding: 'utf8' }),
  rename: (oldPath: string, newPath: string) => promises.rename(oldPath, newPath),
  delete: (path: string) => promises.unlink(path),
  hasFile: (path: string) => promises.access(path, fs.constants.F_OK),
  canWrite: (path: string) => promises.access(path, fs.constants.W_OK),
  canRead: (path: string) => promises.access(path, fs.constants.R_OK)
}

export default fileAction

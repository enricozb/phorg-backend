import fs from "fs";
import * as path from "path";

import { ImportStatus } from "../types";

const validFormats = [".png", ".jpg", ".mov", ".mp4"];
const isDir = (p: string) => fs.lstatSync(p).isDirectory();
const isMedia = (p: string) => validFormats.includes(path.extname(p).toLowerCase());

// return list of files after walking over `dir`
const walk = (dir: string) => {
  const paths = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullpath = path.join(dir, f);
    if (isDir(fullpath)) {
      paths.push.apply(paths, walk(fullpath));
    } else {
      paths.push(fullpath);
    }
  }
  return paths;
};

export class ImportModel {
  constructor() {
    this._status = {
      ongoing: false,
      precentage: 0,
      message: "",
      errors: [],
    };
  }

  status() {
    return this._status;
  }

  importMedia(pathsAndDirs: string[]) {
    console.log("importing", pathsAndDirs);

    const paths = this.resolvePaths(pathsAndDirs);
    console.log("found this many: ", paths.length);
  }

  private resolvePaths(pathsAndDirs: string[]) {
    const paths = [];
    for (const p of pathsAndDirs) {
      if (isDir(p)) {
        // extend paths by all files found after walking over the directory.
        paths.push.apply(paths, walk(p));
      } else {
        paths.push(p);
      }
    }
    return paths.filter(isMedia);
  }

  private _status: ImportStatus;
}

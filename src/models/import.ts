import * as path from "path";
import { spawn } from "child_process";
import fs from "fs";
import tmp from "tmp";

import { configModel } from "./";
import { ImportStatus } from "../types";
import { phorgConfigDir } from "./config";

const validFormats = [".png", ".jpg", ".mov", ".mp4"];
const isDir = (p: string) => fs.lstatSync(p).isDirectory();
const isMedia = (p: string) =>
  validFormats.includes(path.extname(p).toLowerCase());

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
  status() {
    return JSON.parse(
      fs.readFileSync(path.join(phorgConfigDir, "import_status.json"), "utf8")
    ) as ImportStatus;
  }

  importMedia(libraryId: string, pathsAndDirs: string[]) {
    const libraryPath = configModel.getLibraryPath(libraryId);

    const paths = this.resolvePaths(pathsAndDirs);
    const tmpfile = tmp.fileSync();
    fs.writeFileSync(tmpfile.name, paths.join("\n") + "\n");

    // call import
    const importScript = path.join(phorgConfigDir, "utils/import.py");
    const mediaDir = path.join(libraryPath, "media");
    const proc = spawn("python", [importScript, tmpfile.name, mediaDir], {
      detached: true,
    });

    proc.stdout.on("data", (data) => {
      console.log("stdout:", data.toString());
    });
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
}

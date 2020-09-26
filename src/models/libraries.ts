import fs from "fs";
import * as path from "path";

import { Library, Media } from "../types";

export class LibraryModel {
  static configName = "phorg-lib.json";

  emptyConfig(id: string, name: string): Library {
    return {
      id,
      name,
      albums: [],
      media: {},
    };
  }

  initializeLibrary(id: string, name: string, lib_path: string) {
    fs.mkdirSync(path.join(lib_path, "media"));
    fs.mkdirSync(path.join(lib_path, "thumb"));

    fs.writeFileSync(
      path.join(lib_path, LibraryModel.configName),
      JSON.stringify(this.emptyConfig(id, name), null, 2) + "\n"
    );
  }

  getLibraryAtPath(lib_path: string): Library {
    return JSON.parse(
      fs.readFileSync(path.join(lib_path, LibraryModel.configName), "utf8")
    );
  }

  addMedia(id: string, media: Record<string, Media>) {
  }
}

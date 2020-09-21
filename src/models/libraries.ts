import fs from "fs";
import * as path from "path";

import { Library, LibraryConfig } from "../types";

export class LibrariesModel {
  emptyConfig(id: string, name: string): LibraryConfig {
    return {
      id,
      name,
      albums: [],
      media: [],
    };
  }

  initializeLibrary(library: Library) {
    fs.mkdirSync(path.join(library.path, "media"));
    fs.mkdirSync(path.join(library.path, "thumb"));

    fs.writeFile(
      path.join(library.path, "phorg-lib.json"),
      JSON.stringify(this.emptyConfig(library.id, library.name), null, 2) +
        "\n",
      () => {}
    );
  }
}

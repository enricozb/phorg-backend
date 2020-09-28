import fs from "fs";
import * as path from "path";

import { Config } from "../types";

const configDir =
  process.env.XDG_CONFIG_HOME || path.join(process.env.HOME!, ".config");
export const phorgConfigDir = path.join(configDir, "phorg");
const phorgConfigPath = path.join(phorgConfigDir, "config.json");

export class ConfigModel {
  config: Config;

  constructor() {
    if (!fs.existsSync(phorgConfigPath)) {
      if (!fs.existsSync(phorgConfigDir)) {
        fs.mkdirSync(phorgConfigDir, { recursive: true });
      }
      this.writeConfig(this.emptyConfig());
    }

    this.config = JSON.parse(fs.readFileSync(phorgConfigPath, "utf8"));
  }

  emptyConfig(): Config {
    return {
      libraries: {},
    };
  }

  writeConfig(config: Config) {
    fs.writeFile(
      phorgConfigPath,
      JSON.stringify(config, null, 2) + "\n",
      () => {}
    );
  }

  addLibrary(id: string, path: string) {
    this.config.libraries[id] = path;
    this.writeConfig(this.config);
  }

  getLibraryPath(libraryId: string) {
    return this.config.libraries[libraryId];
  }
}

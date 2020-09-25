import fs from "fs";
import * as path from "path";

import { Config } from "../types";

const configDir =
  process.env.XDG_CONFIG_HOME || path.join(process.env.HOME!, ".config");
export const phorgConfigDir = path.join(configDir, "phorg");
const phorgConfigPath = path.join(phorgConfigDir, "config.json");

export class ConfigModel {
  initConfig() {
    if (fs.existsSync(phorgConfigPath)) {
      return;
    }

    if (!fs.existsSync(phorgConfigDir)) {
      fs.mkdirSync(phorgConfigDir, { recursive: true });
    }
    this.writeConfig(this.emptyConfig());
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

  getConfig(): Config {
    return JSON.parse(fs.readFileSync(phorgConfigPath, "utf8"));
  }

  addLibrary(id: string, path: string) {
    const phorgConfig = this.getConfig();
    phorgConfig.libraries[id] = path;
    this.writeConfig(phorgConfig);
  }
}

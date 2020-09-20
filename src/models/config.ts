import fs from "fs";
import * as path from "path";

import { Config } from "../types";

const configDir =
  process.env.XDG_HOME_CONFIG || path.join(process.env.HOME!, ".config");

export class ConfigModel {
  initConfig() {
    const phorgConfigDir = path.join(configDir, "phorg");
    const phorgConfigPath = path.join(phorgConfigDir, "config.json");
    if (fs.existsSync(phorgConfigPath)) {
      return;
    }

    if (!fs.existsSync(phorgConfigDir)) {
      fs.mkdirSync(phorgConfigDir, { recursive: true });
    }
    fs.writeFile(
      phorgConfigPath,
      JSON.stringify(this.emptyConfig(), null, 2) + "\n",
      () => {}
    );
  }

  emptyConfig(): Config {
    return {
      libraries: [],
    };
  }
}

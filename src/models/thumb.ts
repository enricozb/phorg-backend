import * as path from "path";

import { guid } from "../types";

export class ThumbModel {
  async getThumbnailPath(libraryPath: string, mediaId: guid) {
    return path.join(libraryPath, "thumb", `${mediaId}.jpg`);
  }
}

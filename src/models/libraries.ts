import fs from "fs";
import * as path from "path";

import { guid, Library, LibraryMedia } from "../types";

export class LibraryModel {
  static configName = "phorg-lib.json";

  emptyConfig(id: string, name: string): Library {
    return {
      id,
      name,
      albums: [],
      media: {
        items: {},
        burst_id: {},
        content_id: {},
      },
    };
  }

  initializeLibrary(id: string, name: string, libraryPath: string) {
    fs.mkdirSync(path.join(libraryPath, "media"));
    fs.mkdirSync(path.join(libraryPath, "thumb"));

    fs.writeFileSync(
      path.join(libraryPath, LibraryModel.configName),
      JSON.stringify(this.emptyConfig(id, name), null, 2) + "\n"
    );
  }

  getLibraryAtPath(libraryPath: string): Library {
    return JSON.parse(
      fs.readFileSync(path.join(libraryPath, LibraryModel.configName), "utf8")
    );
  }

  setLibraryAtPath(libraryPath: string, library: Library) {
    fs.writeFileSync(
      path.join(libraryPath, LibraryModel.configName),
      JSON.stringify(library, null, 2) + "\n"
    );
  }

  addMedia(libraryPath: string, importingMedia: LibraryMedia) {
    const library = this.getLibraryAtPath(libraryPath);

    library.media.items = { ...library.media.items, ...importingMedia.items };

    for (const [burst_id, newGuids] of Object.entries(
      importingMedia.burst_id
    )) {
      const existingGuids = library.media.burst_id[burst_id] || [];
      library.media.burst_id[burst_id] = [...existingGuids, ...newGuids];
    }

    for (const [content_id, newGuids] of Object.entries(
      importingMedia.content_id
    )) {
      const existingGuids = library.media.content_id[content_id] || [];
      library.media.content_id[content_id] = [...existingGuids, ...newGuids];
    }

    this.setLibraryAtPath(libraryPath, library);
  }

  getThumbnailPath(libraryPath: string, mediaId: guid) {
    return path.join(libraryPath, "thumb", `${mediaId}.jpg`);
  }

  getMediaPath(libraryPath: string, library: Library, mediaId: guid) {
    return path.join(libraryPath, "media", library.media.items[mediaId].filename);
  }
}

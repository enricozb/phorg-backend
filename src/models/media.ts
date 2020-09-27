import { libraryModel } from "./";
import { LibraryMedia } from "../types";

export class MediaModel {
  async addMedia(libraryId: string, media: LibraryMedia) {
    libraryModel.addMedia(libraryId, media);
  }
}

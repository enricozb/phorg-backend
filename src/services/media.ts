import { configModel, mediaModel } from "../models";
import { LibraryMedia } from "../types";

export const addMedia = async (libraryId: string, media: LibraryMedia) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  await mediaModel.addMedia(libraryPath, media);
};

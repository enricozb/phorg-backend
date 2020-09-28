import { configModel, libraryModel } from "../models";
import { LibraryMedia } from "../types";

export const addMedia = async (libraryId: string, media: LibraryMedia) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  await libraryModel.addMedia(libraryPath, media);
};

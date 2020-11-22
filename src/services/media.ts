import { configModel, libraryModel } from "../models";
import { guid, LibraryMedia } from "../types";

export const addMedia = async (libraryId: string, media: LibraryMedia) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  await libraryModel.addMedia(libraryPath, media);
};

export const getMediaPath = async (libraryId: guid, mediaId: guid) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  const library = libraryModel.getLibraryAtPath(libraryPath);
  return libraryModel.getMediaPath(libraryPath, library, mediaId);
};

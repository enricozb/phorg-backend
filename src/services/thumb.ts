import { configModel, libraryModel } from "../models";
import { guid } from "../types";

export const getThumbnailPath = async (libraryId: guid, mediaId: guid) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  return libraryModel.getThumbnailPath(libraryPath, mediaId);
};

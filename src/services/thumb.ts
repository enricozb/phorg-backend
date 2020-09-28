import { configModel, thumbModel } from "../models";
import { guid } from "../types";

export const getThumbnailPath = async (libraryId: guid, mediaId: guid) => {
  const libraryPath = configModel.getLibraryPath(libraryId);
  return thumbModel.getThumbnailPath(libraryPath, mediaId);
};

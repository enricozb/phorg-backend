import { configModel, libraryModel } from "../models";
import { guid, Library, LibraryPreview } from "../types";

export const getLibraryPreviews = async (): Promise<LibraryPreview[]> => {
  const paths = Object.values(configModel.config.libraries);
  return paths.map(
    (libraryId): LibraryPreview => {
      const { id, name } = libraryModel.getLibraryAtPath(libraryId);
      return { id, name };
    }
  );
};

export const getLibraryFromId = async (libraryId: guid): Promise<Library> => {
  return libraryModel.getLibraryAtPath(configModel.getLibraryPath(libraryId));
};

export const createLibrary = async (id: guid, name: string, path: string) => {
  libraryModel.initializeLibrary(id, name, path);
  configModel.addLibrary(id, path);
};

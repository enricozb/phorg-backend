import { configModel, libraryModel } from "../models";
import { Library } from "../types";

export const getLibraries = async () => {
  const paths = Object.values(configModel.config.libraries);
  return paths.map(libraryModel.getLibraryAtPath);
};

export const createLibrary = async (id: string, name: string, path: string) => {
  libraryModel.initializeLibrary(id, name, path);
  configModel.addLibrary(id, path);
};

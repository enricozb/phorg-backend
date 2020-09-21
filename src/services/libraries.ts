import { configModel, librariesModel } from "../models";
import { Library } from "../types";

export const getLibraries = async () => {
  const paths = Object.values(configModel.getConfig().libraries);
  return paths.map(librariesModel.getLibraryAtPath);
};

export const createLibrary = async (id: string, name: string, path: string) => {
  librariesModel.initializeLibrary(id, name, path);
  configModel.addLibrary(id, path);
};

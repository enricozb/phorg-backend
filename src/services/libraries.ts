import { configModel, librariesModel } from "../models";
import { Library } from "../types";

export const getLibraries = async () => {
  return Object.values(configModel.getConfig().libraries);
};

export const createLibrary = async (library: Library) => {
  librariesModel.initializeLibrary(library);
  configModel.addLibrary(library);
};

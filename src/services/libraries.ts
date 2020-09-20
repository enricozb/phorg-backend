import { librariesModel } from "../models";

export const getLibraries = async () => {
  return librariesModel.getLibraries();
};

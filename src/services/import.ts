import { importModel } from "../models";

export const importMedia = async (paths: string[]) => {
  await importModel.importMedia(paths);
};

export const status = async () => {
  return importModel.status();
};

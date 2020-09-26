import { importModel } from "../models";

export const importMedia = async (libraryId: string, paths: string[]) => {
  console.log("id:", libraryId);
  console.log("paths:", paths);
  await importModel.importMedia(libraryId, paths);
};

export const status = async () => {
  return importModel.status();
};

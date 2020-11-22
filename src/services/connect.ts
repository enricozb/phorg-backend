import { importModel } from "../models";
import { Socket } from "../types";

export const connect = async (): Promise<Socket> => {
  return importModel.newSocket();
};

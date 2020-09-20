import { Router } from "express";

import * as librariesService from "../services/libraries";

export const librariesRoute = Router();

librariesRoute.get("/", async (req, res) => {
  res.send(await librariesService.getLibraries()).status(200);
});

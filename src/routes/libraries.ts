import { Router } from "express";

import * as librariesService from "../services/libraries";

export const librariesRoute = Router();

librariesRoute.get("/", async (req, res) => {
  res.send(await librariesService.getLibraries()).status(200);
});

librariesRoute.post("/", async (req, res) => {
  const {id, name, path} = req.body.library;
  res.send(await librariesService.createLibrary(id, name, path)).status(200);
});

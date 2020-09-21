import { Router } from "express";

import * as librariesService from "../services/libraries";
import { Library } from "../types";

export const librariesRoute = Router();

librariesRoute.get("/", async (req, res) => {
  res.send(await librariesService.getLibraries()).status(200);
});

librariesRoute.post("/", async (req, res) => {
  const {id, name} = req.body.library as Library;
  res
    .send(await librariesService.createLibrary(id, name, req.body.path))
    .status(200);
});

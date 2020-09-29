import { Router } from "express";

import * as librariesService from "../services/libraries";
import { LibraryPreview } from "../types";

export const librariesRoute = Router();

librariesRoute.get("/", async (req, res) => {
  res.send(await librariesService.getLibraryPreviews()).status(200);
});

librariesRoute.get("/:libraryId", async (req, res) => {
  res.send(await librariesService.getLibraryFromId(req.params.libraryId)).status(200);
});

librariesRoute.post("/", async (req, res) => {
  const { id, name } = req.body.library as LibraryPreview;
  res
    .send(await librariesService.createLibrary(id, name, req.body.path))
    .status(200);
});

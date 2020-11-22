import { Router } from "express";

import * as mediaService from "../services/media";
import { guid, LibraryMedia } from "../types";

export const mediaRoute = Router();

mediaRoute.get("/:libraryId/:mediaId", async (req, res) => {
  const mediaPath = await mediaService.getMediaPath(
    req.params.libraryId as guid,
    req.params.mediaId as guid
  );
  res.sendFile(mediaPath);
});

mediaRoute.post("/", async (req, res) => {
  await mediaService.addMedia(
    req.body.libraryId as string,
    req.body.media as LibraryMedia
  );
  res.sendStatus(200);
});

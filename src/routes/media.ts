import { Router } from "express";

import * as mediaService from "../services/media";
import { LibraryMedia } from "../types";

export const mediaRoute = Router();

mediaRoute.post("/", async (req, res) => {
  await mediaService.addMedia(
    req.body.libraryId as string,
    req.body.media as LibraryMedia
  );
  res.sendStatus(200);
});

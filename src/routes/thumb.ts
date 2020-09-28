import { Router } from "express";

import * as thumbService from "../services/thumb";
import { guid } from "../types";

export const thumbRoute = Router();

thumbRoute.get("/:libraryId/:mediaId", async (req, res) => {
  const thumbnailPath = await thumbService.getThumbnailPath(
    req.params.libraryId as guid,
    req.params.mediaId as guid
  );
  res.sendFile(thumbnailPath);
});

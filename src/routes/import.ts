import { Router } from "express";

import * as importService from "../services/import";

export const importRoute = Router();

importRoute.post("/", async (req, res) => {
  // don't await b/c this is a long call
  importService.importMedia(
    req.body.libraryId as string,
    req.body.paths as string[]
  );
  res.status(200);
});

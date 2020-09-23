import { Router } from "express";

import * as importService from "../services/import";

export const importRoute = Router();

importRoute.post("/", async (req, res) => {
  // don't await b/c this is a long call
  importService.importMedia(req.body.paths as string[]);
  res.status(200);
});

importRoute.get("/status", async (req, res) => {
  res.send(await importService.status()).status(200);
});

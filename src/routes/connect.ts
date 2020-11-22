import { Router } from "express";

import * as connectService from "../services/connect";

export const connectRoute = Router();

connectRoute.get("/", async (req, res) => {
  // don't await b/c this is a long call
  res.send(await connectService.connect()).status(200);
});

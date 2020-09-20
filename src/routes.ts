import { Express, Router } from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import { librariesRoute } from "./routes/libraries";

export function setRoutes(app: Express) {
  const apiRoute = Router();
  app.use("/api", apiRoute);
  app.use(logger("dev"))
  apiRoute.use(bodyParser.json());
  apiRoute.use(bodyParser.urlencoded({ extended: true }));

  apiRoute.use("/libraries", librariesRoute);
}

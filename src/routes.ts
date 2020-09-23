import { Express, Router } from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import { librariesRoute } from "./routes/libraries";
import { importRoute } from "./routes/import";

export function setRoutes(app: Express) {
  const apiRoute = Router();
  app.use("/api", apiRoute);
  app.use(logger("dev"))
  apiRoute.use(bodyParser.json());
  apiRoute.use(bodyParser.urlencoded({ extended: true }));

  apiRoute.use("/libraries", librariesRoute);
  apiRoute.use("/import", importRoute);
}

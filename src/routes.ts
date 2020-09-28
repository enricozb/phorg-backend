import { Express, Router } from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import { importRoute } from "./routes/import";
import { librariesRoute } from "./routes/libraries";
import { mediaRoute } from "./routes/media";
import { thumbRoute } from "./routes/thumb";

export function setRoutes(app: Express) {
  const apiRoute = Router();
  app.use("/api", apiRoute);
  app.use(logger("dev"))
  apiRoute.use(bodyParser.json());
  apiRoute.use(bodyParser.urlencoded({ extended: true }));

  apiRoute.use("/import", importRoute);
  apiRoute.use("/libraries", librariesRoute);
  apiRoute.use("/media", mediaRoute);
  apiRoute.use("/thumb", thumbRoute);
}

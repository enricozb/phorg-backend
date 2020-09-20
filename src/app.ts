import express from "express";

import { setRoutes } from "./routes";
import { configModel } from "./models";

configModel.initConfig();

const app = express();
setRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("launched on port", port));

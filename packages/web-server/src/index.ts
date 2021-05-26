import express from "express";
import { Request, Response } from "express";
// @ts-ignore
import settings from "./settings.json";
import path from "path";

const STATIC_ROOT = path.resolve(__dirname, settings.staticRoot);

const app = express();

app.get("/", (_: Request, response: Response) => {
  response.sendFile("index.html", { root: STATIC_ROOT });
});

app.use(settings.staticUrl, express.static(STATIC_ROOT));

app.listen(settings.port, () => {
  console.log(`Starting application on port ${settings.port}.`);
});

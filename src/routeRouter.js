import express from "express";
import {
  getData,
  saveData,
} from "./Controller";

const routeRouter = express.Router();

routeRouter.get("/", saveData);

export default routeRouter;
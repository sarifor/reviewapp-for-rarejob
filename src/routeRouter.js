import express from "express";
import {
  getData,
} from "./Controller";

const routeRouter = express.Router();

routeRouter.get("/", getData);

export default routeRouter;
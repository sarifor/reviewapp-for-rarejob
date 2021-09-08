import express from "express";
import {
  getData,
  saveData,
  saveComment  
} from "./Controller";

const routeRouter = express.Router();

routeRouter.get("/", saveData);
routeRouter.get("/:id", saveComment);
export default routeRouter;
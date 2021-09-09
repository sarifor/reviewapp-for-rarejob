import express from "express";
import {
  saveData,
  saveComment  
} from "./Controller";

const routeRouter = express.Router();

routeRouter.get("/", saveData);
routeRouter.post("/", saveComment);
export default routeRouter;
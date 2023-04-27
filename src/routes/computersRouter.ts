import express from "express";
import { computersController } from "../controllers/computersController";
import { forceAuthorize } from "../middleware/forceAuthorize";

export const computersRouter = express.Router();

computersRouter
  .get("/", computersController.getAllcomputers)
  .get("/:id", computersController.getComputerById)
  .post("/", forceAuthorize, computersController.addComputer)
  .delete("/:id", forceAuthorize, computersController.deleteComputer)
  .put("/:id", forceAuthorize, computersController.updateComputer);

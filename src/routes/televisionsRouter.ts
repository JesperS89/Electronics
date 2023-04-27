import express from "express";
import { televisionsController } from "../controllers/televisionsController";
import { forceAuthorize } from "../middleware/forceAuthorize";
export const televisionsRouter = express.Router();

televisionsRouter
  .get("/", televisionsController.getAllTelevisions)
  .get("/:id", televisionsController.getTelevisionById)
  .delete("/:id", forceAuthorize, televisionsController.deleteTelevision)
  .post("/", forceAuthorize, televisionsController.addTelevision)
  .put("/:id", forceAuthorize, televisionsController.updateTelevision);

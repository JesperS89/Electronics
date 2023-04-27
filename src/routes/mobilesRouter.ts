import express from "express";
import { mobilesController } from "../controllers/mobilesController";
import { forceAuthorize } from "../middleware/forceAuthorize";

export const mobilesRouter = express.Router();

mobilesRouter
  .get("/", mobilesController.getAllMobiles)
  .get("/:id", mobilesController.getMobileById)
  .delete("/:id", forceAuthorize, mobilesController.deleteMobile)
  .post("/", forceAuthorize, mobilesController.addMobile)
  .put("/:id", forceAuthorize, mobilesController.updateMobile);

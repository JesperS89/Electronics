import express from "express";
import { audioController } from "../controllers/audioController";
import { forceAuthorize } from "../middleware/forceAuthorize";

export const audioRouter = express.Router();

audioRouter
  .get("/", audioController.getAllAudio)
  .get("/:id", audioController.getAudioById)
  .delete("/:id", forceAuthorize, audioController.deleteAudio)
  .post("/", forceAuthorize, audioController.addAudio)
  .put("/:id", forceAuthorize, audioController.updateAudio);

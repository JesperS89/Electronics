import { Request, Response } from "express";
import { audioClients } from "../clients/cms_client";
import { IAudio } from "../models/IAudio";

export const audioController = {
  getAllAudio: async (req: Request, res: Response) => {
    const data = await audioClients.getAllAudio();
    res.send(data);
  },
  getAudioById: async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = await audioClients.getAudioById(id);
    res.send(data);
  },
  deleteAudio: async (req: Request, res: Response) => {
    const id: number = +req.params.id;

    try {
      await audioClients.deleteAudio(id);
      res.sendStatus(200);
    } catch (error) {
      res.send(`Det finns ingen stereo med id ${id}`);
    }
  },
  addAudio: async (req: Request, res: Response) => {
    const audio: IAudio = req.body;

    if (audio !== undefined) {
      try {
        await audioClients.addAudio(audio);
        res.status(200).send(`La till ${audio.name} i databasen`);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    } else {
      res.sendStatus(400);
    }
  },
  updateAudio: async (req: Request, res: Response) => {
    let id: number = +req.params.id;
    const updatedAudio = req.body;
    if (updatedAudio !== undefined) {
      try {
        await audioClients.updateAudio(updatedAudio, id);
        res.status(200).send(`Ändringar gjorda`);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    } else {
      res.sendStatus(400);
    }
  },
};

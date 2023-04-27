import { Request, Response } from "express";
import { mobilesClients } from "../clients/cms_client";
import { IMobile } from "../models/IMobile";

export const mobilesController = {
  getAllMobiles: async (req: Request, res: Response) => {
    const data = await mobilesClients.getAllMobiles();
    res.send(data);
  },
  getMobileById: async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = await mobilesClients.getMobileById(id);
    res.send(data);
  },
  deleteMobile: async (req: Request, res: Response) => {
    const id: number = +req.params.id;

    try {
      await mobilesClients.deleteMobile(id);
      res.sendStatus(200);
    } catch (error) {
      res.send(`Det finns ingen mobil med id ${id}`);
    }
  },
  addMobile: async (req: Request, res: Response) => {
    const mobile: IMobile = req.body;

    if (!!mobile) {
      try {
        await mobilesClients.addMobile(mobile);
        res.status(200).send(`La till ${mobile.name} i databasen`);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    } else {
      res.sendStatus(400);
    }
  },
  updateMobile: async (req: Request, res: Response) => {
    let id: number = +req.params.id;
    const updatedMobile = req.body;
    if (updatedMobile !== undefined) {
      try {
        await mobilesClients.updateMobile(updatedMobile, id);
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

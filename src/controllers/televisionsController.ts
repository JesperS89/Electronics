import { Request, Response } from "express";
import { televisionsClients } from "../clients/cms_client";
import { ITelevision } from "../models/ITelevision";

export const televisionsController = {
  getAllTelevisions: async (req: Request, res: Response) => {
    const data = await televisionsClients.getAllTelevisions();
    res.send(data);
  },
  getTelevisionById: async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = await televisionsClients.getTelevisionById(id);
    res.send(data);
  },
  deleteTelevision: async (req: Request, res: Response) => {
    const id: number = +req.params.id;

    try {
      await televisionsClients.deleteTelevision(id);
      res.sendStatus(200);
    } catch (error) {
      res.send(`Det finns ingen tv med id ${id}`);
    }
  },
  addTelevision: async (req: Request, res: Response) => {
    const television: ITelevision = req.body;

    if (television !== undefined) {
      try {
        await televisionsClients.addTelevision(television);
        res.status(200).send(`La till ${television.name} i databasen`);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    } else {
      res.sendStatus(400);
    }
  },
  updateTelevision: async (req: Request, res: Response) => {
    let id: number = +req.params.id;
    const updatedTelevision = req.body;
    if (updatedTelevision !== undefined) {
      try {
        await televisionsClients.updateTelevision(updatedTelevision, id);
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

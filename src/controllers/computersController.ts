import { Request, Response } from "express";
import { computersClients } from "../clients/cms_client";
import { IComputer } from "../models/IComputer";

export const computersController = {
  getAllcomputers: async (req: Request, res: Response) => {
    const data = await computersClients.getAllComputers();
    res.send(data);
  },
  getComputerById: async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = await computersClients.getComputerById(id);
    res.send(data);
  },
  addComputer: async (req: Request, res: Response) => {
    const computer: IComputer = req.body;

    if (computer !== undefined) {
      try {
        await computersClients.addComputer(computer);
        res.status(200).send(`La till ${computer.name} i databasen`);
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
      }
    } else {
      res.sendStatus(400);
    }
  },
  deleteComputer: async (req: Request, res: Response) => {
    const id: number = +req.params.id;

    try {
      await computersClients.deleteComputer(id);
      res.sendStatus(200);
    } catch (error) {
      res.send(`Det finns ingen dator med id ${id}`);
    }
  },
  updateComputer: async (req: Request, res: Response) => {
    let id: number = +req.params.id;
    const updatedComputer = req.body;
    if (updatedComputer !== undefined) {
      try {
        await computersClients.updateComputer(updatedComputer, id);
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

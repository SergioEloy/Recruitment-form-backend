import { Router, Request, Response } from "express";
import {
  createSkills,
  readSkills,
  updateSkills,
  deleteSkills,
} from "../repositories/Skills.repo";
import { ISkills } from "../interfaces";

export const RSkills = Router();

RSkills.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as ISkills;
    const newSkills = await createSkills(data);
    if (newSkills) {
      return res.send(newSkills);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RSkills.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const skills = await readSkills(id);
    if (skills) {
      return res.send(skills);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RSkills.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as ISkills;
    const updatedSkills = await updateSkills(id, data);
    if (updatedSkills) {
      return res.send(updatedSkills);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RSkills.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteSkills(id);
    if (success) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

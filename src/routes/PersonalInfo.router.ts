import { Router, Request, Response } from "express";
import {
  createPersonalInfo,
  readPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../repositories/PersonalInfo.repo";
import { IPersonalInfo } from "../interfaces";

export const RPersonalInfo = Router();

RPersonalInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IPersonalInfo;
    const newPersonalInfo = await createPersonalInfo(data);
    if (newPersonalInfo) {
      return res.send(newPersonalInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RPersonalInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const personalInfo = await readPersonalInfo(id);
    if (personalInfo) {
      return res.send(personalInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RPersonalInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IPersonalInfo;
    const updatedPersonalInfo = await updatePersonalInfo(id, data);
    if (updatedPersonalInfo) {
      return res.send(updatedPersonalInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RPersonalInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deletePersonalInfo(id);
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

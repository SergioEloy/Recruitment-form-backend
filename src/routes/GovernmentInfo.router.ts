import { Router, Request, Response } from "express";
import {
  createGovernmentInfo,
  readGovernmentInfo,
  updateGovernmentInfo,
  deleteGovernmentInfo,
} from "../repositories/GovernmentInfo.repo";
import { IGovernmentInfo } from "../interfaces";

export const RGovernmentInfo = Router();

RGovernmentInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IGovernmentInfo;
    const newGovernmentInfo = await createGovernmentInfo(data);
    if (newGovernmentInfo) {
      return res.send(newGovernmentInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RGovernmentInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const governmentInfo = await readGovernmentInfo(id);
    if (governmentInfo) {
      return res.send(governmentInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RGovernmentInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IGovernmentInfo;
    const updatedGovernmentInfo = await updateGovernmentInfo(id, data);
    if (updatedGovernmentInfo) {
      return res.send(updatedGovernmentInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RGovernmentInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteGovernmentInfo(id);
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

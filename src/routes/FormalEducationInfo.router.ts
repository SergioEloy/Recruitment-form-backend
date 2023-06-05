import { Router, Request, Response } from "express";
import {
  createFormalEducationInfo,
  readFormalEducationInfo,
  updateFormalEducationInfo,
  deleteFormalEducationInfo,
} from "../repositories/FormalEducationInfo.repo";
import { IFormalEducationInfo } from "../interfaces";

export const RFormalEducationInfo = Router();

RFormalEducationInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IFormalEducationInfo;
    const newFormalEducationInfo = await createFormalEducationInfo(data);
    if (newFormalEducationInfo) {
      return res.send(newFormalEducationInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RFormalEducationInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const formalEducationInfo = await readFormalEducationInfo(id);
    if (formalEducationInfo) {
      return res.send(formalEducationInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RFormalEducationInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IFormalEducationInfo;
    const updatedFormalEducationInfo = await updateFormalEducationInfo(
      id,
      data
    );
    if (updatedFormalEducationInfo) {
      return res.send(updatedFormalEducationInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RFormalEducationInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteFormalEducationInfo(id);
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

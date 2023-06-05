import { Router, Request, Response } from "express";
import {
  createAcademicInfo,
  readAcademicInfo,
  updateAcademicInfo,
  deleteAcademicInfo,
} from "../repositories/AcademicInfo.repo";
import { IAcademicInfo } from "../interfaces";

export const RAcademicInfo = Router();

RAcademicInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IAcademicInfo;
    const newAcademicInfo = await createAcademicInfo(data);
    if (newAcademicInfo) {
      return res.send(newAcademicInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAcademicInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const academicInfo = await readAcademicInfo(id);
    if (academicInfo) {
      return res.send(academicInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAcademicInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IAcademicInfo;
    const updatedAcademicInfo = await updateAcademicInfo(id, data);
    if (updatedAcademicInfo) {
      return res.send(updatedAcademicInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAcademicInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAcademicInfo(id);
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

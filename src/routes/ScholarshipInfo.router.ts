import { Router, Request, Response } from "express";
import {
  createScholarshipInfo,
  readScholarshipInfo,
  updateScholarshipInfo,
  deleteScholarshipInfo,
} from "../repositories/ScholarshipInfo.repo";
import { IScholarshipInfo } from "../interfaces";

export const RScholarshipInfo = Router();

RScholarshipInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IScholarshipInfo;
    const newScholarshipInfo = await createScholarshipInfo(data);
    if (newScholarshipInfo) {
      return res.send(newScholarshipInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RScholarshipInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const scholarshipInfo = await readScholarshipInfo(id);
    if (scholarshipInfo) {
      return res.send(scholarshipInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RScholarshipInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IScholarshipInfo;
    const updatedScholarshipInfo = await updateScholarshipInfo(id, data);
    if (updatedScholarshipInfo) {
      return res.send(updatedScholarshipInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RScholarshipInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteScholarshipInfo(id);
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

import { Router, Request, Response } from "express";
import {
  createProfile,
  readProfile,
  updateProfile,
  deleteProfile,
} from "../repositories/Profile.repo";
import { IProfile } from "../interfaces";

export const RProfile = Router();

RProfile.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IProfile;
    const newProfile = await createProfile(data);
    if (newProfile) {
      return res.send(newProfile);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RProfile.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const profile = await readProfile(id);
    if (profile) {
      return res.send(profile);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RProfile.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IProfile;
    const updatedProfile = await updateProfile(id, data);
    if (updatedProfile) {
      return res.send(updatedProfile);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RProfile.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteProfile(id);
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

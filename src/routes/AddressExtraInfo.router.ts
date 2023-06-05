import { Router, Request, Response } from "express";
import {
  createAddressExtraInfo,
  readAddressExtraInfo,
  updateAddressExtraInfo,
  deleteAddressExtraInfo,
} from "../repositories/AddressExtraInfo.repo";
import { IAddressExtraInfo } from "../interfaces";

export const RAddressExtraInfo = Router();

RAddressExtraInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IAddressExtraInfo;
    const newAddressExtraInfo = await createAddressExtraInfo(data);
    if (newAddressExtraInfo) {
      return res.send(newAddressExtraInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddressExtraInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const addressExtraInfo = await readAddressExtraInfo(id);
    if (addressExtraInfo) {
      return res.send(addressExtraInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddressExtraInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IAddressExtraInfo;
    const updatedAddressExtraInfo = await updateAddressExtraInfo(id, data);
    if (updatedAddressExtraInfo) {
      return res.send(updatedAddressExtraInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddressExtraInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAddressExtraInfo(id);
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

import { Router, Request, Response } from "express";
import {
  createAddress,
  readAddress,
  updateAddress,
  deleteAddress,
} from "../repositories/Address.repo";
import { IAddress } from "../interfaces";

export const RAddress = Router();

RAddress.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IAddress;
    const newAddress = await createAddress(data);
    if (newAddress) {
      return res.send(newAddress);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddress.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const address = await readAddress(id);
    if (address) {
      return res.send(address);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddress.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IAddress;
    const updatedAddress = await updateAddress(id, data);
    if (updatedAddress) {
      return res.send(updatedAddress);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RAddress.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteAddress(id);
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

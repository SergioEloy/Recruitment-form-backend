import { Router, Request, Response } from "express";
import {
  createBankAccountInfo,
  readBankAccountInfo,
  updateBankAccountInfo,
  deleteBankAccountInfo,
} from "../repositories/BankAccountInfo.repo";
import { IBankAccountInfo } from "../interfaces";

export const RBankAccountInfo = Router();

RBankAccountInfo.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body as IBankAccountInfo;
    const newBankAccountInfo = await createBankAccountInfo(data);
    if (newBankAccountInfo) {
      return res.send(newBankAccountInfo);
    } else {
      return res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RBankAccountInfo.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const bankAccountInfo = await readBankAccountInfo(id);
    if (bankAccountInfo) {
      return res.send(bankAccountInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RBankAccountInfo.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = req.body as IBankAccountInfo;
    const updatedBankAccountInfo = await updateBankAccountInfo(id, data);
    if (updatedBankAccountInfo) {
      return res.send(updatedBankAccountInfo);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RBankAccountInfo.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const success = await deleteBankAccountInfo(id);
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

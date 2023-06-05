import { Router, Request, Response } from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../repositories/User.repo";
import { IUser } from "../interfaces";

export const RUser = Router();

RUser.post("/", async (req: Request, res: Response) => {
  try {
    const { username, firstName, lastName, email, phone } = req.body as IUser;
    const newUser = await createUser({
      username,
      firstName,
      lastName,
      email,
      phone,
    });
    if (!newUser) {
      return res.sendStatus(500);
    }
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

RUser.get("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const foundUser = await readUser(username);
  if (!foundUser) {
    return res.sendStatus(404);
  }
  return res.json(foundUser);
});

RUser.put("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const {
    username: newUsername,
    firstName,
    lastName,
    email,
    phone,
  } = req.body as IUser;
  const updatedUser = await updateUser(username, {
    username: newUsername,
    firstName,
    lastName,
    email,
    phone,
  });
  if (!updatedUser) {
    return res.sendStatus(404);
  }
  return res.json(updatedUser);
});

RUser.delete("/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const success = await deleteUser(username);
  if (!success) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
});

export default RUser;

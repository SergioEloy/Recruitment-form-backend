import User from "../models/User";
import { IUser } from "../interfaces";

// Create
export const createUser = async (data: IUser): Promise<User | null> => {
  try {
    const response = await User.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readUser = async (username: string): Promise<User | null> => {
  try {
    const response = await User.findOne({ where: { username } });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateUser = async (
  username: string,
  data: IUser
): Promise<User | null> => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      await user.update(data);
      return user;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteUser = async (username: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      await user.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default { createUser, readUser, updateUser, deleteUser };

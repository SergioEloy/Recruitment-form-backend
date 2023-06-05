import GovernmentInfo from "../models/GovernmentInfo";
import { IGovernmentInfo } from "../interfaces";

// Create
export const createGovernmentInfo = async (
  data: IGovernmentInfo
): Promise<GovernmentInfo | null> => {
  try {
    const response = await GovernmentInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readGovernmentInfo = async (
  id: number
): Promise<GovernmentInfo | null> => {
  try {
    const response = await GovernmentInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateGovernmentInfo = async (
  id: number,
  data: IGovernmentInfo
): Promise<GovernmentInfo | null> => {
  try {
    const governmentInfo = await GovernmentInfo.findByPk(id);
    if (governmentInfo) {
      await governmentInfo.update(data);
      return governmentInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteGovernmentInfo = async (id: number): Promise<boolean> => {
  try {
    const governmentInfo = await GovernmentInfo.findByPk(id);
    if (governmentInfo) {
      await governmentInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createGovernmentInfo,
  readGovernmentInfo,
  updateGovernmentInfo,
  deleteGovernmentInfo,
};

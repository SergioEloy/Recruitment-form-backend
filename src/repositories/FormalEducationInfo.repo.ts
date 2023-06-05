import FormalEducationInfo from "../models/FormalEducationInfo";
import { IFormalEducationInfo } from "../interfaces";

// Create
export const createFormalEducationInfo = async (
  data: IFormalEducationInfo
): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readFormalEducationInfo = async (
  id: number
): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateFormalEducationInfo = async (
  id: number,
  data: IFormalEducationInfo
): Promise<FormalEducationInfo | null> => {
  try {
    const formalEducationInfo = await FormalEducationInfo.findByPk(id);
    if (formalEducationInfo) {
      await formalEducationInfo.update(data);
      return formalEducationInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteFormalEducationInfo = async (
  id: number
): Promise<boolean> => {
  try {
    const formalEducationInfo = await FormalEducationInfo.findByPk(id);
    if (formalEducationInfo) {
      await formalEducationInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createFormalEducationInfo,
  readFormalEducationInfo,
  updateFormalEducationInfo,
  deleteFormalEducationInfo,
};

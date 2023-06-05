import PersonalInfo from "../models/PersonalInfo";
import { IPersonalInfo } from "../interfaces";

// Create
export const createPersonalInfo = async (
  data: IPersonalInfo
): Promise<PersonalInfo | null> => {
  try {
    const response = await PersonalInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readPersonalInfo = async (
  id: number
): Promise<PersonalInfo | null> => {
  try {
    const response = await PersonalInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updatePersonalInfo = async (
  id: number,
  data: IPersonalInfo
): Promise<PersonalInfo | null> => {
  try {
    const personalInfo = await PersonalInfo.findByPk(id);
    if (personalInfo) {
      await personalInfo.update(data);
      return personalInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deletePersonalInfo = async (id: number): Promise<boolean> => {
  try {
    const personalInfo = await PersonalInfo.findByPk(id);
    if (personalInfo) {
      await personalInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createPersonalInfo,
  readPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
};

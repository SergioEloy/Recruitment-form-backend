import AcademicInfo from "../models/AcademicInfo";
import { IAcademicInfo } from "../interfaces";

// Create
export const createAcademicInfo = async (
  data: IAcademicInfo
): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readAcademicInfo = async (
  id: number
): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateAcademicInfo = async (
  id: number,
  data: IAcademicInfo
): Promise<AcademicInfo | null> => {
  try {
    const academicInfo = await AcademicInfo.findByPk(id);
    if (academicInfo) {
      await academicInfo.update(data);
      return academicInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteAcademicInfo = async (id: number): Promise<boolean> => {
  try {
    const academicInfo = await AcademicInfo.findByPk(id);
    if (academicInfo) {
      await academicInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createAcademicInfo,
  readAcademicInfo,
  updateAcademicInfo,
  deleteAcademicInfo,
};

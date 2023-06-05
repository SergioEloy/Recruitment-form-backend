import ScholarshipInfo from "../models/ScholarshipInfo";
import { IScholarshipInfo } from "../interfaces";

// Create
export const createScholarshipInfo = async (
  data: IScholarshipInfo
): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readScholarshipInfo = async (
  id: number
): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateScholarshipInfo = async (
  id: number,
  data: IScholarshipInfo
): Promise<ScholarshipInfo | null> => {
  try {
    const scholarshipInfo = await ScholarshipInfo.findByPk(id);
    if (scholarshipInfo) {
      await scholarshipInfo.update(data);
      return scholarshipInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteScholarshipInfo = async (id: number): Promise<boolean> => {
  try {
    const scholarshipInfo = await ScholarshipInfo.findByPk(id);
    if (scholarshipInfo) {
      await scholarshipInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createScholarshipInfo,
  readScholarshipInfo,
  updateScholarshipInfo,
  deleteScholarshipInfo,
};

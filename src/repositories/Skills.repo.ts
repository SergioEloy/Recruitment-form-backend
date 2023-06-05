import Skills from "../models/Skills";
import { ISkills } from "../interfaces";

// Create
export const createSkills = async (data: ISkills): Promise<Skills | null> => {
  try {
    const response = await Skills.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readSkills = async (id: number): Promise<Skills | null> => {
  try {
    const response = await Skills.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateSkills = async (
  id: number,
  data: ISkills
): Promise<Skills | null> => {
  try {
    const skills = await Skills.findByPk(id);
    if (skills) {
      await skills.update(data);
      return skills;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteSkills = async (id: number): Promise<boolean> => {
  try {
    const skills = await Skills.findByPk(id);
    if (skills) {
      await skills.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default { createSkills, readSkills, updateSkills, deleteSkills };

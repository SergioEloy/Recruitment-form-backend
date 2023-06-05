import Profile from "../models/Profile";
import { IProfile } from "../interfaces";

// Create
export const createProfile = async (
  data: IProfile
): Promise<Profile | null> => {
  try {
    const response = await Profile.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readProfile = async (id: number): Promise<Profile | null> => {
  try {
    const response = await Profile.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateProfile = async (
  id: number,
  data: IProfile
): Promise<Profile | null> => {
  try {
    const profile = await Profile.findByPk(id);
    if (profile) {
      await profile.update(data);
      return profile;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteProfile = async (id: number): Promise<boolean> => {
  try {
    const profile = await Profile.findByPk(id);
    if (profile) {
      await profile.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default { createProfile, readProfile, updateProfile, deleteProfile };

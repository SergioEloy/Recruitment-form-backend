import AddressExtraInfo from "../models/AddressExtraInfo";
import { IAddressExtraInfo } from "../interfaces";

// Create
export const createAddressExtraInfo = async (
  data: IAddressExtraInfo
): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readAddressExtraInfo = async (
  id: number
): Promise<AddressExtraInfo | null> => {
  try {
    const response = await AddressExtraInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateAddressExtraInfo = async (
  id: number,
  data: IAddressExtraInfo
): Promise<AddressExtraInfo | null> => {
  try {
    const addressExtraInfo = await AddressExtraInfo.findByPk(id);
    if (addressExtraInfo) {
      await addressExtraInfo.update(data);
      return addressExtraInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteAddressExtraInfo = async (id: number): Promise<boolean> => {
  try {
    const addressExtraInfo = await AddressExtraInfo.findByPk(id);
    if (addressExtraInfo) {
      await addressExtraInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createAddressExtraInfo,
  readAddressExtraInfo,
  updateAddressExtraInfo,
  deleteAddressExtraInfo,
};

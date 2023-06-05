import Address from "../models/Address";
import { IAddress } from "../interfaces";

// Create
export const createAddress = async (
  data: IAddress
): Promise<Address | null> => {
  try {
    const response = await Address.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readAddress = async (id: number): Promise<Address | null> => {
  try {
    const response = await Address.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateAddress = async (
  id: number,
  data: IAddress
): Promise<Address | null> => {
  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.update(data);
      return address;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteAddress = async (id: number): Promise<boolean> => {
  try {
    const address = await Address.findByPk(id);
    if (address) {
      await address.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createAddress,
  readAddress,
  updateAddress,
  deleteAddress,
};

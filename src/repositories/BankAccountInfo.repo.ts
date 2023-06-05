import BankAccountInfo from "../models/BankAccountInfo";
import { IBankAccountInfo } from "../interfaces";

// Create
export const createBankAccountInfo = async (
  data: IBankAccountInfo
): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.create(data);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Read
export const readBankAccountInfo = async (
  id: number
): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.findByPk(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update
export const updateBankAccountInfo = async (
  id: number,
  data: IBankAccountInfo
): Promise<BankAccountInfo | null> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.update(data);
      return bankAccountInfo;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete
export const deleteBankAccountInfo = async (id: number): Promise<boolean> => {
  try {
    const bankAccountInfo = await BankAccountInfo.findByPk(id);
    if (bankAccountInfo) {
      await bankAccountInfo.destroy();
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  createBankAccountInfo,
  readBankAccountInfo,
  updateBankAccountInfo,
  deleteBankAccountInfo,
};

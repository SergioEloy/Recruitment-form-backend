import { Sequelize } from "sequelize";
import { setUpUser } from "../models/User";
import { setUpPersonalInfo } from "../models/PersonalInfo";
import { setUpAddress } from "../models/Address";
import { setUpAddressExtraInfo } from "../models/AddressExtraInfo";
import { setUpGovernmentInfo } from "../models/GovernmentInfo";
import { setUpProfile } from "../models/Profile";
import { setUpAcademicInfo } from "../models/AcademicInfo";
import { setUpFormalEducationInfo } from "../models/FormalEducationInfo";
import { setUpScholarshipInfo } from "../models/ScholarshipInfo";
import { setUpBankAccountInfo } from "../models/BankAccountInfo";
import { setUpSkills } from "../models/Skills";

export let sequelize: Sequelize;

export const startDB = (url: string): Sequelize => {
  sequelize = new Sequelize(url);
  setUpUser(sequelize);
  setUpPersonalInfo(sequelize);
  setUpAddress(sequelize);
  setUpAddressExtraInfo(sequelize);
  setUpGovernmentInfo(sequelize);
  setUpProfile(sequelize);
  setUpAcademicInfo(sequelize);
  setUpFormalEducationInfo(sequelize);
  setUpScholarshipInfo(sequelize);
  setUpBankAccountInfo(sequelize);
  setUpSkills(sequelize);

  return sequelize;
};

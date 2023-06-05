import { Router } from "express";
import { RUser } from "./User.router";
import { RPersonalInfo } from "./PersonalInfo.router";
import { RAddress } from "./Address.router";
import { RAddressExtraInfo } from "./AddressExtraInfo.router";
import { RGovernmentInfo } from "./GovernmentInfo.router";
import { RProfile } from "./Profile.router";
import { RAcademicInfo } from "./AcademicInfo.router";
import { RFormalEducationInfo } from "./FormalEducationInfo.router";
import { RScholarshipInfo } from "./ScholarshipInfo.router";
import { RBankAccountInfo } from "./BankAccountInfo.router";
import { RSkills } from "./Skills.router";

const APIRouter = Router();

APIRouter.use("/user", RUser);
APIRouter.use("/personalInfo", RPersonalInfo);
APIRouter.use("/address", RAddress);
APIRouter.use("/addressExtraInfo", RAddressExtraInfo);
APIRouter.use("/governmentInfo", RGovernmentInfo);
APIRouter.use("/profile", RProfile);
APIRouter.use("/academicInfo", RAcademicInfo);
APIRouter.use("/formalEducationInfo", RFormalEducationInfo);
APIRouter.use("/scholarshipInfo", RScholarshipInfo);
APIRouter.use("/bankAccountInfo", RBankAccountInfo);
APIRouter.use("/skills", RSkills);

export default APIRouter;

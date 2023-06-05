"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonalInfo = exports.updatePersonalInfo = exports.readPersonalInfo = exports.createPersonalInfo = void 0;
const PersonalInfo_1 = __importDefault(require("../models/PersonalInfo"));
// Create
const createPersonalInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield PersonalInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createPersonalInfo = createPersonalInfo;
// Read
const readPersonalInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield PersonalInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readPersonalInfo = readPersonalInfo;
// Update
const updatePersonalInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalInfo = yield PersonalInfo_1.default.findByPk(id);
        if (personalInfo) {
            yield personalInfo.update(data);
            return personalInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updatePersonalInfo = updatePersonalInfo;
// Delete
const deletePersonalInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalInfo = yield PersonalInfo_1.default.findByPk(id);
        if (personalInfo) {
            yield personalInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deletePersonalInfo = deletePersonalInfo;
exports.default = {
    createPersonalInfo: exports.createPersonalInfo,
    readPersonalInfo: exports.readPersonalInfo,
    updatePersonalInfo: exports.updatePersonalInfo,
    deletePersonalInfo: exports.deletePersonalInfo,
};

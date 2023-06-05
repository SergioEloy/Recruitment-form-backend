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
exports.deleteAcademicInfo = exports.updateAcademicInfo = exports.readAcademicInfo = exports.createAcademicInfo = void 0;
const AcademicInfo_1 = __importDefault(require("../models/AcademicInfo"));
// Create
const createAcademicInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AcademicInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAcademicInfo = createAcademicInfo;
// Read
const readAcademicInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AcademicInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readAcademicInfo = readAcademicInfo;
// Update
const updateAcademicInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const academicInfo = yield AcademicInfo_1.default.findByPk(id);
        if (academicInfo) {
            yield academicInfo.update(data);
            return academicInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateAcademicInfo = updateAcademicInfo;
// Delete
const deleteAcademicInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const academicInfo = yield AcademicInfo_1.default.findByPk(id);
        if (academicInfo) {
            yield academicInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteAcademicInfo = deleteAcademicInfo;
exports.default = {
    createAcademicInfo: exports.createAcademicInfo,
    readAcademicInfo: exports.readAcademicInfo,
    updateAcademicInfo: exports.updateAcademicInfo,
    deleteAcademicInfo: exports.deleteAcademicInfo,
};

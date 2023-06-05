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
exports.deleteScholarshipInfo = exports.updateScholarshipInfo = exports.readScholarshipInfo = exports.createScholarshipInfo = void 0;
const ScholarshipInfo_1 = __importDefault(require("../models/ScholarshipInfo"));
// Create
const createScholarshipInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield ScholarshipInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createScholarshipInfo = createScholarshipInfo;
// Read
const readScholarshipInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield ScholarshipInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readScholarshipInfo = readScholarshipInfo;
// Update
const updateScholarshipInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scholarshipInfo = yield ScholarshipInfo_1.default.findByPk(id);
        if (scholarshipInfo) {
            yield scholarshipInfo.update(data);
            return scholarshipInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateScholarshipInfo = updateScholarshipInfo;
// Delete
const deleteScholarshipInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scholarshipInfo = yield ScholarshipInfo_1.default.findByPk(id);
        if (scholarshipInfo) {
            yield scholarshipInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteScholarshipInfo = deleteScholarshipInfo;
exports.default = {
    createScholarshipInfo: exports.createScholarshipInfo,
    readScholarshipInfo: exports.readScholarshipInfo,
    updateScholarshipInfo: exports.updateScholarshipInfo,
    deleteScholarshipInfo: exports.deleteScholarshipInfo,
};

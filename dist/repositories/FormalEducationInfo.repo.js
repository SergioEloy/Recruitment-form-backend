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
exports.deleteFormalEducationInfo = exports.updateFormalEducationInfo = exports.readFormalEducationInfo = exports.createFormalEducationInfo = void 0;
const FormalEducationInfo_1 = __importDefault(require("../models/FormalEducationInfo"));
// Create
const createFormalEducationInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield FormalEducationInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createFormalEducationInfo = createFormalEducationInfo;
// Read
const readFormalEducationInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield FormalEducationInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readFormalEducationInfo = readFormalEducationInfo;
// Update
const updateFormalEducationInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formalEducationInfo = yield FormalEducationInfo_1.default.findByPk(id);
        if (formalEducationInfo) {
            yield formalEducationInfo.update(data);
            return formalEducationInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateFormalEducationInfo = updateFormalEducationInfo;
// Delete
const deleteFormalEducationInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formalEducationInfo = yield FormalEducationInfo_1.default.findByPk(id);
        if (formalEducationInfo) {
            yield formalEducationInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteFormalEducationInfo = deleteFormalEducationInfo;
exports.default = {
    createFormalEducationInfo: exports.createFormalEducationInfo,
    readFormalEducationInfo: exports.readFormalEducationInfo,
    updateFormalEducationInfo: exports.updateFormalEducationInfo,
    deleteFormalEducationInfo: exports.deleteFormalEducationInfo,
};

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
exports.deleteGovernmentInfo = exports.updateGovernmentInfo = exports.readGovernmentInfo = exports.createGovernmentInfo = void 0;
const GovernmentInfo_1 = __importDefault(require("../models/GovernmentInfo"));
// Create
const createGovernmentInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield GovernmentInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createGovernmentInfo = createGovernmentInfo;
// Read
const readGovernmentInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield GovernmentInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readGovernmentInfo = readGovernmentInfo;
// Update
const updateGovernmentInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const governmentInfo = yield GovernmentInfo_1.default.findByPk(id);
        if (governmentInfo) {
            yield governmentInfo.update(data);
            return governmentInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateGovernmentInfo = updateGovernmentInfo;
// Delete
const deleteGovernmentInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const governmentInfo = yield GovernmentInfo_1.default.findByPk(id);
        if (governmentInfo) {
            yield governmentInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteGovernmentInfo = deleteGovernmentInfo;
exports.default = {
    createGovernmentInfo: exports.createGovernmentInfo,
    readGovernmentInfo: exports.readGovernmentInfo,
    updateGovernmentInfo: exports.updateGovernmentInfo,
    deleteGovernmentInfo: exports.deleteGovernmentInfo,
};

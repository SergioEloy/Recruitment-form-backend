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
exports.deleteBankAccountInfo = exports.updateBankAccountInfo = exports.readBankAccountInfo = exports.createBankAccountInfo = void 0;
const BankAccountInfo_1 = __importDefault(require("../models/BankAccountInfo"));
// Create
const createBankAccountInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield BankAccountInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createBankAccountInfo = createBankAccountInfo;
// Read
const readBankAccountInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield BankAccountInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readBankAccountInfo = readBankAccountInfo;
// Update
const updateBankAccountInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankAccountInfo = yield BankAccountInfo_1.default.findByPk(id);
        if (bankAccountInfo) {
            yield bankAccountInfo.update(data);
            return bankAccountInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateBankAccountInfo = updateBankAccountInfo;
// Delete
const deleteBankAccountInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankAccountInfo = yield BankAccountInfo_1.default.findByPk(id);
        if (bankAccountInfo) {
            yield bankAccountInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteBankAccountInfo = deleteBankAccountInfo;
exports.default = {
    createBankAccountInfo: exports.createBankAccountInfo,
    readBankAccountInfo: exports.readBankAccountInfo,
    updateBankAccountInfo: exports.updateBankAccountInfo,
    deleteBankAccountInfo: exports.deleteBankAccountInfo,
};

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
exports.deleteAddressExtraInfo = exports.updateAddressExtraInfo = exports.readAddressExtraInfo = exports.createAddressExtraInfo = void 0;
const AddressExtraInfo_1 = __importDefault(require("../models/AddressExtraInfo"));
// Create
const createAddressExtraInfo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddressExtraInfo_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddressExtraInfo = createAddressExtraInfo;
// Read
const readAddressExtraInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddressExtraInfo_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readAddressExtraInfo = readAddressExtraInfo;
// Update
const updateAddressExtraInfo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressExtraInfo = yield AddressExtraInfo_1.default.findByPk(id);
        if (addressExtraInfo) {
            yield addressExtraInfo.update(data);
            return addressExtraInfo;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateAddressExtraInfo = updateAddressExtraInfo;
// Delete
const deleteAddressExtraInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressExtraInfo = yield AddressExtraInfo_1.default.findByPk(id);
        if (addressExtraInfo) {
            yield addressExtraInfo.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteAddressExtraInfo = deleteAddressExtraInfo;
exports.default = {
    createAddressExtraInfo: exports.createAddressExtraInfo,
    readAddressExtraInfo: exports.readAddressExtraInfo,
    updateAddressExtraInfo: exports.updateAddressExtraInfo,
    deleteAddressExtraInfo: exports.deleteAddressExtraInfo,
};

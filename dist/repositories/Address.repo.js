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
exports.deleteAddress = exports.updateAddress = exports.readAddress = exports.createAddress = void 0;
const Address_1 = __importDefault(require("../models/Address"));
// Create
const createAddress = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Address_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createAddress = createAddress;
// Read
const readAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Address_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readAddress = readAddress;
// Update
const updateAddress = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield Address_1.default.findByPk(id);
        if (address) {
            yield address.update(data);
            return address;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateAddress = updateAddress;
// Delete
const deleteAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const address = yield Address_1.default.findByPk(id);
        if (address) {
            yield address.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteAddress = deleteAddress;
exports.default = {
    createAddress: exports.createAddress,
    readAddress: exports.readAddress,
    updateAddress: exports.updateAddress,
    deleteAddress: exports.deleteAddress,
};

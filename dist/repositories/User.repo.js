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
exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
// Create
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createUser = createUser;
// Read
const readUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield User_1.default.findOne({ where: { username } });
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readUser = readUser;
// Update
const updateUser = (username, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ where: { username } });
        if (user) {
            yield user.update(data);
            return user;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateUser = updateUser;
// Delete
const deleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ where: { username } });
        if (user) {
            yield user.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteUser = deleteUser;
exports.default = { createUser: exports.createUser, readUser: exports.readUser, updateUser: exports.updateUser, deleteUser: exports.deleteUser };

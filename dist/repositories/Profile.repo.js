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
exports.deleteProfile = exports.updateProfile = exports.readProfile = exports.createProfile = void 0;
const Profile_1 = __importDefault(require("../models/Profile"));
// Create
const createProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Profile_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createProfile = createProfile;
// Read
const readProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Profile_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readProfile = readProfile;
// Update
const updateProfile = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield Profile_1.default.findByPk(id);
        if (profile) {
            yield profile.update(data);
            return profile;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateProfile = updateProfile;
// Delete
const deleteProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield Profile_1.default.findByPk(id);
        if (profile) {
            yield profile.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteProfile = deleteProfile;
exports.default = { createProfile: exports.createProfile, readProfile: exports.readProfile, updateProfile: exports.updateProfile, deleteProfile: exports.deleteProfile };

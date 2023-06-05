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
exports.deleteSkills = exports.updateSkills = exports.readSkills = exports.createSkills = void 0;
const Skills_1 = __importDefault(require("../models/Skills"));
// Create
const createSkills = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Skills_1.default.create(data);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.createSkills = createSkills;
// Read
const readSkills = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Skills_1.default.findByPk(id);
        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.readSkills = readSkills;
// Update
const updateSkills = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield Skills_1.default.findByPk(id);
        if (skills) {
            yield skills.update(data);
            return skills;
        }
        return null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
});
exports.updateSkills = updateSkills;
// Delete
const deleteSkills = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield Skills_1.default.findByPk(id);
        if (skills) {
            yield skills.destroy();
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.deleteSkills = deleteSkills;
exports.default = { createSkills: exports.createSkills, readSkills: exports.readSkills, updateSkills: exports.updateSkills, deleteSkills: exports.deleteSkills };

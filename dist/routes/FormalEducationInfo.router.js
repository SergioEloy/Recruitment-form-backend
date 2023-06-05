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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RFormalEducationInfo = void 0;
const express_1 = require("express");
const FormalEducationInfo_repo_1 = require("../repositories/FormalEducationInfo.repo");
exports.RFormalEducationInfo = (0, express_1.Router)();
exports.RFormalEducationInfo.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newFormalEducationInfo = yield (0, FormalEducationInfo_repo_1.createFormalEducationInfo)(data);
        if (newFormalEducationInfo) {
            return res.send(newFormalEducationInfo);
        }
        else {
            return res.sendStatus(500);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.RFormalEducationInfo.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const formalEducationInfo = yield (0, FormalEducationInfo_repo_1.readFormalEducationInfo)(id);
        if (formalEducationInfo) {
            return res.send(formalEducationInfo);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.RFormalEducationInfo.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedFormalEducationInfo = yield (0, FormalEducationInfo_repo_1.updateFormalEducationInfo)(id, data);
        if (updatedFormalEducationInfo) {
            return res.send(updatedFormalEducationInfo);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));
exports.RFormalEducationInfo.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const success = yield (0, FormalEducationInfo_repo_1.deleteFormalEducationInfo)(id);
        if (success) {
            return res.sendStatus(200);
        }
        else {
            return res.sendStatus(404);
        }
    }
    catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}));

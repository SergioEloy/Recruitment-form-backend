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
exports.RGovernmentInfo = void 0;
const express_1 = require("express");
const GovernmentInfo_repo_1 = require("../repositories/GovernmentInfo.repo");
exports.RGovernmentInfo = (0, express_1.Router)();
exports.RGovernmentInfo.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newGovernmentInfo = yield (0, GovernmentInfo_repo_1.createGovernmentInfo)(data);
        if (newGovernmentInfo) {
            return res.send(newGovernmentInfo);
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
exports.RGovernmentInfo.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const governmentInfo = yield (0, GovernmentInfo_repo_1.readGovernmentInfo)(id);
        if (governmentInfo) {
            return res.send(governmentInfo);
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
exports.RGovernmentInfo.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedGovernmentInfo = yield (0, GovernmentInfo_repo_1.updateGovernmentInfo)(id, data);
        if (updatedGovernmentInfo) {
            return res.send(updatedGovernmentInfo);
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
exports.RGovernmentInfo.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const success = yield (0, GovernmentInfo_repo_1.deleteGovernmentInfo)(id);
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

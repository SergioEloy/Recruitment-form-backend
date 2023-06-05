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
exports.RScholarshipInfo = void 0;
const express_1 = require("express");
const ScholarshipInfo_repo_1 = require("../repositories/ScholarshipInfo.repo");
exports.RScholarshipInfo = (0, express_1.Router)();
exports.RScholarshipInfo.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newScholarshipInfo = yield (0, ScholarshipInfo_repo_1.createScholarshipInfo)(data);
        if (newScholarshipInfo) {
            return res.send(newScholarshipInfo);
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
exports.RScholarshipInfo.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const scholarshipInfo = yield (0, ScholarshipInfo_repo_1.readScholarshipInfo)(id);
        if (scholarshipInfo) {
            return res.send(scholarshipInfo);
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
exports.RScholarshipInfo.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedScholarshipInfo = yield (0, ScholarshipInfo_repo_1.updateScholarshipInfo)(id, data);
        if (updatedScholarshipInfo) {
            return res.send(updatedScholarshipInfo);
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
exports.RScholarshipInfo.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const success = yield (0, ScholarshipInfo_repo_1.deleteScholarshipInfo)(id);
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

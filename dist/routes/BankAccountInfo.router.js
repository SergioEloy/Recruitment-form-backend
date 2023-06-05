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
exports.RBankAccountInfo = void 0;
const express_1 = require("express");
const BankAccountInfo_repo_1 = require("../repositories/BankAccountInfo.repo");
exports.RBankAccountInfo = (0, express_1.Router)();
exports.RBankAccountInfo.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newBankAccountInfo = yield (0, BankAccountInfo_repo_1.createBankAccountInfo)(data);
        if (newBankAccountInfo) {
            return res.send(newBankAccountInfo);
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
exports.RBankAccountInfo.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.readBankAccountInfo)(id);
        if (bankAccountInfo) {
            return res.send(bankAccountInfo);
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
exports.RBankAccountInfo.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedBankAccountInfo = yield (0, BankAccountInfo_repo_1.updateBankAccountInfo)(id, data);
        if (updatedBankAccountInfo) {
            return res.send(updatedBankAccountInfo);
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
exports.RBankAccountInfo.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const success = yield (0, BankAccountInfo_repo_1.deleteBankAccountInfo)(id);
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

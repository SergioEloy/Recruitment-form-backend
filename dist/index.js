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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
const PORT = process.env.PORT;
const URI_CONN = process.env.URI_CONN;
app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (URI_CONN) {
            const sequelize = (0, database_1.startDB)(URI_CONN);
            yield sequelize.authenticate();
            console.log(`App is listening at port ${PORT}`);
        }
    }
    catch (error) {
        console.error(error);
        process.abort();
    }
}));

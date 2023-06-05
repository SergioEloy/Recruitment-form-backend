"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpBankAccountInfo = void 0;
const sequelize_1 = require("sequelize");
class BankAccountInfo extends sequelize_1.Model {
    static associate(models) {
        BankAccountInfo.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setUpBankAccountInfo = (sequelize) => {
    BankAccountInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        acc_number: sequelize_1.DataTypes.NUMBER,
        clabe: sequelize_1.DataTypes.NUMBER,
        bank: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "BankAccountInfo",
    });
};
exports.setUpBankAccountInfo = setUpBankAccountInfo;
exports.default = BankAccountInfo;

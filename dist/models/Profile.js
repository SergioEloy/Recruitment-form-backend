"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpProfile = void 0;
const sequelize_1 = require("sequelize");
class Profile extends sequelize_1.Model {
    static associate(models) {
        Profile.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user",
        });
    }
}
const setUpProfile = (sequelize) => {
    Profile.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        phone: sequelize_1.DataTypes.STRING,
        country_code: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        alt_email: sequelize_1.DataTypes.STRING,
        reference: sequelize_1.DataTypes.STRING,
        other_reference: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "Profile",
    });
};
exports.setUpProfile = setUpProfile;
exports.default = Profile;

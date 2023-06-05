import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./User";

class ScholarshipInfo extends Model<
  InferAttributes<ScholarshipInfo>,
  InferCreationAttributes<ScholarshipInfo>
> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: number;
  declare user_id: CreationOptional<number>;

  static associate(models: { User: typeof User }) {
    ScholarshipInfo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

export const setUpScholarshipInfo = (sequelize: Sequelize) => {
  ScholarshipInfo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      level: DataTypes.STRING,
      kind: DataTypes.STRING,
      period: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ScholarshipInfo",
    }
  );
};

export default ScholarshipInfo;

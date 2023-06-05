import {
  Model,
  Sequelize,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import User from "./User";

class Address extends Model<
  InferAttributes<Address>,
  InferCreationAttributes<Address>
> {
  declare id: CreationOptional<number>;
  declare street: string;
  declare in_between_street_a: string;
  declare in_between_street_b: string;
  declare city: string;
  declare state: string;
  declare country: string;
  declare zip: string;
  declare proof_of_address: string;
  declare user_id: CreationOptional<number>;

  static associate(models: { User: typeof User }) {
    Address.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  }
}

export const setUpAddress = (sequelize: Sequelize) => {
  Address.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      street: DataTypes.STRING,
      in_between_street_a: DataTypes.STRING,
      in_between_street_b: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      zip: DataTypes.STRING,
      proof_of_address: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
};
export default Address;

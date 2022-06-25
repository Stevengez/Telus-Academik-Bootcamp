import { Model, Sequelize } from 'sequelize';
import { iCatalogAttributes, iCatalogInstance } from '../src/interfaces/iCatalog';

module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class UserType extends Model<iCatalogAttributes, iCatalogInstance> implements iCatalogAttributes {
    id!: number;
    description!: string;
    status!: boolean;

    static associate = (models:any) => {
      // define association here
    }
  }
  UserType.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'UserType',
    freezeTableName: true,
    tableName: 'user_type',
    underscored: true
  });
  return UserType;
};
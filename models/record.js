'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Record.belongsTo(models.User, { foreignKey: 'userId' })中，FK參數可不加，因為預設FK就是Model名稱+Id
      Record.belongsTo(models.User)
      Record.belongsTo(models.Category)
    }
  }
  Record.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Record',
    tableName: 'Records',
    underscored: true,
  });
  return Record;
};
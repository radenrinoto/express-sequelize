'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Profile, { through: models.User_Profiles });
      User.hasMany(models.Task, {
        as: 'userTask',
        foreignKey: {
          name: 'userId'
        }
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
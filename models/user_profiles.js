'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Profiles.init({
    userId: DataTypes.INTEGER,
    profileId: DataTypes.INTEGER,
    granted: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (userProfile) => {
        userProfile.granted = true
      }
    },
    sequelize,
    modelName: 'User_Profiles',
  });
  return User_Profiles;
};
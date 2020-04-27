const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Brand = sequelize.define('Musteri', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  MUSTERI_ADI: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ADRES: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  SatistemsilcisiID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  TELEFON_NO: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CREATED_BY: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CREATED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.DataTypes.NOW,
  },
  MODIFIED_BY: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  MODIFIED_DATE: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  IS_DELETED: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Brand;

const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Brand = sequelize.define('Satistemsilcisi', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  ARAC_PLAKA_NO: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  SATIS_TEMSILCISI_ADI: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  UrunID: {
    type: Sequelize.INTEGER,
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

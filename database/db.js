const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('mydb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
    freezeTableName: true,
  },
  dialectOptions: {
    useUTC: false, //for reading from database
  },
  timezone: '+03:00',
});

module.exports = sequelize;
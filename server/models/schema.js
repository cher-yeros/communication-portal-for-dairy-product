const { DataTypes } = require('sequelize');
const connection = require('../utils/DBConnection')

const Role = connection.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports.Role = Role;
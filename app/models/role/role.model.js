'use strict'

module.exports = (sequelize, Sequelize) => {
    var Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    
    return Role;
};
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize('zmaaon_store', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
    define: {
        timestamps: false
    }
});

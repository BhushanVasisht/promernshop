const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

exports.Product = sequelize.define('product', {
    _id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    countInStock: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    numReviews: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: 'product'
});


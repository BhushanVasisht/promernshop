const mongoose = require('mongoose')

const product_schema = new mongoose.Schema({
    _id: {
        type: String,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    numReviews: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = mongoose.model('product', product_schema);

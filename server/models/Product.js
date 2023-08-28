const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number
    },

    image: {
        type: String,
        default: null
    },

});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

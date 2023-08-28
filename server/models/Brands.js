const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name_en: {
        type: String,
        required: true,
    },
    name_bn: {
        type: String,
        required: true,
    },
    slug_en: {
        type: String,
        required: true,
    },
    slug_bn: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;

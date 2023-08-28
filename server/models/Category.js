const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name_en: String,
    category_name_bn: String,
    category_slug_en: String,
    category_slug_bn: String,
    category_icon: {
        type: String,
        default: 'fa fa-shopping-bag'
    },
    category_image: {
        type: String,
        default: 'default.jpg'
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

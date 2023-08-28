const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        default: null
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        default: null
    },
    sub_subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        default: null
    },
    product_name_en: String,
    product_name_bn: String,
    product_slug_en: String,
    product_slug_bn: String,
    product_code: String,
    product_qty: String,
    product_tags_en: String,
    product_tags_bn: String,
    product_size_en: String,
    product_size_bn: String,
    product_color_en: String,
    product_color_bn: String,
    purchase_price: Number,
    selling_price: Number,
    discount_price: Number,
    short_description_en: String,
    short_description_bn: String,
    long_description_en: String,
    long_description_bn: String,
    product_thumbnail: {
        type: String,
        default: 'thumbnail.jpg'
    },
    hot_deals: {
        type: Boolean,
        default: false
    },
    featured: {
        type: Boolean,
        default: false
    },
    new_arrival: {
        type: Boolean,
        default: false
    },
    special_offer: {
        type: Boolean,
        default: false
    },
    special_deals: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const mongoose = require('mongoose');

const subSubCategorySchema = new mongoose.Schema({
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
    subsubcategory_name_en: String,
    subsubcategory_name_bn: String,
    subsubcategory_slug_en: String,
    subsubcategory_slug_bn: String
}, {
    timestamps: true
});

subSubCategorySchema.index({ category_id: 1, subcategory_id: 1 }, { unique: true });

const SubSubCategory = mongoose.model('SubSubCategory', subSubCategorySchema);

module.exports = SubSubCategory;

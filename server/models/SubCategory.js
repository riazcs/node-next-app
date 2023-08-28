const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    subcategory_name_en: String,
    subcategory_name_bn: String,
    subcategory_slug_en: String,
    subcategory_slug_bn: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    }
}, {
    timestamps: true
});

subCategorySchema.index({ category_id: 1 });

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;

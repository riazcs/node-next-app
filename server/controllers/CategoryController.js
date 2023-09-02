const Category = require('../models/Category');

exports.getAllCategory = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 5; // Default items per page
        const totalCategory = await Category.countDocuments();

        const CategoryData = await Category.find().sort({ createdAt: -1 })
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(totalCategory / perPage),
            totalCategory,
            CategoryData
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.createCategory = async (req, res) => {
    try {
        const { category_name_en, category_name_bn, category_slug_en } = req.body;
        const newCategory = new Category({
            category_name_en,
            category_name_bn,
            category_slug_en,
            category_image: req.file.path,
        });
        await newCategory.save();
        res.status(201).json({ message: 'Category created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const findCategory = await Category.findById(req.params.categoryId);
        if (!findCategory) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(200).json(findCategory);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        console.log(req.params.categoryId)
        const findCategory = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true });
        if (!findCategory) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(200).json(findCategory);
        }
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Delete a Category by ID
exports.deleteCategory = async (req, res) => {
    try {
        const findCategory = await Category.findByIdAndRemove(req.params.categoryId);
        if (!findCategory) {
            res.status(404).json({ message: 'Category not found' });
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
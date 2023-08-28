const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 5; // Default items per page
        const totalProducts = await Product.countDocuments();

        const products = await Product.find()
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(totalProducts / perPage),
            totalProducts,
            products
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(Product);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(Product);
        }
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' });
    }
};

// Delete a Product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(204).end();
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
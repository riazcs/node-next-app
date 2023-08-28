const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    color: String,
    size: String,
    qty: Number,
    unit_price: Number
}, {
    timestamps: true
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    division_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Division'
    },
    district_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District'
    },
    state_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State'
    },
    name: String,
    email: String,
    phone: String,
    post_code: Number,
    notes: String,
    address: String,
    payment_type: String,
    payment_method: String,
    transaction_id: String,
    currency: String,
    amount: Number,
    order_number: String,
    invoice_number: String,
    order_date: String,
    order_month: String,
    order_year: String,
    confirmed_date: String,
    processing_date: String,
    picked_date: String,
    shipped_date: String,
    delivered_date: String,
    cancel_date: String,
    return_date: String,
    return_reason: String,
    status: {
        type: String,
        default: 'pending'
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

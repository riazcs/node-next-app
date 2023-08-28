const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    slider_name: String,
    slider_title: String,
    slider_description: String,
    slider_image: String,
    slider_status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;

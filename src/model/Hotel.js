const {Schema, model} = require("mongoose");
const mongoose = require('mongoose');

const hotelSchema = new Schema({
    name: String,
    description: String,
    stars: Number,
    services: [{ name: String }],
    rooms: [{ name: String, description: String }]
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Hotel', hotelSchema);

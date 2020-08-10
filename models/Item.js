const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
        Title: String,
        Description: String,
        Price: Number,
        required:false
})

const Item = mongoose.model('items', itemSchema);

module.exports = Item;
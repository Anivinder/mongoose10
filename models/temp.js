const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tempSchema = new Schema({
    name: String,
    temperature: Number,
})

module.exports = mongoose.model('Temp',tempSchema);
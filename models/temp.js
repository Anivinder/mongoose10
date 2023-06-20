const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tempSchema = new Schema({
    name: String,
    temperature: Number,
    dataa: FormData
})

module.exports = mongoose.model('Temp',tempSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tempSchema = new Schema({
    name: String,
    binary: Buffer
})

module.exports = mongoose.model('Temp',tempSchema);
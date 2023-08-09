const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
  }
});

module.exports = mongoose.model('Book', ProductSchema);

const { Schema, model } = require('mongoose');


const utilSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: false,
    },
    
  });
  
  const Utility = model('Utility', utilSchema);
  
  module.exports = Utility;
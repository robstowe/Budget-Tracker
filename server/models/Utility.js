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
    
  });
  
  const Utility = model('Utility', utilSchema);
  
  module.exports = Utility;
const { Schema, model } = require('mongoose');


const subSchema = new Schema({
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
  
  const Subscription = model('Subscription', subSchema);
  
  module.exports = Subscription;
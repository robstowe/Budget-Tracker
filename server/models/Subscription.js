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
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: false,
    },
    
  });
  
  const Subscription = model('Subscription', subSchema);
  
  module.exports = Subscription;
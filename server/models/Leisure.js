const { Schema, model } = require('mongoose');


const leisureSchema = new Schema({
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
  
  const Leisure = model('Leisure', leisureSchema);
  
  module.exports = Leisure;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Subscription = require('./Subscription');
const Utility = require('./Utility');
const Leisure = require('./Leisure');


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    // unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  subscription: [Subscription.schema],
  leisure: [Leisure.schema],
  utility: [Utility.schema]
  
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
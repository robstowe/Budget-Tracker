const { AuthenticationError } = require('apollo-server-express');
const { User, Subscription, Category, Utility, Leisure } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('thoughts');
      },
      user: async (parent, { email }) => {
        return User.findOne({ email }).populate('thoughts');
      },  
    },
  
    Mutation: {
      addUser: async (parent, { email, password }) => {
        const user = await User.create({ email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }, 
      addSub: async (parent, { name, price, category }, context) => {
        const sub = await Subscription.create({ name, price, category });
        
        await User.findOneAndUpdate(
        { email: name },
        { $addToSet: { subscription: sub._id } }
        
        );
        return sub; 
      }
      
      
      
      
    },
  };
  
  module.exports = resolvers;
  
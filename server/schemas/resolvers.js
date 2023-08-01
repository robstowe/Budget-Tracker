const { AuthenticationError } = require('apollo-server-express');
const { User, Subscription, Utility, Leisure } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('subscription').populate('leisure').populate('utility');
      },
      user: async (parent, { email }) => {
        return User.findOne({ email }).populate('subscription').populate('leisure').populate('utility');
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
      addSub: async (parent, { name, price }, context) => {        
        const sub = await Subscription.create({ name, price});
        console.log(sub, context.user);
        await User.findOneAndUpdate(
        { email: context.user.email },
        { $addToSet: { subscription: sub._id } }
        
        );
         return sub; 
      },
      addLeisure: async (parent, { name, price}, context) => {
                
                const leisure = await Leisure.create({ name, price });
                
                await User.findOneAndUpdate(
                { email: context.user.email },
                { $addToSet: { leisure: leisure._id } }
                
                );
                 return leisure; 
    },
    addUtility: async (parent, { name, price}, context) => {
              
              const utility = await Utility.create({ name, price });
              
              await User.findOneAndUpdate(
              { email: context.user.email },
              { $addToSet: { utility: utility._id } }
              
              );
               return utility; 
  },
}};
  
  module.exports = resolvers;
  
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    leisure: [Leisure]
    subscription: [Subscription]
    utility: [Utility]
  }



  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
    subscriptions(email: String): [Subscription]
    subscription(subId: ID!): Subscription
    Leisures(email: String): [Leisure]
    Leisure(leisureId: ID!): Leisure
    utilities(email: String): [Utility]
    utility(utilityId: ID!): Utility
    
  }

  type Subscription {
    _id: ID!
    name: String!
    price: Int!
  }

  type Leisure {
    _id: ID!
    name: String!
    price: Int!
  }

  type Utility {
    _id: ID!
    name: String!
    price: Int!
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSub(
      price: Int!
      name: String!
    ): Subscription
    addLeisure(
      price: Int!
      name: String!
    ): Leisure
    addUtility(
      price: Int!
      name: String!
    ): Utility
    removeSub(subId: ID!): Subscription
    removeLeisure(leisureId: ID!): Leisure
    removeUtility(utilityId: ID!): Utility

  }
`;

module.exports = typeDefs;
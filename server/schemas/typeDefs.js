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
    price: Float!
  }

  type Leisure {
    _id: ID!
    name: String!
    price: Float!
  }

  type Utility {
    _id: ID!
    name: String!
    price: Float!
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSub(
      price: Float!
      name: String!
    ): Subscription
    addLeisure(
      price: Float!
      name: String!
    ): Leisure
    addUtil(
      price: Float!
      name: String!
    ): Utility
    removeSub(subId: ID!): Subscription
    removeLeisure(leisureId: ID!): Leisure
    removeUtility(utilityId: ID!): Utility

  }
`;

module.exports = typeDefs;
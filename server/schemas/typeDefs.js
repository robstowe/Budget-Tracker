const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }

  type Category{
    _id:ID
    name:String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
    allCategories: [Category]
    subscriptions(email: String): [Subscription]
    subscription(subId: ID!): Subscription
  }

  type Subscription {
    _id: ID
    name: String
    price: Int
    category: String
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSub(
      category: String!
      price: Int!
      name: String!
    ): Subscription
    removeSub(subId: ID!): Subscription

  }
`;

module.exports = typeDefs;
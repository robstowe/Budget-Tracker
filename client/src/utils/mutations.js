import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
//go to graphql and grab those mutations from there to create these
export const ADD_SUB = gql`
mutation addSub($price: Int!, $name: String!, $category: String) {
  addSub(price: $price, name: $name, category: $category) {
    _id
    category
    name
    price
  }
}
`;

export const ADD_LEISURE = gql`
mutation addLeisure($price: Int!, $name: String!) {
  addLeisure(price: $price, name: $name) {
    _id
    category
    name
    price
  }
}
`;

export const ADD_UTILITY = gql`
mutation addUtility($price: Int!, $name: String!) {
  addUtility(price: $price, name: $name) {
    _id
    category
    name
    price
  }
}
`;



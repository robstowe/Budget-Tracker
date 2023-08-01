import { gql } from '@apollo/client';

export const ALL_CATEGORIES = gql `
query allCategories {
    allCategories {
      _id
      name
    }
  }`
import { gql } from '@apollo/client';

export const GET_NODE_OPERATOR_BY_USER = gql`
  query NodeOperatorByUser($wallet: String!) {
    nodeOperatorByUser(userUniqueInput: { wallet: $wallet }) {
      id
      location
      nodes
      cpu
      ram
      executionLayerClients
      consensusLayerClients
      network
      storage
      category
      name
      yearsOfExperience
      email
      website
      social
      description
      status
      rate
      logo
    }
  }
`;

export const GET_VALIDATORS_OF_NODE_OPERATOR_BY_USER = gql`
  query NodeOperatorByUser($wallet: String!) {
    nodeOperatorByUser(userUniqueInput: { wallet: $wallet }) {
      id
      validators {
        id
        status
        pubKey
      }
    }
  }
`;

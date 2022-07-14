import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_NODE_OPERATORS = gql`
  query AllNodeOperators {
    allNodeOperators {
      id
      status
      validators {
        id
        status
        pubKey
        depositDatas {
          amount
        }
      }
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
      verified
      logo
      rate
    }
  }
`;

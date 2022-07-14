import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const SIGN_UP_USER = gql`
  mutation SignupUser($userCreateInput: UserCreateInput!, $userSignatureInput: UserSignatureInput!) {
    signupUser(data: $userCreateInput, userSignatureInput: $userSignatureInput) {
      wallet
      nodeOperator {
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
        logo
      }
    }
  }
`;

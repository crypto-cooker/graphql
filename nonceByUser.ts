import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_NONCE_BY_USER = gql`
  mutation NonceByUser($UserUniqueInput: UserUniqueInput!) {
    nonceByUser(data: $UserUniqueInput) {
      wallet
      nonce
      timestamp
    }
  }
`;

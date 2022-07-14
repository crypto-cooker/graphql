import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_NODE_OPERATOR_BY_VALIDATOR = gql`
  query NodeOperatorByValidator($pubKey: String!) {
    nodeOperatorByValidator(validatorUniqueInput: { pubKey: $pubKey }) {
      id
      name
    }
  }
`;

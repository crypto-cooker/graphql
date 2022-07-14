import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_VALIDATORS_BY_NODE_OPERATOR = gql`
  query ValidatorsByNodeOperator($id: Int!) {
    validatorsByNodeOperator(nodeOperatorUniqueInput: { id: $id }) {
      id
      pubKey
      depositDatas {
        amount
        signature
        depositDataRoot
      }
    }
  }
`;

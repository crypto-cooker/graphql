import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_DEPOSIT_DATAS_BY_NODE_OPERATOR = gql`
  mutation DepositDatasByNodeOperator($id: Int!, $amount: String) {
    depositDatasByNodeOperator(nodeOperatorUniqueInput: { id: $id }, amount: $amount) {
      id
      signature
      amount
      depositDataRoot
      validator {
        pubKey
      }
    }
  }
`;

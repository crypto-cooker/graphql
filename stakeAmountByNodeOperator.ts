import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_STAKE_AMOUNT_BY_NODE_OPERATOR = gql`
  mutation StakeAmountByNodeOperator($id: Int!) {
    stakeAmountByNodeOperator(nodeOperatorUniqueInput: { id: $id }) {
      amount
    }
  }
`;

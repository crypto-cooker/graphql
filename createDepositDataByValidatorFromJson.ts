import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const CREATE_DEPOSIT_DATA_BY_VALIDATOR_FROM_JSON = gql`
  mutation createDepositDataByValidatorFromJson(
    $nodeOperatorUniqueInput: NodeOperatorUniqueInput!
    $depositDataCreateWithJsonInput: DepositDataCreateWithJsonInput!
    $userSignatureInput: UserSignatureInput!
  ) {
    createDepositDataByValidatorFromJson(
      nodeOperatorUniqueInput: $nodeOperatorUniqueInput
      depositDataCreateWithJsonInput: $depositDataCreateWithJsonInput
      userSignatureInput: $userSignatureInput
    ) {
      id
      pubKey
      depositDatas {
        id
        amount
        signature
        depositDataRoot
      }
    }
  }
`;

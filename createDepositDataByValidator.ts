import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const CREATE_DEPOSIT_DATA_BY_VALIDATOR = gql`
  mutation CreateDepositDataByValidator(
    $validatorCreateInput: ValidatorCreateInput!
    $depositDataCreateInput: DepositDataCreateInput!
    $userSignatureInput: UserSignatureInput!
  ) {
    createDepositDataByValidator(
      validatorCreateInput: $validatorCreateInput
      depositDataCreateInput: $depositDataCreateInput
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

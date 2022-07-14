import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const REFERRAL_BY_USER = gql`
    mutation ReferralByUser($referralCreateInput: ReferralCreateInput!, $userSignatureInput: UserSignatureInput!){
        referralByUser(data: $referralCreateInput, userSignatureInput: $userSignatureInput) {
            wallet
        }
    }
`;

import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const UPLOAD_FILE = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

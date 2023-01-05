import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';
import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';

const postCancellation = async (params: CancellationFetch) => {
  const data = await axios.post<IResponseGeneric<boolean>>('AnulacionDocumentos', params);

  return data?.data;
};

export default function useCreateCancellation(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  CancellationFetch,
  Error
> {
  return useMutation(postCancellation);
}

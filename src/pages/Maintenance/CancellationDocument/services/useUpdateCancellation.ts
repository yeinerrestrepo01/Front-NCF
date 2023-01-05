import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';
import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';

const putCancellation = async (params: CancellationFetch) => {
  const data = await axios.put<IResponseGeneric<boolean>>('AnulacionDocumentos', params);

  return data?.data;
};

export default function useUpdateCancellation(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  CancellationFetch,
  Error
> {
  return useMutation(putCancellation);
}

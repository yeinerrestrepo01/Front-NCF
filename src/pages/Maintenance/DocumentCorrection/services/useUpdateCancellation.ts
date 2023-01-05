import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';

const putDocumentCorrection = async (params: DocumentCorrectionFetch) => {
  const data = await axios.put<IResponseGeneric<boolean>>('CorreccionDocumentos', params);

  return data?.data;
};

export default function useUpdateDocumentCorrection(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  DocumentCorrectionFetch,
  Error
> {
  return useMutation(putDocumentCorrection);
}

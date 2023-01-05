import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';

const postDocumentCorrection = async (params: DocumentCorrectionFetch) => {
  const data = await axios.post<IResponseGeneric<boolean>>('CorreccionDocumentos', params);

  return data?.data;
};

export default function useCreateDocumentCorrection(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  DocumentCorrectionFetch,
  Error
> {
  return useMutation(postDocumentCorrection);
}

import axios from 'axios';
import { AnulacionInvoiceProps } from 'pages/PartialCancellation/constants/PartialCancellation.interface';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { useMutation, UseMutationResult } from 'react-query';

const postAnulacionInvoice = async (params: AnulacionInvoiceProps) => {
  const data = await axios.post<IResponseGeneric<boolean>>('AnulacionInvoice', params);

  return data?.data;
};

export default function useAnulacionInvoice(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  AnulacionInvoiceProps,
  Error
> {
  return useMutation(postAnulacionInvoice);
}

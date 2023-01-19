import axios from 'axios';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { UseMutationResult, useMutation } from 'react-query';

const postResendCancellation = async (idSupport: number) => {
  const data = await axios.post<IResponseGeneric<boolean>>('Sap/ReenviarAnulacion', {
    idSupport,
  });

  return data?.data;
};

export default function useResendCancellation(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  number,
  Error
> {
  return useMutation(postResendCancellation);
}

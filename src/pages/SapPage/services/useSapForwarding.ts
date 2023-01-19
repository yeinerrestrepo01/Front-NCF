import axios from 'axios';
import { IResponseGeneric } from 'global/types/IResponseGeneric';
import { UseMutationResult, useMutation } from 'react-query';

const postSapForwarding = async (idSupport: number) => {
  const data = await axios.post<IResponseGeneric<boolean>>('Sap/ReenviarAjuste', {
    idSupport,
  });

  return data?.data;
};

export default function useSapForwarding(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  number,
  Error
> {
  return useMutation(postSapForwarding);
}

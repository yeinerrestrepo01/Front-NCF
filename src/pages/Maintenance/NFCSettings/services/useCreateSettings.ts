import { SettingsNFCFeth } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';

const postSettings = async (params: SettingsNFCFeth) => {
  const data = await axios.post<IResponseGeneric<boolean>>('ConfiguracionTipoNcf', params);

  return data?.data;
};

export default function useCreateSettings(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  SettingsNFCFeth,
  Error
> {
  return useMutation(postSettings);
}

import { SettingsNFCFeth } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
import { IResponseGeneric } from 'global/types/IResponseGeneric';

const putSettings = async (params: SettingsNFCFeth) => {
  const data = await axios.put<IResponseGeneric<boolean>>('ConfiguracionTipoNcf', params);

  return data?.data;
};

export default function useUpdateSettings(): UseMutationResult<
  IResponseGeneric<boolean>,
  Error,
  SettingsNFCFeth,
  Error
> {
  return useMutation(putSettings);
}

import axios from 'axios';
import { SettingsNFCFeth } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import { useQuery, UseQueryResult } from 'react-query';

const getSettings = async () => {
  const data = await axios.get<SettingsNFCFeth[]>('ConfiguracionTipoNcf');

  return data?.data;
};

export default function useSettingsNFC(): UseQueryResult<SettingsNFCFeth[], Error> {
  return useQuery(['nfcsettings'], () => getSettings(), {
    enabled: true,
  });
}

import axios from 'axios';
import { ProfileData } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { UseQueryResult, useQuery } from 'react-query';

const getProfiles = async () => {
  const data = await axios.get<ProfileData[]>('Perfiles/ObtenerPerfiles');

  return data?.data;
};

export default function useProfiles(): UseQueryResult<ProfileData[], Error> {
  return useQuery(['profiles'], () => getProfiles(), {
    enabled: true,
  });
}

import axios from 'axios';
import { UserDataList } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { UseQueryResult, useQuery } from 'react-query';

const getUsers = async () => {
  const data = await axios.get<UserDataList[]>('Autenticacion/ObtenerUsuarios');

  return data?.data;
};

export default function useListUsers(): UseQueryResult<UserDataList[], Error> {
  return useQuery(['list-user'], () => getUsers(), {
    enabled: true,
  });
}

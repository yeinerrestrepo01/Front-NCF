import axios from 'axios';
import { ListAssignProfiles } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { UseQueryResult, useQuery } from 'react-query';

const listAssignProfiles = async () => {
  const data = await axios.get<ListAssignProfiles[]>('Perfiles/UsuarioSPerfiles');

  return data?.data;
};

export default function useListAssignProfiles(): UseQueryResult<ListAssignProfiles[], Error> {
  return useQuery(['list-assignprofiles'], () => listAssignProfiles(), {
    enabled: true,
  });
}

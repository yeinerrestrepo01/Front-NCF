import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';

const getCancellations = async () => {
  const data = await axios.get<CancellationFetch[]>('AnulacionDocumentos');

  return data?.data;
};

export default function useCancellation(): UseQueryResult<CancellationFetch[], Error> {
  return useQuery(['nfcsettings'], () => getCancellations(), {
    enabled: true,
  });
}

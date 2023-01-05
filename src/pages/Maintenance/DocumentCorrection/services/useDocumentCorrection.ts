import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';

const getDocumentCorrections = async () => {
  const data = await axios.get<DocumentCorrectionFetch[]>('CorreccionDocumentos');

  return data?.data;
};

export default function useDocumentCorrection(): UseQueryResult<DocumentCorrectionFetch[], Error> {
  return useQuery(['nfcsettings'], () => getDocumentCorrections(), {
    enabled: true,
  });
}

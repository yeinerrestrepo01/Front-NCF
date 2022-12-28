import axios from 'axios';
import { SapDocumentCorrectionData } from 'pages/SapPage/constants/Sap.interface';
import { useQuery, UseQueryResult } from 'react-query';

const getDocumentCorrection = async () => {
  const data = await axios.get<SapDocumentCorrectionData[]>('Sap/DocumentoCoreccion');

  return data?.data;
};

export default function useSapDocumentCorrection(): UseQueryResult<
  SapDocumentCorrectionData[],
  Error
> {
  return useQuery(['sapdocumentcorrection'], () => getDocumentCorrection(), {
    enabled: true,
  });
}

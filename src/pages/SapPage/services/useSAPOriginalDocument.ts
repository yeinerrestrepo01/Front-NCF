import axios from 'axios';
import { SAPOriginalDocumentData } from 'pages/SapPage/constants/Sap.interface';
import { useQuery, UseQueryResult } from 'react-query';

const getSapOriginalDocument = async () => {
  const data = await axios.get<SAPOriginalDocumentData[]>('Sap/DocmentoOrigianl');

  return data?.data;
};

export default function useSAPOriginalDocument(): UseQueryResult<SAPOriginalDocumentData[], Error> {
  return useQuery(['saporiginaldocument'], () => getSapOriginalDocument(), {
    enabled: true,
  });
}

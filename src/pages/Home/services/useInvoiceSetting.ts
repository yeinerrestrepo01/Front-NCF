import axios from 'axios';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import { useQuery, UseQueryResult } from 'react-query';
const getInvoiceSetting = async (cIDInvoice:string,IdCustumer: string) => 
{
    const data = await axios.get(`http://localhost:5067/api/InvoiceSetting/${cIDInvoice},${IdCustumer}`);
    return data?.data;
}

export default function useInvoiceSetting(cIDInvoice:string, IdCustumer: string):UseQueryResult<IinvoiceSetting[],Error>
{
    return useQuery(['invoicesetting',cIDInvoice],()=>getInvoiceSetting(cIDInvoice,IdCustumer), {
      enabled:!!cIDInvoice
    });
}
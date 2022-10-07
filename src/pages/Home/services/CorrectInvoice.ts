import axios from "axios";
import { IResponseGeneric } from "global/types/IResponseGeneric";
import { useMutation, UseMutationResult } from "react-query";
import { IDocumectCorrection } from '../../../global/types/IDocumectCorrection';

const PostCorrectInvoice = async (correctionDocument: IDocumectCorrection)=>{
    const data = await axios.post<IResponseGeneric<boolean>>(`http://localhost:5067/api/InvoiceSetting`,correctionDocument);
    return data?.data;
}

export default function useCorrectInvoice():UseMutationResult<IResponseGeneric<boolean>, Error, IDocumectCorrection, Error> {

    return useMutation(PostCorrectInvoice);
  
  }
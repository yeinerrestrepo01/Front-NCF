import { PartialCancellationForm } from 'pages/PartialCancellation/constants/PartialCancellation.interface';
import * as Yup from 'yup';

export const InitialFormpartialCancellation: PartialCancellationForm = {
  codigoCliente: '',
  intercompany: '',
  nfcOrigen: '',
  tikect: '',
};

export const validationsFormpartialCancellation = Yup.object({
  codigoCliente: Yup.string().required('Campo Obligatorio'),
  nfcOrigen: Yup.string().required('Campo Obligatorio'),
  intercompany: Yup.string().required('Campo Obligatorio'),
});

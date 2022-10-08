import { CorrectionForm } from 'pages/Home/constants/Home.interface';
import * as Yup from 'yup';

export const InitialFormCorrection: CorrectionForm = {
  codigoCliente: '',
  nfcOrigen: '',
  tikect: '',
};

export const validationsFormCorrection = Yup.object({
  codigoCliente: Yup.string().required('Campo Obligatorio'),
  nfcOrigen: Yup.string().required('Campo Obligatorio'),
  // tikect: Yup.string().required('Campo Obligatorio'),
});

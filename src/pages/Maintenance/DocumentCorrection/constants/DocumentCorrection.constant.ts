import * as Yup from 'yup';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';

export const FormCorrectionInitial = (
  initialValues?: DocumentCorrectionFetch
): DocumentCorrectionFetch => {
  return {
    compania: initialValues?.compania || '',
    tipoOrigen: initialValues?.tipoOrigen || '',
    tipoCancelacion: initialValues?.tipoCancelacion || '',
    tipoCorreccion: initialValues?.tipoCorreccion || '',
    SAPCancelacion: initialValues?.SAPCancelacion || '',
    SAPCorreccion: initialValues?.SAPCorreccion || '',
  };
};

export const ValidationCorrection = Yup.object({
  compania: Yup.string().required('Campo Obligatorio'),
  tipoOrigen: Yup.string().required('Campo Obligatorio'),
  tipoCancelacion: Yup.string().required('Campo Obligatorio'),
  tipoCorreccion: Yup.string().required('Campo Obligatorio'),
  SAPCancelacion: Yup.string().required('Campo Obligatorio'),
  SAPCorreccion: Yup.string().required('Campo Obligatorio'),
});

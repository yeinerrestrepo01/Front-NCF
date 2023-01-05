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
    sapCancelacion: initialValues?.sapCancelacion || '',
    sapCorreccion: initialValues?.sapCorreccion || '',
  };
};

export const ValidationCorrection = Yup.object({
  compania: Yup.string().required('Campo Obligatorio'),
  tipoOrigen: Yup.string().required('Campo Obligatorio'),
  tipoCancelacion: Yup.string().required('Campo Obligatorio'),
  tipoCorreccion: Yup.string().required('Campo Obligatorio'),
  sapCancelacion: Yup.string().required('Campo Obligatorio'),
  sapCorreccion: Yup.string().required('Campo Obligatorio'),
});

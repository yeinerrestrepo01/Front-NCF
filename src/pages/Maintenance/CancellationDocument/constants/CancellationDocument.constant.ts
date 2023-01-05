import * as Yup from 'yup';
import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';

export const FormCancellationInitial = (initialValues?: CancellationFetch): CancellationFetch => {
  return {
    compania: initialValues?.compania || '',
    tipoOrigen: initialValues?.tipoOrigen || '',
    tipoCancelCliente: initialValues?.tipoCancelCliente || '',
    tipoCancelInterComp: initialValues?.tipoCancelInterComp || '',
    SAPCancelacion: initialValues?.SAPCancelacion || '',
    inicio: initialValues?.inicio || '',
    interComCliente: initialValues?.interComCliente || '',
    interComCompania: initialValues?.interComCompania || '',
  };
};

export const ValidationCancellation = Yup.object({
  compania: Yup.string().required('Campo Obligatorio'),
  tipoOrigen: Yup.string().required('Campo Obligatorio'),
  tipoCancelCliente: Yup.string().required('Campo Obligatorio'),
  tipoCancelInterComp: Yup.string().required('Campo Obligatorio'),
  SAPCancelacion: Yup.string().required('Campo Obligatorio'),
  inicio: Yup.string().required('Campo Obligatorio'),
  interComCliente: Yup.string().required('Campo Obligatorio'),
  interComCompania: Yup.string().required('Campo Obligatorio'),
});

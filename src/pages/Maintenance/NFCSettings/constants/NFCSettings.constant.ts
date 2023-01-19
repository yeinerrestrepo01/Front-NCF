import { FormControOptionslSelect } from 'global/types';
import {
  SettingsNFC,
  SettingsNFCFeth,
} from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import * as Yup from 'yup';

export const FormSettingsInitial = (initialValues?: SettingsNFCFeth): SettingsNFC => {
  return {
    activo: initialValues?.activo || 0,
    cIdCompany: initialValues?.cIdCompany || '',
    cIDTypeDocument: initialValues?.cidTypeDocument || '',
    fechaVencimiento: initialValues?.fechaVencimiento || undefined,
    lenth: initialValues?.lenth.toString() || '',
    nIncrementoTipo: initialValues?.nIncrementoTipo.toString() || '',
    nInicialAhora: initialValues?.nInicialAhora.toString() || '',
    nInicioAsignadoDGII: initialValues?.nInicioAsignadoDGII.toString() || '',
    nLimiteAsignadoDGII: initialValues?.nLimiteAsignadoDGII.toString() || '',
    nNoAutorizacion: initialValues?.nNoAutorizacion || '',
    nNoAvgDiario: initialValues?.nNoAvgDiario.toString() || '',
    prefix: initialValues?.prefix || '',
  };
};

export const ListCompany: FormControOptionslSelect[] = [
  { id: 1713, name: 'ABI - 1713' },
  { id: 1707, name: 'ABI - 1707' },
];

export const ValidationSettings = Yup.object({
  cIdCompany: Yup.string().required('Campo Obligatorio.'),
  cIDTypeDocument: Yup.string().required('Campo Obligatorio.'),
  fechaVencimiento: Yup.date().required('Campo Obligatorio.'),
  lenth: Yup.number().required('Campo Obligatorio.'),
  nIncrementoTipo: Yup.number().required('Campo Obligatorio.'),
  nInicialAhora: Yup.number().required('Campo Obligatorio.'),
  nInicioAsignadoDGII: Yup.number().required('Campo Obligatorio.'),
  nLimiteAsignadoDGII: Yup.number().required('Campo Obligatorio.'),
  nNoAutorizacion: Yup.string().required('Campo Obligatorio.'),
  nNoAvgDiario: Yup.number().required('Campo Obligatorio.'),
  prefix: Yup.string().required('Campo Obligatorio.'),
});

export const getDataSetingdSend = (formvalues: SettingsNFC): SettingsNFCFeth => {
  return {
    activo: formvalues.activo,
    cIdCompany: formvalues.cIdCompany,
    cidTypeDocument: formvalues.cIDTypeDocument,
    fechaActualizaicon: formvalues.fechaActualizaicon,
    fechaVencimiento: formvalues.fechaVencimiento,
    lenth: Number(formvalues.lenth),
    nIncrementoTipo: Number(formvalues.nIncrementoTipo),
    nInicialAhora: Number(formvalues.nInicialAhora),
    nInicioAsignadoDGII: Number(formvalues.nInicioAsignadoDGII),
    nLimiteAsignadoDGII: Number(formvalues.nLimiteAsignadoDGII),
    nNoAutorizacion: formvalues.nNoAutorizacion,
    nNoAvgDiario: Number(formvalues.nNoAvgDiario),
    prefix: formvalues.prefix,
  };
};

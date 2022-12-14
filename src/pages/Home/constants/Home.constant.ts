import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
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

export const dataPrueba: IinvoiceSetting[] = [
  {
    'id': 85246,
    'idInvoice': 'B0104510458',
    'idCompany': '1713',
    'idOrder': 'WV30002080',
    'idCustumer': '0000516141',
    'ncfType': '01',
    'ncf': 'B0104510458',
    'idProduct': '-B000060',
    'nSeq': 1,
    'amount': 1,
    'idUnitMeasureType': 'PCE',
    'freeGoods': 1,
    'brutoTotal': 0,
    'descuentoAmount': 0,
    'taxAmount': 0,
    'isc': 0,
    'isce': 0,
    'interestValue': 0,
    'transport': 0,
    'netAmount': 0,
    'groupPrice': 'C2',
    'labor': '001',
    'fechaPedido': new Date(),
  },
  {
    'id': 85247,
    'idInvoice': 'B0104510458',
    'idCompany': '1713',
    'idOrder': 'WV30002080',
    'idCustumer': '0000516141',
    'ncfType': '01',
    'ncf': 'B0104510458',
    'idProduct': '-B000060',
    'nSeq': 2,
    'amount': 13,
    'idUnitMeasureType': 'PCE',
    'freeGoods': 0,
    'brutoTotal': 17555.98,
    'descuentoAmount': 1009.47,
    'taxAmount': 2978.37,
    'isc': 0,
    'isce': 0,
    'interestValue': 0,
    'transport': 0,
    'netAmount': 19524.88,
    'groupPrice': 'C2',
    'labor': '001',
    'fechaPedido': new Date(),
  },
  {
    'id': 85248,
    'idInvoice': 'B0104510458',
    'idCompany': '1713',
    'idOrder': 'WV30002080',
    'idCustumer': '0000516141',
    'ncfType': '01',
    'ncf': 'B0104510458',
    'idProduct': '000000000001500036',
    'nSeq': 4,
    'amount': 14,
    'idUnitMeasureType': 'PCE',
    'freeGoods': 0,
    'brutoTotal': 1400,
    'descuentoAmount': 0,
    'taxAmount': 0,
    'isc': 0,
    'isce': 0,
    'interestValue': 0,
    'transport': 0,
    'netAmount': 1400,
    'groupPrice': 'C2',
    'labor': '001',
    'fechaPedido': new Date(),
  },
  {
    'id': 85249,
    'idInvoice': 'B0104510458',
    'idCompany': '1713',
    'idOrder': 'WV30002080',
    'idCustumer': '0000516141',
    'ncfType': '01',
    'ncf': 'B0104510458',
    'idProduct': 'ZL000009',
    'nSeq': 3,
    'amount': 1,
    'idUnitMeasureType': 'UN',
    'freeGoods': 0,
    'brutoTotal': 533.9,
    'descuentoAmount': 10.678,
    'taxAmount': 94.178,
    'isc': 0,
    'isce': 0,
    'interestValue': 0,
    'transport': 0,
    'netAmount': 617.4,
    'groupPrice': 'C2',
    'labor': '001',
    'fechaPedido': new Date(),
  },
];

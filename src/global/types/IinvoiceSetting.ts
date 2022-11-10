export interface IinvoiceSetting {
  id: number;
  idInvoice: string;
  idCompany: string;
  idOrder: string;
  idCustumer: string;
  ncfType: string;
  ncf: string;
  idProduct: string;
  nSeq: number;
  amount: number;
  idUnitMeasureType: string;
  freeGoods: number;
  brutoTotal: number;
  descuentoAmount: number;
  taxAmount: number;
  isc: number;
  isce: number;
  interestValue: number;
  select?: boolean;
  transport: number;
  netAmount: number;
  groupPrice: string;
  labor: string;
  fechaPedido: Date;
}

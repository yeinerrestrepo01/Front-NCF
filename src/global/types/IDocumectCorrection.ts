export interface IDocumectCorrection {
  solitudSoporteDocumento: SolitudSoporteDocumento;
  documentoOriginal: IInvoiceDocument[];
  documentoCorrecion: IInvoiceDocument[];
}

export interface IInvoiceDocument {
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
  transport: number;
  netAmount: number;
  groupPrice: string;
  labor: string;
  fechaPedido: Date;
}

export interface SolitudSoporteDocumento {
  idCustumer: string;
  ncf: string;
  idSupport: string;
}

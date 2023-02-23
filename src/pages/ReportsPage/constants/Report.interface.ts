export type ReporFormType = {
  dateInitial: string;
  dateEnd: string;
};

export type ReportNFC = {
  tipo: string;
  contProduct: number;
  idProduct: string;
  brutoTotal: number;
  descuentoAmount: number;
  isc: number;
  isce: number;
  interestValue: number;
  transport: number;
  netAmount: number;
};

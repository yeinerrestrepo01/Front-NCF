export type SettingsNFC = {
  activo: number;
  cIdCompany: string;
  cIDTypeDocument: string;
  fechaActualizaicon?: Date;
  fechaVencimiento: Date;
  lenth: string;
  nIncrementoTipo: string;
  nInicialAhora: string;
  nInicioAsignadoDGII: string;
  nLimiteAsignadoDGII: string;
  nNoAutorizacion: string;
  nNoAvgDiario: string;
  prefix: string;
};

export type SettingsNFCFeth = {
  activo: number;
  cIdCompany: string;
  cidTypeDocument: string;
  fechaActualizaicon?: Date;
  fechaVencimiento: Date;
  lenth: number;
  nIncrementoTipo: number;
  nInicialAhora: number;
  nInicioAsignadoDGII: number;
  nLimiteAsignadoDGII: number;
  nNoAutorizacion: string;
  nNoAvgDiario: number;
  prefix: string;
};

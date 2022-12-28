export interface SAPOriginalDocumentData {
  enviadoSap: boolean;
  idCompany: string;
  idCustumer: string;
  idOrder: string;
  idSupport: number;
  ncf: string;
  ncfCancelacion?: string;
  respuestaSap: null | string;
}

export interface SapDocumentCorrectionData extends SAPOriginalDocumentData {
  ncfCorreccion?: string;
}

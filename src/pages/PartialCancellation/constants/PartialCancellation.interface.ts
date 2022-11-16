import { IInvoiceDocument } from 'global/types/IDocumectCorrection';

export type PartialCancellationForm = {
  codigoCliente: string;
  intercompany?: string;
  nfcOrigen: string;
  tikect: string;
};

export interface AnulacionInvoiceProps {
  solicitudAnulacionDto: SolicitudAnulacionDto;
  documentoCorrecion: IInvoiceDocument[];
}

export interface SolicitudAnulacionDto {
  idCustumer: string;
  ncf: string;
  idSupport: string;
  interCompany: string;
}

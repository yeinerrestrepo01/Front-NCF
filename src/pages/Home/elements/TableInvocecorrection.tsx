import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';

interface TableInvoiceSCorrectionProps {
  data: IinvoiceSetting;
  HandlenSendCorrection: (
    documentoOriginal: IInvoiceDocument,
    documectCorrection: IInvoiceDocument
  ) => void;
}

const TableInvocecorrection: React.FC<TableInvoiceSCorrectionProps> = ({
  data,
  HandlenSendCorrection,
}) => {
  return (
    <div className="mt-3">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Codigo Producto</th>
            <th scope="col">QTY</th>
            <th scope="col">Precio Bruto</th>
            <th scope="col">Descuento</th>
            <th scope="col">Itbis</th>
            <th scope="col">ISC</th>
            <th scope="col">ISCE</th>
            <th scope="col">Neto</th>
            <th scope="col">Interes Financiamiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{data.idProduct}</th>
            <td align="center">{data.amount}</td>
            <td align="right" width={'130px'}>
              {data.brutoTotal}
            </td>
            <td align="right" width={'130px'}>
              {data.descuentoAmount}
            </td>
            <td align="right" width={'130px'}>
              {data.taxAmount}
            </td>
            <td align="right" width={'130px'}>
              {data.isc}
            </td>
            <td align="right" width={'130px'}>
              {data.isce}
            </td>
            <td align="right" width={'130px'}>
              {data.netAmount}
            </td>
            <td align="right" width={'130px'}>
              {data.interestValue}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => HandlenSendCorrection(data, data)}
        >
          Enviar Correcion Documento
        </button>
      </div>
    </div>
  );
};

export default TableInvocecorrection;

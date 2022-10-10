import { Table } from 'components';
import TableColumn from 'components/Table/elements/TableColumn/TableColumn';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';

interface TableInvoiceSCorrectionProps {
  data: IinvoiceSetting[];
  HandlenSendCorrection: (o: IInvoiceDocument[], c: IInvoiceDocument[]) => void;
}

const TableInvocecorrection: React.FC<TableInvoiceSCorrectionProps> = ({
  data,
  HandlenSendCorrection,
}) => {
  return (
    <div className="mt-3">
      {data.length > 0 ? (
        <>
          <Table className="table table-bordered" data={data}>
            <TableColumn field="idProduct" title="Codigo Producto" />
            <TableColumn className="itd-number" field="amount" title="QTY" />
            <TableColumn className="td-number" field="brutoTotal" title="Precio Bruto" />
            <TableColumn className="td-number" field="descuentoAmount" title="Descuento" />
            <TableColumn className="td-number" field="taxAmount" title="Itbis" />
            <TableColumn className="td-number" field="isc" title="ISC" />
            <TableColumn className="td-number" field="isce" title="ISCE" />
            <TableColumn className="td-number" field="netAmount" title="Neto" />
            <TableColumn
              className="td-number"
              field="interestValue"
              title="Interes Financiamiento"
            />
          </Table>
          <div className="mt-3 mb-3">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => HandlenSendCorrection(data, data)}
            >
              Enviar Correcion Documento
            </button>
          </div>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};

export default TableInvocecorrection;

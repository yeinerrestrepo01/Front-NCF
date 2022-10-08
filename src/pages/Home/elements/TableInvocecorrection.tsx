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
          <Table className="table" data={data}>
            <TableColumn field="idProduct" title="Codigo Producto" />
            <TableColumn className="items-center" field="amount" title="QTY" />
            <TableColumn className="items-center" field="brutoTotal" title="Precio Bruto" />
            <TableColumn className="items-center" field="descuentoAmount" title="Descuento" />
            <TableColumn className="items-center" field="taxAmount" title="Itbis" />
            <TableColumn className="items-center" field="isc" title="ISC" />
            <TableColumn className="items-center" field="isce" title="ISCE" />
            <TableColumn className="items-center" field="netAmount" title="Neto" />
            <TableColumn
              className="items-center"
              field="interestValue"
              title="Interes Financiamiento"
            />
          </Table>
          <div className="mt-3">
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

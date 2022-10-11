import { Table } from 'components';
import { GridCellProps } from 'components/Table/constants/Table.interface';
import TableColumn from 'components/Table/elements/TableColumn/TableColumn';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';
import PropTypes from 'prop-types';
import { MinusSvg } from 'global/icons';
import styles from './TableInvoceCorrection.module.scss';

interface TableInvoiceSCorrectionProps {
  data: IinvoiceSetting[];
  handleDelteItemCorrection: (item: IinvoiceSetting) => void;
  HandlenSendCorrection: (o: IInvoiceDocument[], c: IInvoiceDocument[]) => void;
}

const TableInvocecorrection: React.FC<TableInvoiceSCorrectionProps> = ({
  data,
  handleDelteItemCorrection,
  HandlenSendCorrection,
}) => {
  const getCellDelete = ({ dataItem, field }: GridCellProps) => {
    if (field === 'delete') {
      return (
        <button
          className={styles.button}
          onClick={() => handleDelteItemCorrection(dataItem)}
          title="Eliminar"
          type="button"
        >
          <MinusSvg className={styles.button__delete} />
        </button>
      );
    }
    return null;
  };

  return (
    <div className="container-fluid mt-3">
      {data.length > 0 ? (
        <>
          <Table className="table table-bordered" data={data}>
            <TableColumn field="idProduct" title="Codigo Producto" />
            <TableColumn className="text-center" field="amount" title="QTY" />
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
            <TableColumn className={styles.center} field="delete" cell={getCellDelete} />
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

TableInvocecorrection.propTypes = {
  data: PropTypes.any.isRequired,
  handleDelteItemCorrection: PropTypes.func.isRequired,
  HandlenSendCorrection: PropTypes.func.isRequired,
};

export default TableInvocecorrection;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GridCellProps,
  processTable,
  Table,
  TableColumn,
  TableItemChangeEvent,
} from 'ef_ui_components';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import { MinusSvg } from 'global/icons';
import { getCurrencyFormat, getFormattedDecimal } from 'global/helpers';
import styles from './TableInvoceCorrection.module.scss';

interface TableInvoiceSCorrectionProps {
  data: IinvoiceSetting[];
  handleDelteItemCorrection: (item: IinvoiceSetting) => void;
  HandlenSendCorrection: (c: IInvoiceDocument[]) => void;
}

const TableInvocecorrection: React.FC<TableInvoiceSCorrectionProps> = ({
  data,
  handleDelteItemCorrection,
  HandlenSendCorrection,
}) => {
  const [invoceCorrection, setInvoceCorrection] = useState<IinvoiceSetting[]>([]);
  const [rowEdit, setRowEdit] = useState(null);

  const handleDecimal = ({ dataItem, field }: GridCellProps) => {
    return <span>{getCurrencyFormat(dataItem[field] ? Number(dataItem[field]) : 0)}</span>;
  };

  useEffect(() => {
    if (data.length !== invoceCorrection.length) {
      const listIds = invoceCorrection.map((item) => item.id);
      const listInformation = data.map((x) => {
        if (listIds.includes(x.id)) {
          return invoceCorrection.find((item) => item.id === x.id);
        }
        return x;
      });
      setInvoceCorrection([...listInformation]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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

  const itemChange = (event: TableItemChangeEvent) => {
    const itemEdit = invoceCorrection;
    if (itemEdit.length) {
      const index = invoceCorrection.findIndex((x) => x.id === event.dataItem.id);
      itemEdit[index] = { ...itemEdit[index], [event.field]: event.value };
      const neto =
        itemEdit[index].brutoTotal -
        itemEdit[index].descuentoAmount +
        itemEdit[index].taxAmount +
        itemEdit[index].isc +
        itemEdit[index].isce +
        itemEdit[index].interestValue;

      itemEdit[index] = { ...itemEdit[index], netAmount: getFormattedDecimal(neto) };
      setInvoceCorrection([...itemEdit]);
    }
  };

  return (
    <div className="container-fluid mt-3">
      {data.length > 0 ? (
        <>
          <Table
            className={'table_data'}
            data={processTable(
              invoceCorrection.map((item) => {
                if (item.id === rowEdit) {
                  item.isEdit = true;
                } else {
                  item.isEdit = false;
                }
                return item;
              }) ?? [],
              {}
            )}
            editName="isEdit"
            onItemRowChangue={itemChange}
            onRowClick={(e) => setRowEdit(e.dataItem.id)}
          >
            <TableColumn
              className={styles.lef}
              field="idProduct"
              title="Codigo Producto"
              width={240}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.center}
              field="amount"
              title="QTY"
              width={60}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="brutoTotal"
              title="Precio Bruto"
              typeInput="number"
              width={160}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="descuentoAmount"
              title="Descuento"
              typeInput="number"
              width={160}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="taxAmount"
              title="ITBIS"
              typeInput="number"
              width={120}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="isc"
              title="ISC"
              typeInput="number"
              width={120}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="isce"
              title="ISCE"
              typeInput="number"
              width={120}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="netAmount"
              title="Neto"
              width={120}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="interestValue"
              title="Interes Financiamiento"
              typeInput="money"
              width={200}
            />
            <TableColumn
              className={styles.center}
              field="delete"
              cell={getCellDelete}
              width={120}
            />
          </Table>
          <div className="mt-3 mb-3">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => HandlenSendCorrection(invoceCorrection)}
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

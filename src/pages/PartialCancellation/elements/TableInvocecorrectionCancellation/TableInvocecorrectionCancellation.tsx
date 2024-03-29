import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GridCellProps, Table, TableColumn, TableItemChangeEvent } from 'ef_ui_components';
import { getCalculateValueQTY, getCurrencyFormat, getFormattedDecimal } from 'global/helpers';
import { MinusSvg } from 'global/icons';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import styles from './TableInvocecorrectionCancellation.module.scss';

interface TableInvocecorrectionCancellationProps {
  data: IinvoiceSetting[];
  handleDelteItemCorrection: (item: IinvoiceSetting) => void;
  HandlenSendCorrection: (c: IInvoiceDocument[]) => void;
}

const TableInvocecorrectionCancellation: React.FC<TableInvocecorrectionCancellationProps> = ({
  data,
  handleDelteItemCorrection,
  HandlenSendCorrection,
}) => {
  const [invoceCorrection, setInvoceCorrection] = useState<IinvoiceSetting[]>([]);
  const [rowEdit, setRowEdit] = useState(null);

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
      const dataorigin = data.find((x) => x.id === event.dataItem.id);
      itemEdit[index] = {
        ...itemEdit[index],
        [event.field]: event.value,
        brutoTotal: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.brutoTotal, dataorigin.amount, Number(event.value))
        ),
        descuentoAmount: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.descuentoAmount, dataorigin.amount, Number(event.value))
        ),
        taxAmount: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.taxAmount, dataorigin.amount, Number(event.value))
        ),
        isc: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.isc, dataorigin.amount, Number(event.value))
        ),
        isce: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.isce, dataorigin.amount, Number(event.value))
        ),
        interestValue: getFormattedDecimal(
          getCalculateValueQTY(dataorigin.interestValue, dataorigin.amount, Number(event.value))
        ),
      };

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

  const handleDecimal = ({ dataItem, field }: GridCellProps) => {
    return <span>{getCurrencyFormat(dataItem[field] ? Number(dataItem[field]) : 0)}</span>;
  };

  return (
    <div className="container-fluid mt-3">
      {data.length > 0 ? (
        <>
          <Table
            className={'table_data'}
            data={invoceCorrection.map((item) => ({
              ...item,
              isEdit: rowEdit === item.id,
            }))}
            editName="isEdit"
            onItemRowChangue={itemChange}
            onRowClick={(e) => setRowEdit(e.dataItem.id)}
            take={10}
            skip={0}
            total={data.length}
          >
            <TableColumn field="idProduct" title="Codigo Producto" />
            <TableColumn
              cell={handleDecimal}
              className={styles.center}
              field="amount"
              title="QTY"
              typeInput="number"
              width={240}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="brutoTotal"
              title="Precio Bruto"
              width={160}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="descuentoAmount"
              title="Descuento"
              width={160}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              field="taxAmount"
              title="ITBIS"
              width={160}
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              width={120}
              field="isc"
              title="ISC"
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              width={120}
              field="isce"
              title="ISCE"
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              width={120}
              field="netAmount"
              title="Neto"
            />
            <TableColumn
              cell={handleDecimal}
              className={styles.number}
              width={120}
              field="interestValue"
              title="Interes Financiamiento"
            />
            <TableColumn
              className={styles.center}
              width={120}
              field="delete"
              cell={getCellDelete}
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

TableInvocecorrectionCancellation.propTypes = {
  data: PropTypes.any.isRequired,
  handleDelteItemCorrection: PropTypes.func.isRequired,
  HandlenSendCorrection: PropTypes.func.isRequired,
};

export default TableInvocecorrectionCancellation;

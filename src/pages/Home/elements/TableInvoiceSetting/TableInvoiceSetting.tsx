import React from 'react';
import PropTypes from 'prop-types';
import {
  GridCellProps,
  processTable,
  Table,
  TableColumn,
  TableRowClickEvent,
} from 'ef_ui_components';
import { Checksolid, NoChecksolid } from 'global/icons';
import { getCurrencyFormat } from 'global/helpers';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import styles from './TableInvoiceSetting.module.scss';

interface TableInvoiceSettingProps {
  correctionInfo?: IinvoiceSetting[];
  data?: IinvoiceSetting[];
  handleInfoCorrection: (i: IinvoiceSetting) => void;
  loading?: boolean;
}

const TableInvoiceSetting: React.FC<TableInvoiceSettingProps> = ({
  correctionInfo,
  data,
  handleInfoCorrection,
  loading,
}) => {
  const getCellFreeGoods = ({ dataItem, field }: GridCellProps) => {
    if (field === 'freeGoods') {
      const resp =
        dataItem.freeGoods === 0 ? (
          <NoChecksolid className="iconos-check" />
        ) : (
          <Checksolid className="iconos-check" />
        );
      return resp;
    }
    return null;
  };

  const handleClick = (e: TableRowClickEvent) => {
    handleInfoCorrection(e.dataItem);
  };

  const handleDecimal = ({ dataItem, field }: GridCellProps) => {
    return <span>{getCurrencyFormat(dataItem[field] ? Number(dataItem[field]) : 0)}</span>;
  };

  return (
    <div className="container-fluid">
      <Table
        className={'table_data'}
        data={processTable(
          data.map((item: IinvoiceSetting) => {
            if (correctionInfo.length > 0) {
              item.select = correctionInfo.some((x) => x.id === item.id);
            } else {
              item.select = false;
            }
            return item;
          }) ?? [],
          {}
        )}
        isSelectRow
        loadingData={loading}
        onRowClick={handleClick}
        theadClassName="thead-dark"
        take={10}
        skip={0}
        total={data.length}
      >
        <TableColumn
          className={styles.right}
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
          className={styles.right}
          field="brutoTotal"
          title="Precio Bruto"
          width={160}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="descuentoAmount"
          title="Descuento"
          width={160}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="taxAmount"
          title="ITBIS"
          width={120}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="isc"
          title="ISC"
          width={120}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="isce"
          title="ISCE"
          width={120}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="netAmount"
          title="Neto"
          width={120}
        />
        <TableColumn
          cell={handleDecimal}
          className={styles.right}
          field="interestValue"
          title="Interes Financiamiento"
          width={200}
        />
        <TableColumn
          className={styles.center}
          cell={getCellFreeGoods}
          field="freeGoods"
          title="Free Goods"
          width={120}
        />
      </Table>
    </div>
  );
};

TableInvoiceSetting.defaultProps = {
  correctionInfo: [],
  data: [],
  loading: false,
};

TableInvoiceSetting.propTypes = {
  correctionInfo: PropTypes.any,
  data: PropTypes.any,
  handleInfoCorrection: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default TableInvoiceSetting;

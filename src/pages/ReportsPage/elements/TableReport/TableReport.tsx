import React from 'react';
import PropTypes from 'prop-types';
import { GridCellProps, Table, TableColumn } from 'ef_ui_components';
import { ReportNFC } from 'pages/ReportsPage/constants/Report.interface';
import { getCurrencyFormat } from 'global/helpers';
import styles from './TableReport.module.scss';

interface TableReportProps {
  data?: unknown[] | ReportNFC[];
}

const TableReport: React.FC<TableReportProps> = ({ data }) => {
  const handleDecimal = ({ dataItem, field }: GridCellProps) => {
    return <span>{getCurrencyFormat(dataItem[field] ? Number(dataItem[field]) : 0)}</span>;
  };

  return (
    <Table
      className={'table_data'}
      data={data === undefined || data?.length <= 0 ? [] : data}
      take={10}
      skip={0}
      total={data.length}
    >
      <TableColumn field="idProduct" title="Codigo Producto" />
      <TableColumn field="tipo" title="Tipo" />
      <TableColumn field="contProduct" title="Cantidad" />
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
        field="transport"
        title="Transportado"
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
    </Table>
  );
};

TableReport.defaultProps = {
  data: [],
};

TableReport.propTypes = {
  data: PropTypes.array,
};

export default TableReport;

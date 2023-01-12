import { Table } from 'components';
import { TableColumn } from 'components/Table/elements';
import { Checksolid, NoChecksolid } from 'global/icons';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';
import PropTypes from 'prop-types';
import { processTable } from 'components/Table/constants/Table.constant';
import { GridCellProps, TableRowClickEvent } from 'components/Table/types/Colmuns.interface';
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
        <TableColumn field="idProduct" title="Codigo Producto" />
        <TableColumn field="amount" title="QTY" />
        <TableColumn field="brutoTotal" title="Precio Bruto" />
        <TableColumn field="descuentoAmount" title="Descuento" />
        <TableColumn field="taxAmount" title="ITBIS" />
        <TableColumn field="isc" title="ISC" />
        <TableColumn field="isce" title="ISCE" />
        <TableColumn field="netAmount" title="Neto" />
        <TableColumn field="interestValue" title="Interes Financiamiento" />
        <TableColumn
          className={styles.center}
          cell={getCellFreeGoods}
          field="freeGoods"
          title="Free Goods"
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

import { Table } from 'components';
import { GridCellProps } from 'components/Table/constants/Table.interface';
import { TableColumn } from 'components/Table/elements';
import { Checksolid, NoChecksolid } from 'global/icons';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';
import PropTypes from 'prop-types';

interface TableInvoiceSettingProps {
  data?: IinvoiceSetting[];
  HandleInfoCorrection: (invoiceSetting: IinvoiceSetting) => void;
  loading?: boolean;
}

const TableInvoiceSetting: React.FC<TableInvoiceSettingProps> = ({
  data,
  HandleInfoCorrection,
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

  return (
    <div>
      <Table
        className="table table-bordered"
        data={data}
        loadingData={loading}
        onRowClick={HandleInfoCorrection}
      >
        <TableColumn field="idProduct" title="Codigo Producto" />
        <TableColumn className="text-center" field="amount" title="QTY" />
        <TableColumn className="td-number" field="brutoTotal" title="Precio Bruto" />
        <TableColumn className="td-number" field="descuentoAmount" title="Descuento" />
        <TableColumn className="td-number" field="taxAmount" title="Itbis" />
        <TableColumn className="td-number" field="isc" title="ISC" />
        <TableColumn className="td-number" field="isce" title="ISCE" />
        <TableColumn className="td-number" field="netAmount" title="Neto" />
        <TableColumn className="td-number" field="interestValue" title="Interes Financiamiento" />
        <TableColumn
          cell={getCellFreeGoods}
          className="td-number"
          field="freeGoods"
          title="Free Goods"
        />
      </Table>
    </div>
  );
};

TableInvoiceSetting.defaultProps = {
  data: [],
  loading: false,
};

TableInvoiceSetting.propTypes = {
  data: PropTypes.any,
  HandleInfoCorrection: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default TableInvoiceSetting;

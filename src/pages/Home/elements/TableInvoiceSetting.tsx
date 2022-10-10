import { Table } from 'components';
import { GridCellProps } from 'components/Table/constants/Table.interface';
import { TableColumn } from 'components/Table/elements';
import { Checksolid, NoChecksolid } from 'global/icons/inex';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React from 'react';

interface TableInvoiceSettingProps {
  data: IinvoiceSetting[];
  HandleInfoCorrection: (invoiceSetting: IinvoiceSetting) => void;
}

const TableInvoiceSetting: React.FC<TableInvoiceSettingProps> = ({
  data,
  HandleInfoCorrection,
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
      {data?.length > 0 ? (
        <Table className="table table-bordered" data={data} onRowClick={HandleInfoCorrection}>
          <TableColumn field="idProduct" title="Codigo Producto" />
          <TableColumn className="items-center" field="amount" title="QTY" />
          <TableColumn className="td-number" field="brutoTotal" title="Precio Bruto" />
          <TableColumn className="td-number" field="descuentoAmount" title="Descuento" />
          <TableColumn className="td-number" field="taxAmount" title="ITBIS" />
          <TableColumn className="td-number" field="isc" title="ISC" />
          <TableColumn className="td-number" field="isce" title="ISCE" />
          <TableColumn className="td-number" field="netAmount" title="Neto" />
          <TableColumn className="td-number" field="interestValue" title="Interes Financiamiento" />
          <TableColumn
            cell={getCellFreeGoods}
            className="items-center"
            field="freeGoods"
            title="free Goods"
          />
        </Table>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TableInvoiceSetting;

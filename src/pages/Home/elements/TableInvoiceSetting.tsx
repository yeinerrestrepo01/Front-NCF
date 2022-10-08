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
        <Table className="table" data={data} onRowClick={HandleInfoCorrection}>
          <TableColumn field="idProduct" title="Codigo Producto" />
          <TableColumn className="items-center" field="amount" title="amount" />
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
          <TableColumn
            cell={getCellFreeGoods}
            className="items-center"
            field="freeGoods"
            title="Seleccionado"
          />
        </Table>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TableInvoiceSetting;

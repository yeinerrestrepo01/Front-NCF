import React from 'react';
import PropTypes from 'prop-types';
import { SettingsNFCFeth } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import { Table } from 'components';
import { TableColumn } from 'components/Table/elements';
import { GridCellProps } from 'components/Table/constants/Table.interface';

interface TableCancellationProps {
  data?: unknown[] | SettingsNFCFeth[];
  handleEdit?: (p: SettingsNFCFeth | unknown) => void;
}

const TableCancellation: React.FC<TableCancellationProps> = ({ data, handleEdit }) => {
  const getCellEdit = ({ dataItem, field }: GridCellProps) => {
    if (field === 'edit') {
      return (
        <button type="button" onClick={() => handleEdit(dataItem)}>
          Editar
        </button>
      );
    }
    return null;
  };

  return (
    <Table data={data === undefined || data?.length <= 0 ? [] : data}>
      <TableColumn field="compania" title="Empresa" />
      <TableColumn field="tipoOrigen" title="Tipo Origen" />
      <TableColumn field="tipoCancelCliente" title="Tipo Cancelación Cliente" />
      <TableColumn field="tipoCancelInterComp" title="Tipo Cancelación InterCom" />
      <TableColumn field="SAPCancelacion" title="SAP Cancelación" />
      <TableColumn field="inicio" title="Inicio" />
      <TableColumn className="text-center" cell={getCellEdit} field="edit" title="Acciones" />
    </Table>
  );
};

TableCancellation.defaultProps = {
  data: [],
  handleEdit: null,
};

TableCancellation.propTypes = {
  data: PropTypes.array,
  handleEdit: PropTypes.func,
};

export default TableCancellation;

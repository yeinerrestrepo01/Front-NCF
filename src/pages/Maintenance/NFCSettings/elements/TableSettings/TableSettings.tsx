import React from 'react';
import PropTypes from 'prop-types';
import { GridCellProps, Table, TableColumn } from 'ef_ui_components';
import { SettingsNFCFeth } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';

interface TableSettingsProps {
  data?: unknown[] | SettingsNFCFeth[];
  handleEdit?: (p: SettingsNFCFeth | unknown) => void;
}

const TableSettings: React.FC<TableSettingsProps> = ({ data, handleEdit }) => {
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
    <Table
      className={'table_data'}
      data={data === undefined || data?.length <= 0 ? [] : data}
      take={10}
      skip={0}
      total={data.length}
    >
      <TableColumn field="cIdCompany" title="Empresa" />
      <TableColumn field="cidTypeDocument" title="Tipo de Documento" />
      <TableColumn field="prefix" title="Prefijo" />
      <TableColumn field="lenth" title="Tamaño" />
      <TableColumn field="nNoAutorizacion" title="No. Autorización" />
      <TableColumn className="text-center" cell={getCellEdit} field="edit" title="Acciones" />
    </Table>
  );
};

TableSettings.defaultProps = {
  data: [],
  handleEdit: null,
};

TableSettings.propTypes = {
  data: PropTypes.array,
  handleEdit: PropTypes.func,
};

export default TableSettings;

import React from 'react';
import PropTypes from 'prop-types';
import { ListAssignProfiles } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { Table, TableColumn } from 'ef_ui_components';

interface TableAssignProfilesProps {
  data?: ListAssignProfiles[];
  loadingData?: boolean;
}

const TableAssignProfiles: React.FC<TableAssignProfilesProps> = ({ data, loadingData }) => {
  return (
    <Table className={'table_data'} data={data} loadingData={loadingData}>
      <TableColumn field="nombreusuario" id="nombreusuario" title="Usuario" />
      <TableColumn field="perfil" id="perfil" title="Perfil" />
    </Table>
  );
};

TableAssignProfiles.defaultProps = {
  data: [],
  loadingData: false,
};

TableAssignProfiles.propTypes = {
  data: PropTypes.array,
  loadingData: PropTypes.bool,
};

export default TableAssignProfiles;

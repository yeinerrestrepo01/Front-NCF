import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'components';
import { TableColumn } from 'components/Table/elements';
import { GridCellProps } from 'components/Table/constants/Table.interface';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';

interface TableDocumentCorrectionProps {
  data?: unknown[] | DocumentCorrectionFetch[];
  handleEdit?: (p: DocumentCorrectionFetch | unknown) => void;
}

const TableDocumentCorrection: React.FC<TableDocumentCorrectionProps> = ({ data, handleEdit }) => {
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
      <TableColumn field="tipoCancelacion" title="Tipo Cancelación" />
      <TableColumn field="tipoCorreccion" title="Tipo Corrección" />
      <TableColumn field="sapCancelacion" title="SAP Cancelación" />
      <TableColumn field="sapCorreccion" title="SAP Correción" />
      <TableColumn className="text-center" cell={getCellEdit} field="edit" title="Acciones" />
    </Table>
  );
};

TableDocumentCorrection.defaultProps = {
  data: [],
  handleEdit: null,
};

TableDocumentCorrection.propTypes = {
  data: PropTypes.array,
  handleEdit: PropTypes.func,
};

export default TableDocumentCorrection;

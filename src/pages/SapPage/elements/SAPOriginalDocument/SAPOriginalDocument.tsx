import React from 'react';
import PropTypes from 'prop-types';
import { GridCellProps, Table, TableColumn } from 'ef_ui_components';
import { SAPOriginalDocumentData } from 'pages/SapPage/constants/Sap.interface';
import { Checksolid, NoChecksolid } from 'global/icons';
import styles from './SAPOriginalDocument.module.scss';

interface SAPOriginalDocumentProps {
  data?: SAPOriginalDocumentData[];
  isCorrection?: boolean;
  loadingData?: boolean;
}

const SAPOriginalDocument: React.FC<SAPOriginalDocumentProps> = ({
  data,
  isCorrection,
  loadingData,
}) => {
  const getStatusSendSap = ({ dataItem, field }: GridCellProps) => {
    if (field === 'enviadoSap') {
      const resp =
        dataItem.enviadoSap === false ? (
          <NoChecksolid className={`iconos-check ${styles.no_chek}`} />
        ) : (
          <Checksolid className={`iconos-check ${styles.chek_ok}`} />
        );
      return resp;
    }
    return null;
  };

  return (
    <div className="container-fluid">
      <Table
        className={'table_data'}
        data={data}
        isSelectRow
        loadingData={loadingData}
        theadClassName="thead-dark"
        take={10}
        skip={0}
        total={data.length}
      >
        <TableColumn field="idSupport" title="Codigo Soporte" />
        <TableColumn field="idOrder" title="No. Orden" />
        <TableColumn className="text-center" field="idCompany" title="Id Compañia" />
        <TableColumn field="idCustumer" title="Id Cliente" />
        <TableColumn field="ncf" title="NCF" />
        {isCorrection ? (
          <TableColumn field="ncfCorreccion" title="Documento Corrección" />
        ) : (
          <TableColumn field="ncfCancelacion" title="Documento Cancelación" />
        )}
        <TableColumn
          cell={getStatusSendSap}
          className="text-center"
          field="enviadoSap"
          title="Enviado a SAP"
        />
        <TableColumn field="respuestaSap" title="Respuesta SAP" />
      </Table>
    </div>
  );
};

SAPOriginalDocument.defaultProps = {
  data: [],
  isCorrection: false,
  loadingData: false,
};

SAPOriginalDocument.propTypes = {
  data: PropTypes.array,
  isCorrection: PropTypes.bool,
  loadingData: PropTypes.bool,
};

export default SAPOriginalDocument;

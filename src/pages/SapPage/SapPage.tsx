import React from 'react';
import { useSapDocumentCorrection, useSAPOriginalDocument } from 'pages/SapPage/services';
import { SAPOriginalDocument } from 'pages/SapPage/elements';

const SapPage: React.FC = () => {
  const { data, isLoading } = useSAPOriginalDocument();
  const { data: dataCorrection, isLoading: loadingCorrection } = useSapDocumentCorrection();

  return (
    <div className="container mt-4">
      <div className="col-12 mt-3">
        <h3>Envio SAP</h3>
        <hr />
        <SAPOriginalDocument data={data} loadingData={isLoading} />
      </div>
      <br />
      <div className="col-12 mt-3">
        <h3>Envio SAP - Documento Corrección</h3>
        <hr />
        <SAPOriginalDocument data={dataCorrection} isCorrection loadingData={loadingCorrection} />
      </div>
    </div>
  );
};

export default SapPage;

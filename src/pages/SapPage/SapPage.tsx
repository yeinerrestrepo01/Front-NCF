import React from 'react';
import { BackDrop } from 'components';
import {
  useResendCancellation,
  useSapDocumentCorrection,
  useSapForwarding,
  useSAPOriginalDocument,
} from 'pages/SapPage/services';
import { SAPOriginalDocument } from 'pages/SapPage/elements';

const SapPage: React.FC = () => {
  const { data, refetch, isLoading } = useSAPOriginalDocument();
  const {
    data: dataCorrection,
    refetch: refetchResendCancellation,
    isLoading: loadingCorrection,
  } = useSapDocumentCorrection();
  const { mutate: sapForwarding, isLoading: loadingSapForwarding } = useSapForwarding();
  const { mutate: resendCancellation, isLoading: loadinResendCancellation } =
    useResendCancellation();

  const handleSapForwarding = (idSupport: number) => {
    sapForwarding(idSupport, {
      onSuccess: (resp) => {
        if (resp.exitoso) {
          refetch();
        }
      },
    });
  };

  const handleResendCancellation = (idSupport: number) => {
    resendCancellation(idSupport, {
      onSuccess: (resp) => {
        if (resp.exitoso) {
          refetchResendCancellation();
        }
      },
    });
  };

  return (
    <div className="container mt-4">
      <div className="col-12 mt-3">
        <h3>Envio SAP</h3>
        <hr />
        <SAPOriginalDocument
          data={data}
          handleForwarding={handleSapForwarding}
          loadingData={isLoading}
        />
      </div>
      <br />
      <div className="col-12 mt-3">
        <h3>Envio SAP - Documento Corrección</h3>
        <hr />
        <SAPOriginalDocument
          data={dataCorrection}
          handleForwarding={handleResendCancellation}
          isCorrection
          loadingData={loadingCorrection}
        />
      </div>
      {(loadingSapForwarding || loadinResendCancellation) && <BackDrop show />}
    </div>
  );
};

export default SapPage;

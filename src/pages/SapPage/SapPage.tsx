import React, { useEffect, useState } from 'react';
import { BackDrop } from 'components';
import { useModal } from 'global/hooks';
import {
  useResendCancellation,
  useSapDocumentCorrection,
  useSapForwarding,
  useSAPOriginalDocument,
} from 'pages/SapPage/services';
import { FilterSap, ModalDetailErrorSap, SAPOriginalDocument } from 'pages/SapPage/elements';
import { FilterSapEnum, SAPOriginalDocumentData } from 'pages/SapPage/constants/Sap.interface';
import styles from './SapPage.module.scss';

const SapPage: React.FC = () => {
  const { openModal } = useModal();
  const [filterSapSend, setFilterSapSend] = useState<FilterSapEnum[]>([0]);
  const [filterCancellation, setFilterCancellation] = useState<FilterSapEnum[]>([0]);
  const [dataSendSap, setDataSendSap] = useState<SAPOriginalDocumentData[]>([]);
  const [dataCancelation, setDataCancelation] = useState<SAPOriginalDocumentData[]>([]);

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

  const handleDetailError = (err: string) => {
    openModal(<ModalDetailErrorSap textError={err} />, 'Detalle Respuesta SAP', {
      width: 600,
      height: 400,
    });
  };

  const handleFilterSendSap = (filter: FilterSapEnum) => {
    if (filterSapSend.includes(filter)) {
      setFilterSapSend([...filterSapSend.filter((c) => c !== filter)]);
    } else {
      setFilterSapSend([...filterSapSend, filter]);
    }
  };

  const handleFiltercorrection = (filter: FilterSapEnum) => {
    if (filterCancellation.includes(filter)) {
      setFilterCancellation([...filterCancellation.filter((c) => c !== filter)]);
    } else {
      setFilterCancellation([...filterCancellation, filter]);
    }
  };

  useEffect(() => {
    if (filterSapSend.length > 0) {
      const dataSap = data;
      const dataFilter: SAPOriginalDocumentData[] = [];
      if (dataSap?.length > 0) {
        filterSapSend.forEach((filter) => {
          if (filter === FilterSapEnum.Successful) {
            dataFilter.push(...dataSap.filter((sap) => sap.enviadoSap));
          }
          if (filter === FilterSapEnum.Mistakes) {
            dataFilter.push(...dataSap.filter((sap) => !sap.enviadoSap));
          }
        });
      }
      setDataSendSap([...dataFilter]);
    } else {
      setDataSendSap([]);
    }
  }, [data, filterSapSend]);

  useEffect(() => {
    if (filterCancellation.length > 0) {
      const dataSap = dataCorrection;
      const dataFilter: SAPOriginalDocumentData[] = [];
      if (dataSap?.length > 0) {
        filterCancellation.forEach((filter) => {
          if (filter === FilterSapEnum.Successful) {
            dataFilter.push(...dataSap?.filter((sap) => sap.enviadoSap));
          }
          if (filter === FilterSapEnum.Mistakes) {
            dataFilter.push(...dataSap?.filter((sap) => !sap.enviadoSap));
          }
        });
      }
      setDataCancelation([...dataFilter]);
    } else {
      setDataCancelation([]);
    }
  }, [dataCorrection, filterCancellation]);

  return (
    <div className={styles.container}>
      <div className={styles.infoSap}>
        <h3 className={styles.title}>Envio SAP</h3>
        <FilterSap filter={filterSapSend} name="sendSap" setFilter={handleFilterSendSap} />
        <SAPOriginalDocument
          data={dataSendSap}
          handleDetailError={handleDetailError}
          handleForwarding={handleSapForwarding}
          loadingData={isLoading}
        />
      </div>
      <br />
      <div className={styles.infoSap}>
        <h3 className={styles.title}>Envio SAP - Documento Corrección</h3>
        <FilterSap
          filter={filterCancellation}
          name="documentCorrection"
          setFilter={handleFiltercorrection}
        />
        <SAPOriginalDocument
          data={dataCancelation}
          handleDetailError={handleDetailError}
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

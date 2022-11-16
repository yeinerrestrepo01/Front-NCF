import React, { useState } from 'react';
import { BackDrop } from 'components';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import { TableInvoiceSetting } from 'pages/Home/elements';
import { useInvoiceSetting } from 'pages/Home/services';
import {
  FormPartialCancellation,
  TableInvocecorrectionCancellation,
} from 'pages/PartialCancellation/elements';
import { PartialCancellationForm } from 'pages/PartialCancellation/constants/PartialCancellation.interface';
import { useAnulacionInvoice } from 'pages/PartialCancellation/service';

const PartialCancellation: React.FC = () => {
  const [searchInvoice, setSearchInvoice] = useState<PartialCancellationForm>(null);
  const [correctionInfo, setCorrectionInfo] = useState<IinvoiceSetting[]>([]);

  const { data, isLoading } = useInvoiceSetting(
    searchInvoice?.nfcOrigen,
    searchInvoice?.codigoCliente
  );
  const { mutate, isLoading: loadingCorrection } = useAnulacionInvoice();

  //Funcion para consultat factuas
  const handleSearchInvoice = (search: PartialCancellationForm) => {
    if (search.nfcOrigen.length > 0 && search.codigoCliente.length > 0) {
      setSearchInvoice(search);
    }
  };

  const hanldeSetCorrection = (invoiceSetting: IinvoiceSetting) => {
    if (
      invoiceSetting != null &&
      (!correctionInfo.find((inf) => inf.id === invoiceSetting.id) || correctionInfo.length === 0)
    ) {
      setCorrectionInfo([...correctionInfo, { ...invoiceSetting }]);
    }
  };

  const handlenSendCorrection = (documentoCorrecion: IInvoiceDocument[]) => {
    if (searchInvoice.nfcOrigen?.length > 0 && searchInvoice.codigoCliente?.length > 0) {
      mutate(
        {
          documentoCorrecion: documentoCorrecion,
          solicitudAnulacionDto: {
            idCustumer: searchInvoice.codigoCliente,
            ncf: searchInvoice.nfcOrigen,
            idSupport: searchInvoice.tikect,
            interCompany: searchInvoice.intercompany,
          },
        },
        {
          onSuccess: (res) => {
            if (res.estadoHttp === 200) {
              alert('Proceso realizado exitosamente.');
              setCorrectionInfo([]);
            } else {
              alert('No se pudo realizar la ejecucion del procso exitosamente');
            }
          },
        }
      );
    }
  };

  const handleDelteItemCorrection = (item: IinvoiceSetting) => {
    if (correctionInfo.length > 0 && correctionInfo.some((i) => i.id === item.id)) {
      setCorrectionInfo(correctionInfo.filter((x) => x.id !== item.id));
    }
  };
  return (
    <div className="container mt-4">
      <FormPartialCancellation handleSearchInvoice={handleSearchInvoice} />
      <div className="col-12 mt-3">
        <h2>Documento Original</h2>
        <TableInvoiceSetting
          correctionInfo={correctionInfo}
          data={data}
          handleInfoCorrection={hanldeSetCorrection}
          loading={isLoading}
        />
      </div>
      <br />

      {correctionInfo.length > 0 ? (
        <div className="col-12 mt-4">
          <h2 className="text-danger">Documento Correcion</h2>
          <hr></hr>
          <TableInvocecorrectionCancellation
            data={correctionInfo}
            handleDelteItemCorrection={handleDelteItemCorrection}
            HandlenSendCorrection={handlenSendCorrection}
          />
        </div>
      ) : (
        <div></div>
      )}
      {loadingCorrection && <BackDrop show />}
    </div>
  );
};

export default PartialCancellation;

import React, { useState } from 'react';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import { TableInvoiceSetting } from 'pages/Home/elements';
import { useCorrectInvoice, useInvoiceSetting } from 'pages/Home/services';
import {
  FormPartialCancellation,
  TableInvocecorrectionCancellation,
} from 'pages/PartialCancellation/elements';
import { BackDrop } from 'components';
import { PartialCancellationForm } from './constants/PartialCancellation.interface';

const PartialCancellation: React.FC = () => {
  const [invoice, setInvoice] = useState(null);
  const [invoceCustomer, setInvoceCustomer] = useState(null);
  const [correctionInfo, setCorrectionInfo] = useState<IinvoiceSetting[]>([]);

  const { data, isLoading } = useInvoiceSetting(invoice, invoceCustomer);
  const { mutate, isLoading: loadingCorrection } = useCorrectInvoice();

  //Funcion para consultat factuas
  const handleSearchInvoice = (search: PartialCancellationForm) => {
    if (search.nfcOrigen.length > 0 && search.codigoCliente.length > 0) {
      setInvoice(search.nfcOrigen);
      setInvoceCustomer(search.codigoCliente);
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
    if (invoice?.length > 0 && invoceCustomer?.length > 0) {
      mutate(
        {
          documentoOriginal: correctionInfo,
          documentoCorrecion: documentoCorrecion,
          solitudSoporteDocumento: {
            idCustumer: invoceCustomer,
            ncf: invoice,
            idSupport: '',
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

import BackDrop from 'components/BackDrop/BackDrop';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React, { useState } from 'react';
import {
  DocumentCorrection,
  TableInvocecorrection,
  TableInvoiceSetting,
} from 'pages/Home/elements';
import { useCorrectInvoice, useInvoiceSetting } from 'pages/Home/services';
import { CorrectionForm } from 'pages/Home/constants/Home.interface';
import { dataPrueba } from './constants/Home.constant';

const Home: React.FC = () => {
  const [invoice, setInvoice] = useState(null);
  const [invoceCustomer, setInvoceCustomer] = useState(null);
  const [correctionInfo, setCorrectionInfo] = useState<IinvoiceSetting[]>([]);

  const { data, isLoading } = useInvoiceSetting(invoice, invoceCustomer);
  const { mutate, isLoading: loadingCorrection } = useCorrectInvoice();

  //Funcion para consultat factuas
  const handleSearchInvoice = (search: CorrectionForm) => {
    if (search.nfcOrigen.length > 0 && search.codigoCliente.length > 0) {
      setInvoice(search.nfcOrigen);
      setInvoceCustomer(search.codigoCliente);
    }
  };

  const HandleInfoCorrection = (invoiceSetting: IinvoiceSetting) => {
    if (
      invoiceSetting != null &&
      invoiceSetting.freeGoods === 0 &&
      (!correctionInfo.find((inf) => inf.id === invoiceSetting.id) || correctionInfo.length === 0)
    ) {
      setCorrectionInfo([...correctionInfo, invoiceSetting]);
    }
  };

  const HandlenSendCorrection = (
    documentoOriginal: IInvoiceDocument[],
    documentoCorrecion: IInvoiceDocument[]
  ) => {
    if (setInvoice.length > 0 && invoceCustomer.length > 0) {
      mutate(
        {
          documentoOriginal: [...documentoOriginal],
          documentoCorrecion: [...documentoCorrecion],
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
      <DocumentCorrection handleSearchInvoice={handleSearchInvoice} />
      <div className="col-12 mt-3">
        <h2>Documento Original</h2>
        <TableInvoiceSetting
          correctionInfo={correctionInfo}
          data={data}
          HandleInfoCorrection={HandleInfoCorrection}
          loading={isLoading}
        />
      </div>

      {correctionInfo.length > 0 ? (
        <div className="col-12 mt-4">
          <h2 className="text-danger">Documento Correcion</h2>
          <hr></hr>
          <TableInvocecorrection
            data={correctionInfo}
            handleDelteItemCorrection={handleDelteItemCorrection}
            HandlenSendCorrection={HandlenSendCorrection}
          />
        </div>
      ) : (
        <div></div>
      )}
      {loadingCorrection && <BackDrop show />}
    </div>
  );
};

export default Home;

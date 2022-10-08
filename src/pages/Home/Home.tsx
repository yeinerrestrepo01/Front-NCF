import { Table } from 'components';
import { GridCellProps } from 'components/Table/constants/Table.interface';
import { TableColumn } from 'components/Table/elements';
import { Checksolid, NoChecksolid } from 'global/icons/inex';
import { IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React, { useState } from 'react';
import { TableInvoiceSetting } from './elements';
import TableInvocecorrection from './elements/TableInvocecorrection';
import useCorrectInvoice from './services/useCorrectInvoice';
import useInvoiceSetting from './services/useInvoiceSetting';
const Home: React.FC = () => {
  const [origen, setOrigen] = useState('');
  const [invoice, setInvoice] = useState(null);
  const [invoceCustomer, setInvoceCustomer] = useState(null);
  const [customer, setcustomer] = useState('');
  const [correctionInfo, setcorrectionInfo] = useState<IinvoiceSetting[]>([]);

  const { data } = useInvoiceSetting(invoice, invoceCustomer);
  const { mutate } = useCorrectInvoice();

  const dataPrueba: IinvoiceSetting[] = [
    {
      amount: 2,
      brutoTotal: 1,
      descuentoAmount: 12,
      freeGoods: 1,
      groupPrice: 'group 1',
      id: 1,
      idCompany: '12',
      idCustumer: '1',
      idInvoice: '2',
      idOrder: '2',
      idProduct: '1',
      idUnitMeasureType: '2',
      interestValue: 12,
      isc: 4,
      isce: 5,
      ncf: '4',
      ncfType: 'tipo 4',
      netAmount: 12,
      nSeq: 5,
      taxAmount: 1,
      transport: 2,
    },
    {
      amount: 3,
      brutoTotal: 2,
      descuentoAmount: 1,
      freeGoods: 0,
      groupPrice: 'group 2',
      id: 2,
      idCompany: '12',
      idCustumer: '12',
      idInvoice: '21',
      idOrder: '12',
      idProduct: '11',
      idUnitMeasureType: '21',
      interestValue: 12,
      isc: 4,
      isce: 5,
      ncf: '4',
      ncfType: 'tipo 1',
      netAmount: 12,
      nSeq: 5,
      taxAmount: 1,
      transport: 2,
    },
  ];

  //Funcion para consultat factuas
  const handleSearchInvoice = () => {
    if (origen.length > 0 && customer.length > 0) {
      setInvoice(origen);
      setInvoceCustomer(customer);
    }
  };

  const HandleInfoCorrection = (invoiceSetting: IinvoiceSetting) => {
    if (
      invoiceSetting != null &&
      invoiceSetting.freeGoods > 0 &&
      (!correctionInfo.find((inf) => inf.id === invoiceSetting.id) || correctionInfo.length === 0)
    ) {
      setcorrectionInfo([...correctionInfo, invoiceSetting]);
    }
  };

  const HandlenSendCorrection = (
    documentoOriginal: IInvoiceDocument[],
    documentoCorrecion: IInvoiceDocument[]
  ) => {
    if (origen.length > 0 && customer.length > 0) {
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

  const getCellFreeGoods = ({ dataItem, field }: GridCellProps) => {
    if (field === 'freeGoods') {
      const resp =
        dataItem.freeGoods === 0 ? (
          <NoChecksolid className="iconos-check" />
        ) : (
          <Checksolid className="iconos-check" />
        );
      return resp;
    }
    return null;
  };

  return (
    <div className="container mt-4">
      <h3>Correcion de Documento</h3>
      <hr></hr>
      <form>
        <div className="form-group mt-4">
          <label htmlFor="nfcOrigen">NCF Origen</label>
          <input
            type="text"
            className="form-control"
            id="nfcOrigen"
            onChange={(value) => setOrigen(value.target.value)}
            value={origen}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="codigoCliente">Codigo Cliente</label>
          <input
            type="text"
            className="form-control"
            id="codigoCliente"
            onChange={(value) => setcustomer(value.target.value)}
            value={customer}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="tikect">Id de reclamacion</label>
          <input type="text" className="form-control" id="tikect" required />
        </div>
        <div className="mt-3">
          <button type="button" className="btn btn-primary" onClick={handleSearchInvoice}>
            Consultar NCF
          </button>
        </div>
      </form>
      <div className="col-12 mt-3">
        <h2>Documento Original</h2>
        <Table className="table" data={dataPrueba} onRowClick={HandleInfoCorrection}>
          <TableColumn field="idProduct" title="Codigo Producto" />
          <TableColumn className="items-center" field="amount" title="amount" />
          <TableColumn className="items-center" field="brutoTotal" title="Precio Bruto" />
          <TableColumn className="items-center" field="descuentoAmount" title="Descuento" />
          <TableColumn className="items-center" field="taxAmount" title="Itbis" />
          <TableColumn className="items-center" field="isc" title="ISC" />
          <TableColumn className="items-center" field="isce" title="ISCE" />
          <TableColumn className="items-center" field="netAmount" title="Neto" />
          <TableColumn
            className="items-center"
            field="interestValue"
            title="Interes Financiamiento"
          />
          <TableColumn
            cell={getCellFreeGoods}
            className="items-center"
            field="freeGoods"
            title="Seleccionado"
          />
        </Table>
        <TableInvoiceSetting data={data} HandleInfoCorrection={HandleInfoCorrection} />
      </div>

      <div className="col-12 mt-4">
        <h2 className="text-danger">Documento Correcion</h2>
        <hr></hr>
        {correctionInfo ? (
          <TableInvocecorrection
            data={correctionInfo}
            HandlenSendCorrection={HandlenSendCorrection}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;

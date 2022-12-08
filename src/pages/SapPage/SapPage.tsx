import { Table } from 'components';
import { TableColumn } from 'components/Table/elements';
import React from 'react';
import { dataPrueba } from '../Home/constants/Home.constant';

const SapPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="col-12 mt-3">
        <h3>Envio SAP</h3>
        <hr />
        <div className="container-fluid">
          <Table
            className="table table-bordered"
            data={dataPrueba}
            isSelectRow
            theadClassName="thead-dark"
          >
            <TableColumn field="idProduct" title="Codigo Producto" />
            <TableColumn className="text-center" field="amount" title="QTY" />
            <TableColumn className="td-number" field="brutoTotal" title="Precio Bruto" />
            <TableColumn className="td-number" field="descuentoAmount" title="Descuento" />
            <TableColumn className="td-number" field="taxAmount" title="ITBIS" />
            <TableColumn className="td-number" field="isc" title="ISC" />
            <TableColumn className="td-number" field="isce" title="ISCE" />
            <TableColumn className="td-number" field="netAmount" title="Neto" />
            <TableColumn
              className="td-number"
              field="interestValue"
              title="Interes Financiamiento"
            />
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SapPage;

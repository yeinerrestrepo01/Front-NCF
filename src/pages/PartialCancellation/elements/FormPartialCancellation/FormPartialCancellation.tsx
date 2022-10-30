import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { TextInput } from 'components';
import {
  InitialFormpartialCancellation,
  validationsFormpartialCancellation,
} from 'pages/PartialCancellation/constants/PartialCancellation.constant';
import { PartialCancellationForm } from 'pages/PartialCancellation/constants/PartialCancellation.interface';

interface FormPartialCancellationProps {
  handleSearchInvoice: (f: PartialCancellationForm) => void;
}

const FormPartialCancellation: React.FC<FormPartialCancellationProps> = ({
  handleSearchInvoice,
}) => {
  return (
    <div>
      <h3>Correcion de Documento</h3>
      <hr />
      <Formik
        initialValues={InitialFormpartialCancellation}
        onSubmit={handleSearchInvoice}
        validationSchema={validationsFormpartialCancellation}
      >
        {() => (
          <Form>
            <div className="form-group mt-4">
              <TextInput name="nfcOrigen" label="NCF Origen" required />
            </div>
            <div className="form-group mt-4">
              <TextInput name="codigoCliente" label="Codigo Cliente" required />
            </div>
            <div className="form-group mt-4">
              <TextInput name="intercompany" label="NFC Intercompany" />
            </div>
            <div className="form-group mt-4">
              <TextInput name="tikect" label="Id de reclamacion" />
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" type="submit">
                Consultar NCF
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormPartialCancellation.propTypes = {
  handleSearchInvoice: PropTypes.func.isRequired,
};

export default FormPartialCancellation;

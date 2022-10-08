import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { CorrectionForm } from 'pages/Home/constants/Home.interface';
import {
  InitialFormCorrection,
  validationsFormCorrection,
} from 'pages/Home/constants/Home.constant';
import { TextInput } from 'components';

interface DocumentCorrectionProps {
  handleSearchInvoice: (f: CorrectionForm) => void;
}

const DocumentCorrection: React.FC<DocumentCorrectionProps> = ({ handleSearchInvoice }) => {
  return (
    <div>
      <h3>Correcion de Documento</h3>
      <hr />
      <Formik
        initialValues={InitialFormCorrection}
        onSubmit={handleSearchInvoice}
        validationSchema={validationsFormCorrection}
      >
        {() => (
          <Form>
            <div className="form-group mt-4">
              <TextInput name="codigoCliente" label="NCF Origen" required />
            </div>
            <div className="form-group mt-4">
              <TextInput name="nfcOrigen" label="Codigo Cliente" required />
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

DocumentCorrection.propTypes = {
  handleSearchInvoice: PropTypes.func.isRequired,
};

export default DocumentCorrection;

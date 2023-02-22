import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { CorrectionForm } from 'pages/Home/constants/Home.interface';
import {
  InitialFormCorrection,
  validationsFormCorrection,
} from 'pages/Home/constants/Home.constant';
import { ResetForm, TextInput } from 'components';

interface DocumentCorrectionProps {
  handleSearchInvoice: (f: CorrectionForm) => void;
  resetForm?: boolean;
  title: string;
}

const DocumentCorrection: React.FC<DocumentCorrectionProps> = ({
  handleSearchInvoice,
  resetForm,
  title,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <hr />
      <Formik
        initialValues={InitialFormCorrection}
        onSubmit={handleSearchInvoice}
        validationSchema={validationsFormCorrection}
      >
        {() => (
          <Form>
            <div className="form-group mt-4">
              <TextInput name="nfcOrigen" label="NCF Origen" required maxLength={15} />
            </div>
            <div className="form-group mt-4">
              <TextInput name="codigoCliente" label="Codigo Cliente" required />
            </div>
            <div className="form-group mt-4">
              <TextInput name="tikect" label="Id de reclamacion" />
            </div>
            <div className="mt-3">
              <button className="btn btn-primary" type="submit">
                Consultar NCF
              </button>
            </div>
            <ResetForm isReset={resetForm} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

DocumentCorrection.defaultProps = {
  resetForm: false,
};

DocumentCorrection.propTypes = {
  handleSearchInvoice: PropTypes.func.isRequired,
  resetForm: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default DocumentCorrection;

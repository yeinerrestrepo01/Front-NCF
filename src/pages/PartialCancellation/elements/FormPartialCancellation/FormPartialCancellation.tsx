import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { ResetForm, TextInput } from 'components';
import {
  InitialFormpartialCancellation,
  validationsFormpartialCancellation,
} from 'pages/PartialCancellation/constants/PartialCancellation.constant';
import { PartialCancellationForm } from 'pages/PartialCancellation/constants/PartialCancellation.interface';

interface FormPartialCancellationProps {
  handleSearchInvoice: (f: PartialCancellationForm) => void;
  resetForm?: boolean;
}

const FormPartialCancellation: React.FC<FormPartialCancellationProps> = ({
  handleSearchInvoice,
  resetForm,
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
              <TextInput name="nfcOrigen" label="NCF Origen" required maxLength={15} />
            </div>
            <div className="form-group mt-4">
              <TextInput name="codigoCliente" label="Codigo Cliente" required />
            </div>
            <div className="form-group mt-4">
              <TextInput name="intercompany" label="NCF Intercompany" required maxLength={15} />
            </div>
            <div className="form-group mt-4">
              <TextInput name="tikect" label="Documento Descarga" required />
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

FormPartialCancellation.defaultProps = {
  resetForm: false,
};

FormPartialCancellation.propTypes = {
  handleSearchInvoice: PropTypes.func.isRequired,
  resetForm: PropTypes.bool,
};

export default FormPartialCancellation;

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { ListCompany } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.constant';
import { ResetForm, SelectInput, TextInput } from 'components';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';
import { ValidationCorrection } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.constant';
import styles from './FormDocumentCorrection.module.scss';

interface FormDocumentCorrectionProps {
  handleSubmit: (v: DocumentCorrectionFetch) => void;
  initialValues?: DocumentCorrectionFetch;
  isUpdate?: boolean;
  resetForm?: boolean;
}

const FormDocumentCorrection: React.FC<FormDocumentCorrectionProps> = ({
  handleSubmit,
  initialValues,
  isUpdate,
  resetForm,
}) => {
  return (
    <div className={styles.content}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationCorrection}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.formContent}>
              <SelectInput name="compania" label="Empresa" options={ListCompany} required />
              <TextInput name="tipoOrigen" label="Tipo Origen" required />
              <TextInput name="tipoCancelacion" label="Tipo Cancelación" required />
              <TextInput name="tipoCorreccion" label="Tipo Corrección" required />
              <TextInput name="SAPCancelacion" label="SAP Cancelación" required />
              <TextInput name="SAPCorreccion" label="SAP Correción" required />
            </div>

            <ResetForm isReset={resetForm} />

            <button className={`btn btn-primary ${styles.button}`} type="submit">
              {isUpdate ? 'Actualizar' : 'Guardar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormDocumentCorrection.defaultProps = {
  isUpdate: false,
  initialValues: null,
  resetForm: false,
};

FormDocumentCorrection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.any,
  isUpdate: PropTypes.bool,
  resetForm: PropTypes.bool,
};

export default FormDocumentCorrection;

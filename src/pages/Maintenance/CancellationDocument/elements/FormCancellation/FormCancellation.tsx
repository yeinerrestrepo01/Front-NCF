import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { ListCompany } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.constant';
import { ResetForm, SelectInput, TextInput } from 'components';
import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';
import { ValidationCancellation } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.constant';
import styles from './FormCancellation.module.scss';

interface FormCancellationProps {
  handleSubmit: (v: CancellationFetch) => void;
  initialValues?: CancellationFetch;
  isUpdate?: boolean;
  resetForm?: boolean;
}

const FormCancellation: React.FC<FormCancellationProps> = ({
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
        validationSchema={ValidationCancellation}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.formContent}>
              <SelectInput
                disabled={isUpdate}
                name="compania"
                label="Empresa"
                options={ListCompany}
                required
              />
              <TextInput disabled={isUpdate} name="tipoOrigen" label="Tipo Origen" required />
              <TextInput name="tipoCancelCliente" label="Tipo Cancelación Cliente" required />
              <TextInput name="tipoCancelInterComp" label="Tipo Cancelación InterCom" required />
              <TextInput name="sapCancelacion" label="SAP Cancelación" required />
              <TextInput name="inicio" label="Inicio" required />
              <TextInput name="interComCliente" label="InterCom Cliente" required />
              <TextInput name="interComCompania" label="InterCom Compañia" required />
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

FormCancellation.defaultProps = {
  isUpdate: false,
  initialValues: null,
  resetForm: false,
};

FormCancellation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.any,
  isUpdate: PropTypes.bool,
  resetForm: PropTypes.bool,
};

export default FormCancellation;

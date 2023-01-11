import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import {
  ListCompany,
  ValidationSettings,
} from 'pages/Maintenance/NFCSettings/constants/NFCSettings.constant';
import { CheckInput, DateInput, NumberInput, ResetForm, SelectInput, TextInput } from 'components';
import { SettingsNFC } from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import styles from './FormSettings.module.scss';

interface FormSettingsProps {
  handleSubmit: (v: SettingsNFC) => void;
  initialValues?: SettingsNFC;
  isUpdate?: boolean;
  resetForm?: boolean;
}

const FormSettings: React.FC<FormSettingsProps> = ({
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
        validationSchema={ValidationSettings}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.formContent}>
              <SelectInput
                disabled={isUpdate}
                name="cIdCompany"
                label="Empresa"
                options={ListCompany}
                required
              />
              <TextInput
                disabled={isUpdate}
                name="cIDTypeDocument"
                label="Tipo Documento"
                required
              />
              <TextInput name="prefix" label="Prefijo" required />
              <NumberInput name="lenth" label="Tamaño" required />
              <TextInput name="nNoAutorizacion" label="No. Autorización" required />
              <NumberInput name="nInicioAsignadoDGII" label="Inicio Asignado DGII" required />
              <NumberInput name="nLimiteAsignadoDGII" label="Limite Asignado DGII" required />
              <NumberInput name="nInicialAhora" label="Inicial Ahora" required />
              <NumberInput name="nIncrementoTipo" label="Incremento Tipo" required />
              <NumberInput name="nNoAvgDiario" label="No. Avg Diario" required />
              <DateInput name="fechaVencimiento" label="Fecha Vencimiento" required />
              <CheckInput name="activo" label="Activo" />
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

FormSettings.defaultProps = {
  isUpdate: false,
  initialValues: null,
  resetForm: false,
};

FormSettings.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.any,
  isUpdate: PropTypes.bool,
  resetForm: PropTypes.bool,
};

export default FormSettings;

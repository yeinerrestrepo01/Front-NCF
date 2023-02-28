import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import {
  CheckProfilesInitialVaues,
  SelectTranformData,
  ValidationCheckProfiles,
} from 'pages/Maintenance/CheckProfiles/constants/FormCheckProfiles.constant';
import { CheckProfilesFormItems } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { Button, SelectInput } from 'components';
import { useListUsers, useProfiles } from 'pages/Maintenance/CheckProfiles/services';
import { FormCheckProfilesSkeleton } from 'pages/Maintenance/CheckProfiles/elements';
import styles from './FormCheckProfiles.module.scss';

interface FormCheckProfilesProps {
  handleCheckProfiles: (v: CheckProfilesFormItems) => void;
}

const FormCheckProfiles: React.FC<FormCheckProfilesProps> = ({ handleCheckProfiles }) => {
  const { data: listUsers, isLoading: loadingUsers } = useListUsers();
  const { data: listProfiles, isLoading: loadingProfiles } = useProfiles();

  return (
    <>
      {loadingUsers || loadingProfiles ? (
        <FormCheckProfilesSkeleton />
      ) : (
        <Formik
          initialValues={CheckProfilesInitialVaues}
          onSubmit={handleCheckProfiles}
          validationSchema={ValidationCheckProfiles}
        >
          {() => (
            <Form className={styles.content}>
              <SelectInput
                label="Usuario"
                name="user"
                options={listUsers?.length > 0 ? SelectTranformData(listUsers) : []}
              />
              <SelectInput
                label="Perfil"
                name="profile"
                options={listProfiles?.length > 0 ? SelectTranformData(listProfiles) : []}
              />
              <Button type="submit" typeView="primary" title="Asignar" />
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

FormCheckProfiles.propTypes = {
  handleCheckProfiles: PropTypes.func.isRequired,
};

export default FormCheckProfiles;

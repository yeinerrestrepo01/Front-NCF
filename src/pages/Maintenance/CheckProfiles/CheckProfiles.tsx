import React from 'react';
import { FormCheckProfiles, TableAssignProfiles } from 'pages/Maintenance/CheckProfiles/elements';
import { CheckProfilesFormItems } from 'pages/Maintenance/CheckProfiles/constants/CheckProfiles.interface';
import { useAssignProfile, useListAssignProfiles } from 'pages/Maintenance/CheckProfiles/services';
import { BackDrop } from 'components';
import styles from './CheckProfiles.module.scss';

const CheckProfiles: React.FC = () => {
  const { mutate, isLoading } = useAssignProfile();
  const { data, isLoading: loadingAssign, refetch } = useListAssignProfiles();

  const handleCheckProfiles = (values: CheckProfilesFormItems) => {
    mutate(values, {
      onSuccess: (result) => {
        if (result.exitoso) {
          refetch();
        }
      },
    });
  };

  return (
    <div className={`container mt-4 ${styles.content}`}>
      <h3>Asignación de Perfiles</h3>
      <hr />
      <div className={styles.content_form}>
        <FormCheckProfiles handleCheckProfiles={handleCheckProfiles} />
        <div>
          <TableAssignProfiles data={data} loadingData={loadingAssign} />
        </div>
      </div>
      {isLoading && <BackDrop show />}
    </div>
  );
};

export default CheckProfiles;

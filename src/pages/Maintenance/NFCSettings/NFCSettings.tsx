import React, { useEffect, useState } from 'react';
import {
  FormSettings,
  FormSettingsSkeleton,
  TableSettings,
} from 'pages/Maintenance/NFCSettings/elements';
import {
  SettingsNFC,
  SettingsNFCFeth,
} from 'pages/Maintenance/NFCSettings/constants/NFCSettings.interface';
import {
  FormSettingsInitial,
  getDataSetingdSend,
} from 'pages/Maintenance/NFCSettings/constants/NFCSettings.constant';
import {
  useCreateSettings,
  useSettingsNFC,
  useUpdateSettings,
} from 'pages/Maintenance/NFCSettings/services';
import { BackDrop } from 'components';

const NFCSettings: React.FC = () => {
  const [resetForm, setResetForm] = useState<boolean>(false);
  const [loadingEdit, setLoadingEdit] = useState<boolean>(false);
  const [valuesEdit, setValuesEdit] = useState<SettingsNFCFeth>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate, isLoading } = useCreateSettings();
  const { mutate: updateSettings, isLoading: updateLoading } = useUpdateSettings();
  const { data, isLoading: loadigSettings, refetch } = useSettingsNFC();

  useEffect(() => {
    if (resetForm) {
      setTimeout(() => {
        setResetForm(false);
      }, 1000);
    }

    return () => {
      setResetForm(false);
    };
  }, [resetForm]);

  useEffect(() => {
    if (loadingEdit) {
      setTimeout(() => {
        setLoadingEdit(false);
      }, 100000);
    }

    return () => {
      setLoadingEdit(false);
    };
  }, [loadingEdit]);

  const handleCreate = (formValues: SettingsNFCFeth) => {
    mutate(formValues, {
      onSuccess: (res) => {
        if (res.estadoHttp === 200) {
          alert('Proceso realizado exitosamente.');
          setResetForm(true);
          refetch();
        } else {
          alert('No se pudo realizar la ejecucion del proceso exitosamente');
        }
      },
      onError: () => {
        alert('No se pudo realizar la ejecucion del proceso exitosamente');
      },
    });
  };

  const handleUpdate = (formValues: SettingsNFCFeth) => {
    updateSettings(formValues, {
      onSuccess: (res) => {
        if (res.estadoHttp === 200) {
          alert('Proceso realizado exitosamente.');
          setResetForm(true);
          setIsEdit(false);
          setValuesEdit(null);
          setLoadingEdit(true);
          refetch();
        } else {
          alert('No se pudo realizar la ejecucion del proceso exitosamente');
        }
      },
      onError: () => {
        alert('No se pudo realizar la ejecucion del proceso exitosamente');
      },
    });
  };

  const handleSubmit = (formValues: SettingsNFC) => {
    const dataSend = getDataSetingdSend(formValues);
    if (!isEdit) {
      handleCreate(dataSend);
    } else {
      handleUpdate(dataSend);
    }
  };

  const handleEdit = (valueEdit: SettingsNFCFeth) => {
    setValuesEdit(valueEdit);
    setIsEdit(true);
    setLoadingEdit(true);
  };

  return (
    <div className="container mt-4">
      <h3>Configuraci??n TipoNC F</h3>
      <br />
      {!loadingEdit ? (
        <FormSettings
          handleSubmit={handleSubmit}
          initialValues={FormSettingsInitial(valuesEdit)}
          resetForm={resetForm}
          isUpdate={isEdit}
        />
      ) : (
        <FormSettingsSkeleton />
      )}
      <br />
      <TableSettings data={data} handleEdit={(v) => handleEdit(v as SettingsNFCFeth)} />
      {(isLoading || loadigSettings || updateLoading) && <BackDrop show />}
    </div>
  );
};

export default NFCSettings;

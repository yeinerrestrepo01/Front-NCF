import React, { useEffect, useState } from 'react';
import {
  FormCancellation,
  FormCancellationSkeleton,
  TableCancellation,
} from 'pages/Maintenance/CancellationDocument/elements';
import { CancellationFetch } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.interface';
import { BackDrop } from 'components';
import {
  useCancellation,
  useCreateCancellation,
  useUpdateCancellation,
} from 'pages/Maintenance/CancellationDocument/services';
import { FormCancellationInitial } from 'pages/Maintenance/CancellationDocument/constants/CancellationDocument.constant';

const CancellationDocument: React.FC = () => {
  const [resetForm, setResetForm] = useState<boolean>(false);
  const [loadingEdit, setLoadingEdit] = useState<boolean>(false);
  const [valuesEdit, setValuesEdit] = useState<CancellationFetch>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate, isLoading } = useCreateCancellation();
  const { mutate: updateCancellation, isLoading: updateLoading } = useUpdateCancellation();
  const { data, isLoading: loadigSettings, refetch } = useCancellation();

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

  const handleCreate = (formValues: CancellationFetch) => {
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

  const handleUpdate = (formValues: CancellationFetch) => {
    updateCancellation(formValues, {
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

  const handleSubmit = (formValues: CancellationFetch) => {
    if (!isEdit) {
      handleCreate(formValues);
    } else {
      handleUpdate(formValues);
    }
  };

  const handleEdit = (valueEdit: CancellationFetch) => {
    setValuesEdit(valueEdit);
    setIsEdit(true);
    setLoadingEdit(true);
  };

  return (
    <div className="container mt-4">
      <h3>Anulación Documentos</h3>
      <br />
      {!loadingEdit ? (
        <FormCancellation
          handleSubmit={handleSubmit}
          initialValues={FormCancellationInitial(valuesEdit)}
          resetForm={resetForm}
          isUpdate={isEdit}
        />
      ) : (
        <FormCancellationSkeleton />
      )}
      <br />
      <TableCancellation data={data} handleEdit={(v) => handleEdit(v as CancellationFetch)} />
      {(isLoading || loadigSettings || updateLoading) && <BackDrop show />}
    </div>
  );
};

export default CancellationDocument;

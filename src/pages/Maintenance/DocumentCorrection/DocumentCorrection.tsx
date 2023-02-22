import React, { useEffect, useState } from 'react';
import { DocumentCorrectionFetch } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.interface';
import {
  FormDocumentCorrection,
  FormDocumentCorrectionSkeleton,
  TableDocumentCorrection,
} from 'pages/Maintenance/DocumentCorrection/elements';
import { FormCorrectionInitial } from 'pages/Maintenance/DocumentCorrection/constants/DocumentCorrection.constant';
import { BackDrop } from 'components';
import {
  useCreateDocumentCorrection,
  useDocumentCorrection,
  useUpdateCancellation,
} from 'pages/Maintenance/DocumentCorrection/services';
import { useModalAlert } from 'global/hooks';

const DocumentCorrection: React.FC = () => {
  const { openModalAlert } = useModalAlert();
  const [resetForm, setResetForm] = useState<boolean>(false);
  const [loadingEdit, setLoadingEdit] = useState<boolean>(false);
  const [valuesEdit, setValuesEdit] = useState<DocumentCorrectionFetch>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate, isLoading } = useCreateDocumentCorrection();
  const { mutate: updateCancellation, isLoading: updateLoading } = useUpdateCancellation();
  const { data, isLoading: loadigSettings, refetch } = useDocumentCorrection();

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

  const handleCreate = (formValues: DocumentCorrectionFetch) => {
    mutate(formValues, {
      onSuccess: (res) => {
        if (res.estadoHttp === 200) {
          openModalAlert(res.mensaje);
          setResetForm(true);
          refetch();
        } else {
          openModalAlert('No se pudo realizar la ejecucion del proceso exitosamente');
        }
      },
      onError: () => {
        openModalAlert('No se pudo realizar la ejecucion del proceso exitosamente');
      },
    });
  };

  const handleUpdate = (formValues: DocumentCorrectionFetch) => {
    updateCancellation(formValues, {
      onSuccess: (res) => {
        if (res.estadoHttp === 200) {
          openModalAlert(res.mensaje);
          setResetForm(true);
          setIsEdit(false);
          setValuesEdit(null);
          setLoadingEdit(true);
          refetch();
        } else {
          openModalAlert('No se pudo realizar la ejecucion del proceso exitosamente');
        }
      },
      onError: () => {
        openModalAlert('No se pudo realizar la ejecucion del proceso exitosamente');
      },
    });
  };

  const handleSubmit = (formValues: DocumentCorrectionFetch) => {
    if (!isEdit) {
      handleCreate(formValues);
    } else {
      handleUpdate(formValues);
    }
  };

  const handleEdit = (valueEdit: DocumentCorrectionFetch) => {
    setValuesEdit(valueEdit);
    setIsEdit(true);
    setLoadingEdit(true);
  };

  return (
    <div className="container mt-4">
      <h3>Correción Documentos</h3>
      <br />
      {!loadingEdit ? (
        <FormDocumentCorrection
          handleSubmit={handleSubmit}
          initialValues={FormCorrectionInitial(valuesEdit)}
          resetForm={resetForm}
          isUpdate={isEdit}
        />
      ) : (
        <FormDocumentCorrectionSkeleton />
      )}
      <br />
      <TableDocumentCorrection
        data={data}
        handleEdit={(v) => handleEdit(v as DocumentCorrectionFetch)}
      />
      {(isLoading || loadigSettings || updateLoading) && <BackDrop show />}
    </div>
  );
};

export default DocumentCorrection;

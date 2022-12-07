import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';

interface ResetFormProps {
  isReset: boolean;
}

const ResetForm: React.FC<ResetFormProps> = ({ isReset }) => {
  const formik = useFormikContext();

  useEffect(() => {
    if (isReset && formik.dirty) {
      formik.resetForm();
    }
  }, [formik, isReset]);

  return <></>;
};

export default ResetForm;

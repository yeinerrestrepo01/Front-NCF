import React from 'react';
import PropTypes from 'prop-types';
import { Button, DateInput } from 'components';
import { Form, Formik } from 'formik';
import { InifialFormReports, ValidationReport } from 'pages/ReportsPage/constants/Report.constant';
import { ReporFormType } from 'pages/ReportsPage/constants/Report.interface';
import styles from './ReportForm.module.scss';

interface ReportFormProps {
  handleReport: (v: ReporFormType) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ handleReport }) => {
  return (
    <div>
      <Formik
        initialValues={InifialFormReports}
        onSubmit={handleReport}
        validationSchema={ValidationReport}
      >
        {() => (
          <Form className={styles.form}>
            <DateInput name="dateInitial" label="Fecha Inicial" />
            <DateInput name="dateEnd" label="Fecha Final" />
            <Button typeView="primary" title="Consultar" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

ReportForm.propTypes = {
  handleReport: PropTypes.func.isRequired,
};

export default ReportForm;

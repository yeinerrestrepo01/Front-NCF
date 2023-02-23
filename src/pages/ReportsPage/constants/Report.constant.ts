import { ReporFormType } from 'pages/ReportsPage/constants/Report.interface';
import * as Yup from 'yup';

export const InifialFormReports: ReporFormType = {
  dateInitial: '',
  dateEnd: '',
};

export const ValidationReport = Yup.object({
  dateInitial: Yup.string().required('Campo Obligatorio'),
  dateEnd: Yup.string().required('Campo Obligatorio'),
});

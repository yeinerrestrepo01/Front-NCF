import { ReporFormType, ReportNFC } from 'pages/ReportsPage/constants/Report.interface';
import axios from 'axios';
import { UseMutationResult, useMutation } from 'react-query';

const getReports = async (params: ReporFormType) => {
  const data = await axios.post<ReportNFC[]>('Reportes', {
    fechInicio: params.dateInitial,
    fechaFin: params.dateEnd,
  });

  return data?.data;
};

export default function useReports(): UseMutationResult<ReportNFC[], Error, ReporFormType, Error> {
  return useMutation(getReports);
}

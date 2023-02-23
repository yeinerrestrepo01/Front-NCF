import React, { useState } from 'react';
import { ReportForm, TableReport } from 'pages/ReportsPage/elements';
import { ReporFormType, ReportNFC } from 'pages/ReportsPage/constants/Report.interface';
import { useReports } from 'pages/ReportsPage/services';
import { BackDrop } from 'components';
import styles from './ReportsPage.module.scss';

const ReportsPage: React.FC = () => {
  const [listReports, setListReports] = useState<ReportNFC[]>([]);
  const { mutate, isLoading } = useReports();

  const handleReport = (formValues: ReporFormType) => {
    setListReports([]);
    const dateStart = new Date(formValues.dateInitial);
    const dateEnd = new Date(formValues.dateEnd);

    mutate(
      {
        dateEnd: `${dateEnd.getFullYear()}-${
          dateEnd.getMonth() + 1 < 10 ? '0' + (dateEnd.getMonth() + 1) : dateEnd.getMonth() + 1
        }-${dateEnd.getDate() < 10 ? '0' + dateEnd.getDate() : dateEnd.getDate()}`,
        dateInitial: `${dateStart.getFullYear()}-${
          dateStart.getMonth() + 1 < 10
            ? '0' + (dateStart.getMonth() + 1)
            : dateStart.getMonth() + 1
        }-${dateStart.getDate() < 10 ? '0' + dateStart.getDate() : dateStart.getDate()}`,
      },
      {
        onSuccess: (resp) => {
          if (!!resp) {
            setListReports(resp);
          }
        },
      }
    );
  };

  return (
    <div className={`container mt-4 ${styles.content}`}>
      <h3>Reportes</h3>
      <ReportForm handleReport={handleReport} />
      {listReports.length > 0 && <TableReport data={listReports} />}
      {isLoading && <BackDrop show />}
    </div>
  );
};

export default ReportsPage;

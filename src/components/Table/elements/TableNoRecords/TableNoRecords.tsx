import React from 'react';
import PropTypes from 'prop-types';
import { NoData } from '..';
import styles from './TableNoRecords.module.scss';

interface TableNoRecordsProps {
  /**
   * Number of columns to collapse
   */
  colNumber: number;
}

const TableNoRecords: React.FC<TableNoRecordsProps> = ({ colNumber }) => {
  return (
    <table className={styles['table-noData']}>
      <colgroup>
        {Array(colNumber)
          .fill('skeleton')
          .map((el, index) => (
            <col key={`${el}-${index + 1}`} />
          ))}
      </colgroup>
      <tbody>
        <tr className={styles.containerNoData}>
          <td colSpan={colNumber}>
            <NoData />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TableNoRecords.propTypes = {
  colNumber: PropTypes.number.isRequired,
};

export default TableNoRecords;

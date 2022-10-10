import React from 'react';
import PropTypes from 'prop-types';
import NoData from 'components/NoData/NoData';
import styles from './TableNoRecords.module.scss';

interface TableNoRecordsProps {
  /**
   * Number of columns to collapse
   */
  colNumber: number;
}

const TableNoRecords: React.FC<TableNoRecordsProps> = ({ colNumber }) => {
  return (
    <tr className={styles.containerNoData}>
      <td colSpan={colNumber}>
        <NoData />
      </td>
    </tr>
  );
};

TableNoRecords.propTypes = {
  colNumber: PropTypes.number.isRequired,
};

export default TableNoRecords;

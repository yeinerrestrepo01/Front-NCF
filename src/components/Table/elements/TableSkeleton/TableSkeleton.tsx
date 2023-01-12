import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '../../..';
import styles from 'components/Table/elements/TableBody/TableBody.module.scss';

interface TableSkeletonProps {
  /**
   * Number of columns to collapse
   */
  colNumber: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ colNumber }) => {
  return (
    <div className={styles.tableContaint}>
      <div className={styles['tableContaint-content']}>
        <div className={styles.grid}>
          <table className={styles['grid-table']}>
            <colgroup>
              {Array(colNumber)
                .fill('skeleton')
                .map((el, index) => (
                  <col key={`col_${index}`} />
                ))}
            </colgroup>
            <tbody role="presentation">
              {
                <tr>
                  <td colSpan={colNumber}>
                    <Skeleton count={10} height={40} />
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

TableSkeleton.propTypes = {
  colNumber: PropTypes.number.isRequired,
};

export default TableSkeleton;

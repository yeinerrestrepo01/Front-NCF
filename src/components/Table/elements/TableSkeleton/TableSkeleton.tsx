import Skeleton from 'components/Skeleton/Skeleton';
import React from 'react';
import PropTypes from 'prop-types';

interface TableSkeletonProps {
  /**
   * Number of columns to collapse
   */
  colNumber: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ colNumber }) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colNumber}>
          <Skeleton count={10} height={40} />
        </td>
      </tr>
    </tbody>
  );
};

TableSkeleton.propTypes = {
  colNumber: PropTypes.number.isRequired,
};

export default TableSkeleton;

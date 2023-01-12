import React from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps } from '../../types/Colmuns.interface';

type TableColumnProps = ColumnsProps;

/**
 * @hidden
 */

const TableColumn: React.FC<TableColumnProps> = ({ field, headerClassName, title, width }) => {
  return (
    <>
      <th className={headerClassName} key={`th_${field}`} style={{ width: width }} title={title}>
        {title}
      </th>
    </>
  );
};

TableColumn.defaultProps = {
  className: null,
  field: null,
  headerClassName: null,
  id: null,
  locked: false,
  orderIndex: null,
  resizable: false,
  title: '',
  width: null,
};

TableColumn.propTypes = {
  className: PropTypes.string,
  field: PropTypes.string,
  headerClassName: PropTypes.string,
  id: PropTypes.string,
  locked: PropTypes.bool,
  orderIndex: PropTypes.number,
  resizable: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.any,
};

export default TableColumn;

import React from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps } from 'components/Table/constants/Table.interface';

type TableColumnProps = ColumnsProps;

const TableColumn: React.FC<TableColumnProps> = ({ field, headerClassName, title, width }) => {
  return (
    <>
      <th className={headerClassName} key={`th_${field}`} style={{ width: width }}>
        {title}
      </th>
    </>
  );
};

TableColumn.defaultProps = {
  className: null,
  field: null,
  format: null,
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
  format: PropTypes.string,
  headerClassName: PropTypes.string,
  id: PropTypes.string,
  locked: PropTypes.bool,
  orderIndex: PropTypes.number,
  resizable: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.any,
};

export default TableColumn;

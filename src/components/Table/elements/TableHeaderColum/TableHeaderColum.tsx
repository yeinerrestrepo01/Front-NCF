import React from 'react';
import PropTypes from 'prop-types';
import { RowOrder, TableSortChangeEvent } from '../../types/Sortable.interface';
import { ColumnsProps } from '../../types/Colmuns.interface';
import { ArrowDown, ArrowUp } from 'assets/icons/icons';
import styles from './TableHeaderColum.module.scss';

interface TableHeaderColumProps extends ColumnsProps {
  handleRowOrder?: (o: TableSortChangeEvent) => void;
  rowOrder?: RowOrder;
  sortable?: boolean;
}

const TableHeaderColum: React.FC<TableHeaderColumProps> = ({
  field,
  handleRowOrder,
  headerClassName,
  rowOrder,
  sortable,
  title,
  width,
}) => {
  const handleClickHeader = (event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
    if (sortable) {
      const newDir =
        rowOrder?.field === field
          ? rowOrder?.dir === 'default' || !rowOrder?.dir
            ? 'desc'
            : rowOrder?.dir === 'desc'
            ? 'asc'
            : 'default'
          : 'desc';
      if (!!handleRowOrder && typeof handleRowOrder === 'function') {
        handleRowOrder({
          nativeEvent: event.nativeEvent,
          sort: { dir: newDir, field },
          syntheticEvent: undefined,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          target: event.target as any,
        });
      }
    }
  };

  return (
    <th
      className={`${headerClassName} ${sortable ? styles['theader-sortable'] : ''}`}
      key={`th_${field}`}
      onClick={(e) => handleClickHeader(e)}
      style={{ width: width }}
      title={title}
    >
      <span>{title}</span>
      {sortable && rowOrder?.field === field && rowOrder?.dir === 'asc' ? (
        <ArrowUp />
      ) : sortable && rowOrder?.field === field && rowOrder?.dir === 'desc' ? (
        <ArrowDown />
      ) : (
        ''
      )}
    </th>
  );
};

TableHeaderColum.defaultProps = {
  className: null,
  field: null,
  handleRowOrder: null,
  headerClassName: null,
  id: null,
  locked: false,
  orderIndex: null,
  resizable: false,
  sortable: false,
  title: '',
  width: null,
};

TableHeaderColum.propTypes = {
  className: PropTypes.string,
  field: PropTypes.string,
  handleRowOrder: PropTypes.func,
  headerClassName: PropTypes.string,
  id: PropTypes.string,
  locked: PropTypes.bool,
  orderIndex: PropTypes.number,
  resizable: PropTypes.bool,
  sortable: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.any,
};

export default TableHeaderColum;

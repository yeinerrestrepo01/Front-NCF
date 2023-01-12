import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColum } from '..';
import { RowOrder, TableSortChangeEvent } from '../../types/Sortable.interface';
import { ColumnsProps } from '../../types/Colmuns.interface';
import styles from './TableHeader.module.scss';

interface TableHeaderProps {
  /**
   * Components properties Header Table
   */
  children?: React.ReactElement<ColumnsProps> | React.ReactElement<ColumnsProps>[];
  /**
   * Sets a class of the Header Table.
   */
  className?: string;
  /**
   * H
   */
  handleRowOrder?: (o: TableSortChangeEvent) => void;
  rowOrder?: RowOrder;
  /**
   * Enable column sorting
   */
  sortable?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className,
  handleRowOrder,
  rowOrder,
  sortable,
}) => {
  const colGroup: ReactElement[] = [];

  const renderTheader = () => {
    const columns: unknown[] = [];

    React.Children.forEach(children, (ch: React.ReactElement<ColumnsProps>, index) => {
      if (ch.props.field) {
        columns.push(
          sortable ? (
            <TableHeaderColum
              handleRowOrder={handleRowOrder}
              key={`th_${index}`}
              rowOrder={rowOrder}
              sortable={sortable}
              {...ch.props}
            />
          ) : (
            ch
          )
        );
        colGroup.push(<col key={`col_${index}`} width={ch.props.width} />);
      }
    });

    return columns.length > 0 ? columns : <div />;
  };

  return (
    <div className={styles.tableHeader}>
      <div className={styles['tableHeader-wrap']}>
        <table role="presentation">
          <colgroup>{colGroup}</colgroup>
          <thead className={className}>
            <tr role="row">
              <>{renderTheader()}</>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

TableHeader.defaultProps = {
  children: null,
  className: null,
  handleRowOrder: null,
  rowOrder: null,
  sortable: false,
};

TableHeader.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  handleRowOrder: PropTypes.func,
  rowOrder: PropTypes.any,
  sortable: PropTypes.bool,
};

export default TableHeader;

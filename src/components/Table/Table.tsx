import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataResult, TableProps } from './types/Table.interface';
import { Pager, TableBody, TableHeader, TableNoRecords, TableSkeleton } from './elements';
import { RowOrder, TableSortChangeEvent } from './types/Sortable.interface';
import { useOrderBy } from '../../global/hooks';
import { ColumnsProps } from './types/Colmuns.interface';
import useCellInputs from '../../global/hooks/useCellInputs';
import styles from './Table.module.scss';

/**
 * Represents the Table Component.
 *
 * @example
 * ```jsx
 * class App extends React.Component {
 *    constructor(props) {
 *        super(props);
 *        this.state = {
 *            data: [
 *                { 'foo': 'A1', 'bar': 'B1' },
 *                { 'foo': 'A2', 'bar': 'B2' },
 *                { 'foo': 'A3', 'bar': 'B2' }
 *            ]
 *        };
 *    }
 *    render() {
 *        return (
 *            <Table
 *                data={this.state.data}
 *                reorderable={true}
 *            >
 *                <TableColumn field="foo" />
 *                <TableColumn field="bar" />
 *            </Grid>
 *        );
 *    }
 * }
 * ReactDOM.render(<App />, document.querySelector('my-app'));
 * ```
 */
const Table: React.FC<TableProps> = ({
  children,
  className,
  data,
  editName,
  isSelectRow,
  loadingData,
  onItemRowChangue,
  onPageChange,
  onSortChange,
  onRowClick,
  skip,
  sortable,
  style,
  take,
  theadClassName,
  total,
}) => {
  const [listColTable, setListColTable] = useState<JSX.Element[]>([]);
  const [loadingFilter, setLoadingFilter] = useState<boolean>(false);
  const [listData, setListData] = useState<unknown[]>([]);
  const [columnsCount, setColumnsCount] = useState<number>(0);
  const [dataFilter, setDataFilter] = useState<unknown[] | DataResult>([]);
  const [skipTable, setSkipTable] = useState(skip);
  const [rowOrder, setRowOrder] = useState<RowOrder>(null);
  const [cellInput, getCellTable] = useCellInputs();
  const [handleOrderBy] = useOrderBy();

  useEffect(() => {
    if (!!(data as DataResult)?.data) {
      setListData([...(data as DataResult)?.data]);
    } else {
      setListData([...(data as unknown[])]);
    }
  }, [data]);

  useEffect(() => {
    if (take) {
      const contLimit = skipTable * take + take;

      setDataFilter(
        (listData as unknown[]).slice(skipTable * take, contLimit > total ? total : contLimit)
      );
    } else {
      setDataFilter(listData);
    }
  }, [listData, skipTable, take, total]);

  useEffect(() => {
    setColumnsCount(React.Children.count(children));

    return () => {
      setColumnsCount(0);
    };
  }, [children]);

  const getCellEdit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (dataField: any, reg: ColumnsProps) => {
      if (reg.typeInput) {
        return (
          <td
            className={`${reg.className} ${styles['cell-input']}`}
            key={`td_${reg.field}`}
            role="gridcell"
          >
            {cellInput(dataField, reg, onItemRowChangue)}
          </td>
        );
      } else {
        return getCellTable(dataField, reg);
      }
    },
    [cellInput, getCellTable, onItemRowChangue]
  );

  const getData = useCallback(
    (dataField: unknown) => {
      const columns: ColumnsProps[] = [];
      const listCol: JSX.Element[] = [];
      if (dataField) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.Children.forEach(children, (ch: any) => {
          if (ch.props.field) {
            columns.push(ch.props);
          }
        });

        columns.map((reg) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((dataField as any)[editName]) {
            listCol.push(getCellEdit(dataField, reg));
          } else {
            listCol.push(getCellTable(dataField, reg));
          }
        });
      }
      return listCol;
    },
    [children, editName, getCellEdit, getCellTable]
  );

  const renderBody = useCallback(() => {
    const items: JSX.Element[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (dataFilter as any[]).map((item, index) => {
      items.push(
        <tr
          className={`${styles['row-table']} ${
            item?.select && isSelectRow ? styles['select-row'] : ''
          }`}
          onClick={() => !!onRowClick && onRowClick({ dataItem: item })}
          role="row"
          key={`col_${index + 1}`}
        >
          {getData(item)}
        </tr>
      );
    });
    setListColTable(items);
  }, [dataFilter, getData, isSelectRow, onRowClick]);

  useEffect(() => {
    if (!!data) {
      renderBody();
    }

    return () => {
      setListColTable([]);
    };
  }, [data, renderBody]);

  const handlePage = (page: number) => {
    if (typeof onPageChange === 'function') {
      onPageChange({
        page: {
          skip: page,
          take,
        },
      });
    }
    setSkipTable(page);
  };

  const handleRowOrder = (order: TableSortChangeEvent) => {
    if (!!onSortChange && typeof onSortChange === 'function') {
      onSortChange(order);
    }
    setListData([]);
    setRowOrder(order.sort);
    setLoadingFilter(true);
    setTimeout(() => {
      const list = handleOrderBy(
        !!(data as DataResult)?.data ? [...(data as DataResult)?.data] : [...(data as unknown[])],
        order.sort
      );
      setListData(list);
      setLoadingFilter(false);
    }, 500);
  };

  return (
    <div className={`${styles['table-ui']} ${className || ''}`} style={style}>
      <TableHeader
        className={theadClassName}
        handleRowOrder={handleRowOrder}
        rowOrder={rowOrder}
        sortable={sortable}
      >
        {children}
      </TableHeader>
      {(loadingData || loadingFilter) && <TableSkeleton colNumber={columnsCount} />}
      {listColTable.length > 0 && !loadingData && !loadingFilter ? (
        <>
          <TableBody data={listColTable} />
          {take && (
            <Pager handleSelectPage={handlePage} skip={skipTable} take={take} total={total} />
          )}
        </>
      ) : (
        !loadingData && !loadingFilter && <TableNoRecords colNumber={columnsCount} />
      )}
    </div>
  );
};

Table.defaultProps = {
  className: null,
  data: null,
  editName: null,
  isSelectRow: false,
  loadingData: false,
  onItemRowChangue: null,
  onPageChange: null,
  onSortChange: null,
  onRowClick: null,
  theadClassName: null,
  skip: null,
  style: null,
  take: null,
  total: null,
};

Table.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  data: PropTypes.any,
  editName: PropTypes.any,
  isSelectRow: PropTypes.bool,
  loadingData: PropTypes.bool,
  onItemRowChangue: PropTypes.func,
  onPageChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onRowClick: PropTypes.func,
  theadClassName: PropTypes.string,
  skip: PropTypes.number,
  style: PropTypes.any,
  take: PropTypes.number,
  total: PropTypes.number,
};

export default Table;

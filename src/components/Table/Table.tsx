import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps, DataResult } from './constants/Table.interface';
import { TableBody, TableHeader, TableNoRecords, TableSkeleton } from 'components/Table/elements';
import styles from './Table.module.scss';

interface TableProps {
  /**
   * Components properties Table
   */
  children:
    | React.FC<ColumnsProps>
    | React.FC<ColumnsProps>[]
    | React.ReactElement<ColumnsProps>
    | React.ReactElement<ColumnsProps>[];
  /**
   * Sets a class of the Table DOM element.
   */
  className?: string;
  /**
   * Sets the data of the Table ([see example]({% slug paging_Table %})). If you use paging, the `data` option has to contain only the items for the current page.
   */
  data?: unknown[] | DataResult | null;
  /**
   * Show selected columns
   */
  isSelectRow?: boolean;
  /**
   * Shows the loading of the data in the table
   */
  loadingData?: boolean;
  /**
   * Fires when the user clicks a row.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (i: any) => void;
}

/**
 * Represents the [Table component]({% slug overview_grid %}).
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
  isSelectRow,
  loadingData,
  onRowClick,
}) => {
  const [listColTable, setListColTable] = useState<JSX.Element[]>([]);
  const [columnsCount, setColumnsCount] = useState<number>(0);

  useEffect(() => {
    setColumnsCount(React.Children.count(children));

    return () => {
      setColumnsCount(0);
    };
  }, [children]);

  const getTdata = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (dataField: any) => {
      const columns: ColumnsProps[] = [];
      const listCol: JSX.Element[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      React.Children.forEach(children, (ch: any) => {
        if (ch.props.field) {
          columns.push(ch.props);
        }
      });

      columns.map((reg) => {
        listCol.push(
          <td className={reg.className} key={`td_${reg.field}`}>
            {!!reg.cell ? (
              <reg.cell dataItem={dataField} field={reg.field} />
            ) : (
              dataField[reg.field]
            )}
          </td>
        );
      });
      return listCol;
    },
    [children]
  );

  const renderBody = useCallback(() => {
    const items: JSX.Element[] = [];
    if (!!(data as DataResult)?.data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data as DataResult).data.map((item: any, index) => {
        items.push(
          <tr
            className={`${styles['row-table']} ${
              item.select && isSelectRow ? styles['select-row'] : ''
            }`}
            onClick={() => !!onRowClick && onRowClick(item)}
            key={`col_${index + 1}`}
          >
            {getTdata(item)}
          </tr>
        );
      });
      setListColTable(items);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data as unknown[]).map((item: any, index) => {
        items.push(
          <tr
            className={`${styles['row-table']} ${
              item.select && isSelectRow ? styles['select-row'] : ''
            }`}
            onClick={() => !!onRowClick && onRowClick(item)}
            key={`col_${index + 1}`}
          >
            {getTdata(item)}
          </tr>
        );
      });
      setListColTable(items);
    }
  }, [data, getTdata, isSelectRow, onRowClick]);

  useEffect(() => {
    if (!!data) {
      renderBody();
    }

    return () => {
      setListColTable([]);
    };
  }, [data, renderBody]);

  return (
    <>
      <table className={`${styles.table} ${className}`}>
        <TableHeader>{children}</TableHeader>
        {loadingData && <TableSkeleton colNumber={columnsCount} />}
        {listColTable.length > 0 && !loadingData ? (
          <TableBody data={listColTable} />
        ) : (
          !loadingData && <TableNoRecords colNumber={columnsCount} />
        )}
      </table>
    </>
  );
};

Table.defaultProps = {
  className: null,
  data: null,
  isSelectRow: false,
  loadingData: false,
  onRowClick: null,
};

Table.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  data: PropTypes.any,
  isSelectRow: PropTypes.bool,
  loadingData: PropTypes.bool,
  onRowClick: PropTypes.func,
};

export default Table;

import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps, DataResult, TableProps } from 'components/Table/constants/Table.interface';
import {
  CellNumberInput,
  TableBody,
  TableHeader,
  TableNoRecords,
  TableSkeleton,
} from 'components/Table/elements';
import styles from './Table.module.scss';

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
  editName,
  isSelectRow,
  loadingData,
  onRowClick,
  onItemRowChangue,
}) => {
  const [listColTable, setListColTable] = useState<JSX.Element[]>([]);
  const [columnsCount, setColumnsCount] = useState<number>(0);

  useEffect(() => {
    setColumnsCount(React.Children.count(children));

    return () => {
      setColumnsCount(0);
    };
  }, [children]);

  const cellInput = useCallback(
    (dataField: unknown, col: ColumnsProps) => {
      switch (col.typeInput) {
        case 'number':
          return <CellNumberInput column={col} data={dataField} onChange={onItemRowChangue} />;
        default:
          return null;
      }
    },
    [onItemRowChangue]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getCellTable = useCallback((dataField: any, reg: ColumnsProps) => {
    return (
      <td className={reg.className} key={`td_${reg.field}`}>
        {!!reg.cell ? <reg.cell dataItem={dataField} field={reg.field} /> : dataField[reg.field]}
      </td>
    );
  }, []);

  const getCellEdit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (dataField: any, reg: ColumnsProps) => {
      if (reg.typeInput) {
        return (
          <td className={reg.className} key={`td_${reg.field}`}>
            {cellInput(dataField, reg)}
          </td>
        );
      } else {
        return getCellTable(dataField, reg);
      }
    },
    [cellInput, getCellTable]
  );

  const getTdata = useCallback(
    (dataField: unknown) => {
      const columns: ColumnsProps[] = [];
      const listCol: JSX.Element[] = [];

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
      return listCol;
    },
    [children, editName, getCellEdit, getCellTable]
  );

  const renderBody = useCallback(() => {
    const items: JSX.Element[] = [];
    let valuesData = null;
    if (!!(data as DataResult)?.data) {
      valuesData = (data as DataResult).data;
    } else {
      valuesData = data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (valuesData as any[]).map((item, index) => {
      items.push(
        <tr
          className={`${styles['row-table']} ${
            item.select && isSelectRow ? styles['select-row'] : ''
          }`}
          onClick={() => !!onRowClick && onRowClick({ dataItem: item })}
          key={`col_${index + 1}`}
        >
          {getTdata(item)}
        </tr>
      );
    });
    setListColTable(items);
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
  onItemRowChangue: null,
  onRowClick: null,
};

Table.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  data: PropTypes.any,
  isSelectRow: PropTypes.bool,
  loadingData: PropTypes.bool,
  onItemRowChangue: PropTypes.func,
  onRowClick: PropTypes.func,
};

export default Table;

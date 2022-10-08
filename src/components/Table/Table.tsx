import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps, DataResult } from './constants/Table.interface';
import { TableBody, TableHeader } from 'components/Table/elements';
import styles from './Table.module.scss';

interface TableProps {
  children?:
    | React.FC<ColumnsProps>
    | React.FC<ColumnsProps>[]
    | React.ReactElement<ColumnsProps>
    | React.ReactElement<ColumnsProps>[];
  className?: string;
  data?: unknown[] | DataResult | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (i: any) => void;
}

const Table: React.FC<TableProps> = ({ children, className, data, onRowClick }) => {
  const [listColTable, setListColTable] = useState<JSX.Element[]>([]);

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
      (data as DataResult).data.map((item, index) => {
        items.push(
          <tr onClick={() => onRowClick(item)} key={`col_${index + 1}`}>
            {getTdata(item)}
          </tr>
        );
      });
      setListColTable(items);
    } else {
      (data as unknown[]).map((item, index) => {
        items.push(
          <tr onClick={() => onRowClick(item)} key={`col_${index + 1}`}>
            {getTdata(item)}
          </tr>
        );
      });
      setListColTable(items);
    }
  }, [data, getTdata, onRowClick]);

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
        <TableBody data={listColTable} />
      </table>
    </>
  );
};

Table.defaultProps = {
  children: null,
  className: null,
  data: null,
  onRowClick: null,
};

Table.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  data: PropTypes.any,
  onRowClick: PropTypes.func,
};

export default Table;

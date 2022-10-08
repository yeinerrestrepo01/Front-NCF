import React from 'react';
import PropTypes from 'prop-types';
import { ColumnsProps } from 'components/Table/constants/Table.interface';

interface TableHeaderProps {
  children?:
    | React.FC<ColumnsProps>
    | React.FC<ColumnsProps>[]
    | React.ReactElement<ColumnsProps>
    | React.ReactElement<ColumnsProps>[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  const renderTheader = () => {
    const columns: unknown[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.Children.forEach(children, (ch: any) => {
      if (ch.props.field) {
        columns.push(ch);
      }
    });

    return columns.length > 0 ? columns : <div />;
  };

  return (
    <>
      <thead className="thead-dark">
        <tr>
          <>{renderTheader()}</>
        </tr>
      </thead>
    </>
  );
};

TableHeader.defaultProps = {
  children: null,
};

TableHeader.propTypes = {
  children: PropTypes.array,
};

export default TableHeader;

import React from 'react';

interface TableBodyProps {
  data?: JSX.Element[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <>
      <tbody>{data}</tbody>
    </>
  );
};

export default TableBody;

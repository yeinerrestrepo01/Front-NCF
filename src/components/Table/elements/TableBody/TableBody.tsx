import React from 'react';

interface TableBodyProps {
  /**
   * Sets the data of the Table. If you use paging, the `data` option has to contain only the items for the current page.
   */
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

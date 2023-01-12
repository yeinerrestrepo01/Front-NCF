import React from 'react';
import styles from './TableBody.module.scss';

interface TableBodyProps {
  /**
   * Sets the data of the Table. If you use paging, the `data` option has to contain only the items for the current page.
   */
  data?: JSX.Element[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  const handleColGroup = () => {
    return React.Children.map(data[0].props.children, (ch, index) => {
      return <col key={`col_${index}`} width={ch.props.width} />;
    });
  };

  return (
    <div className={styles.tableContaint}>
      <div className={styles['tableContaint-content']}>
        <div className={styles.grid}>
          <table className={styles['grid-table']}>
            <colgroup>{handleColGroup()}</colgroup>
            <tbody role="presentation">{data}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableBody;

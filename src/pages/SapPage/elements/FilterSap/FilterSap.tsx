import React from 'react';
import PropTypes from 'prop-types';
import { FilterSapEnum } from 'pages/SapPage/constants/Sap.interface';
import styles from './FilterSap.module.scss';

interface FilterSapProps {
  name: string;
  filter?: FilterSapEnum[];
  setFilter: (f: FilterSapEnum) => void;
}

const FilterSap: React.FC<FilterSapProps> = ({ name, filter, setFilter }) => {
  return (
    <div className={styles.content}>
      <span>Filtrar por:</span>
      <div className={styles.checks}>
        <label htmlFor={`chkSuccessful_${name}`}>Exitosos</label>
        <input
          checked={filter?.includes(FilterSapEnum.Successful)}
          id={`chkSuccessful_${name}`}
          name={`chkSuccessful_${name}`}
          onChange={() => setFilter(FilterSapEnum.Successful)}
          type="checkbox"
        />
      </div>
      <div className={styles.checks}>
        <label htmlFor={`chkMistakes_${name}`}>Errores</label>
        <input
          checked={filter?.includes(FilterSapEnum.Mistakes)}
          id={`chkMistakes_${name}`}
          name={`chkMistakes_${name}`}
          onChange={() => setFilter(FilterSapEnum.Mistakes)}
          type="checkbox"
        />
      </div>
    </div>
  );
};

FilterSap.defaultProps = {
  filter: [],
};

FilterSap.propTypes = {
  filter: PropTypes.array,
  name: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterSap;

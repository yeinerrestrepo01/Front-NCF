import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Page } from '../../types/Pager.interface';
import styles from './Pager.module.scss';

interface PagerProps extends Page {
  handleSelectPage: (p: number) => void;
  total: number;
}

const Pager: React.FC<PagerProps> = ({ handleSelectPage, skip, take, total }) => {
  const totalPagesForView = 5;
  const totalPages = Math.ceil(total / take);
  const contLimit = skip * take + take;
  const [valueTake, setValueTake] = useState<number>(null);
  const [groupPages, setGroupPages] = useState<number>(totalPagesForView);
  const [initialGroup, setInitialGroup] = useState<number>(0);
  const [setNewGroups, setSetNewGroups] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (take !== valueTake) {
      setValueTake(take);
      handleSelectPage(0);
      setGroupPages(totalPagesForView);
      setInitialGroup(0);
    }
  }, [handleSelectPage, take, valueTake]);

  const handleViewGroupPages = useCallback(() => {
    setInitialGroup(groupPages);
    setGroupPages(
      groupPages + totalPagesForView > totalPages ? totalPages : groupPages + totalPagesForView
    );
  }, [groupPages, totalPages]);

  const handlePreViewGroupPages = useCallback(() => {
    const initialValue =
      initialGroup - totalPagesForView < 0 ? 0 : initialGroup - totalPagesForView;
    setInitialGroup(initialValue);
    setGroupPages(initialValue + totalPagesForView);
  }, [initialGroup]);

  useEffect(() => {
    if (totalPages < 6) {
      setSetNewGroups(false);
    } else {
      setSetNewGroups(true);
    }
  }, [totalPages]);

  useEffect(() => {
    setGroupPages(totalPagesForView);
    setInitialGroup(0);
  }, []);

  const getItemsGroupPages = useCallback((): React.ReactElement | React.ReactElement[] => {
    return (
      <>
        {initialGroup > 0 && (
          <li key={`separtion_preview_`} onClick={handlePreViewGroupPages}>
            ...
          </li>
        )}
        {Array(totalPages)
          .slice(initialGroup, groupPages)
          .fill('pagenumber')
          .map((item, index) => {
            if (index <= totalPagesForView) {
              return (
                <li
                  className={skip === index + initialGroup ? styles.select : ''}
                  key={`${item}_items_${initialGroup + index + 1}`}
                  onClick={() => handleSelectPage(initialGroup + index)}
                >
                  {initialGroup + index + 1}
                </li>
              );
            }
          })}
        {totalPages > groupPages && totalPages !== groupPages && (
          <li key={`separtion`} onClick={handleViewGroupPages}>
            ...
          </li>
        )}
      </>
    );
  }, [
    groupPages,
    handlePreViewGroupPages,
    handleSelectPage,
    handleViewGroupPages,
    initialGroup,
    skip,
    totalPages,
  ]);

  const getPages = useCallback((): React.ReactElement | React.ReactElement[] => {
    if (totalPages < 6) {
      return Array(totalPages)
        .fill('page')
        .map((item, index) => (
          <li
            className={skip === index ? 'select' : ''}
            key={`${item}_itens_${index + 1}`}
            onClick={() => handleSelectPage(index)}
          >
            {index + 1}
          </li>
        ));
    } else {
      return getItemsGroupPages();
    }
  }, [getItemsGroupPages, handleSelectPage, skip, totalPages]);

  const handleInitPages = () => {
    handleSelectPage(0);
    if (setNewGroups && initialGroup > 0) {
      setInitialGroup(0);
      setGroupPages(totalPagesForView);
    }
  };

  const handleViewPages = (page: number) => {
    const initial = Math.floor(page / totalPagesForView) * totalPagesForView;
    const endValue = initial + totalPagesForView;
    if (initial !== initialGroup) {
      setInitialGroup(initial);
      setGroupPages(endValue);
    }
  };

  const handleEndPage = () => {
    handleSelectPage(totalPages - 1);
    if (setNewGroups) {
      handleViewPages(totalPages - 1);
    }
  };

  const handlePrevious = () => {
    if (skip - 1 >= 0) {
      handleSelectPage(skip - 1);
      if (setNewGroups && skip - 1 < initialGroup) {
        handlePreViewGroupPages();
      }
      if (setNewGroups) handleViewPages(skip - 1);
    }
  };

  const handleNext = () => {
    if (skip + 1 <= totalPages) {
      handleSelectPage(skip + 1);
      if (setNewGroups && skip + 1 >= initialGroup + totalPagesForView) {
        handleViewGroupPages();
      }
      if (setNewGroups) handleViewPages(skip + 1);
    }
  };

  return (
    <div className={styles.pagers}>
      <div className={styles['pagers-actions']}>
        <button
          className={styles.btnActions}
          disabled={skip === 0}
          onClick={handleInitPages}
          type="button"
        >
          {'<<'}
        </button>
        <button
          className={styles.btnActions}
          disabled={skip === 0}
          onClick={handlePrevious}
          type="button"
        >
          {'<'}
        </button>

        <div className={styles['list-items']}>
          <ul>{getPages()}</ul>
        </div>
        <button
          className={styles.btnActions}
          disabled={skip >= totalPages - 1}
          onClick={handleNext}
          type="button"
        >
          {'>'}
        </button>
        <button
          className={styles.btnActions}
          disabled={skip >= totalPages - 1}
          onClick={handleEndPage}
          type="button"
        >
          {'>>'}
        </button>
      </div>
      <div className={styles['pagers-select']}></div>
      <div className={styles['pagers-info']}>
        {skip * take + 1}-{contLimit > total ? total : contLimit} de {total} items
      </div>
    </div>
  );
};

Pager.propTypes = {
  handleSelectPage: PropTypes.func.isRequired,
  skip: PropTypes.number.isRequired,
  take: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Pager;

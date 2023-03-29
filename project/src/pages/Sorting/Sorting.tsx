import { useState } from 'react';
import { UseAppDispatch, UseAppSelector } from '../../hooks';
import { sortCardsAction } from '../../store/actions';
import SortingList from './SortingList/SortingList';

const Sorting = (): JSX.Element => {
  const dispatch = UseAppDispatch();
  const [activeSort, setActiveSort] = useState('Popular');
  const [activeSortMenu, setActiveSortMenu] = useState(false);
  const town = UseAppSelector((state) => state.city);

  const makeSortActive = (newSort: string) => {
    setActiveSort(newSort);
    dispatch(sortCardsAction(town, newSort));
    setActiveSortMenu(!activeSortMenu);
  };

  const openClosingSort = () => {
    setActiveSortMenu(!activeSortMenu);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => openClosingSort()}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortingList makeSortActive={makeSortActive} activeSort={activeSort} activeSortMenu={activeSortMenu} />
    </form>
  );
};

export default Sorting;

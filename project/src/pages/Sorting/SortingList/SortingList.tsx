import { SortType } from '../../../mocks/sortings';
import SortingItem from '../SortingItem/SortingItem';

type SortingListProps = {
  makeSortActive: (arg0: string) => void;
  activeSort: string;
  activeSortMenu: boolean;
}

const SortingList = ({makeSortActive, activeSort, activeSortMenu}: SortingListProps): JSX.Element => {
  const sortValues = Object.values(SortType);

  return (
    <ul className={`places__options places__options--custom ${activeSortMenu ? 'places__options--opened' : ''}`}>
      {sortValues.map((sorting) => <SortingItem key={sorting} sorting={sorting} makeSortActive={makeSortActive} activeSort={activeSort} />)}
    </ul>
  );
};

export default SortingList;

type SortingItemProps = {
  sorting: string;
  makeSortActive: (arg0: string) => void;
  activeSort: string;
}

const SortingItem = ({sorting, makeSortActive, activeSort}: SortingItemProps): JSX.Element => (
  <li className={`places__option ${sorting === activeSort ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => makeSortActive(sorting)}>{sorting}</li>
);

export default SortingItem;

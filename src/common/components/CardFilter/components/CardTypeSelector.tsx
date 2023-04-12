import { lotrSortTypeMappings } from '../../../../lotr-common/types/filter-types/sort-types';
import GempDropdown from '../../GempDropdown/GempDropdown';
import { CardFilterDropdownProps } from './CardFilter-props.interface';

function CardTypeSelector({ filterChanged }: CardFilterDropdownProps) {
  return (
    <GempDropdown
      selectionChanged={filterChanged}
      placeholder="Filter by Card Type"
      options={Object.values(lotrSortTypeMappings)}
    />
  );
}

export default CardTypeSelector;

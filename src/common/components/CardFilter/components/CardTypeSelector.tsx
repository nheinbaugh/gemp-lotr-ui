import { lotrCardTypeFilterMappings } from '../../../../lotr-common/types/filter-types/card-types';
import { lotrSortTypeMappings } from '../../../../lotr-common/types/filter-types/sort-types';
import GempDropdown from '../../GempDropdown/GempDropdown';
import { CardFilterDropdownProps } from './CardFilter-props.interface';

function CardTypeSelector({
  filterChanged,
  selectedValue,
}: CardFilterDropdownProps) {
  return (
    <GempDropdown
      selectedValue={selectedValue}
      selectionChanged={filterChanged}
      placeholder="Filter by Card Type"
      options={Object.values(lotrCardTypeFilterMappings)}
    />
  );
}

export default CardTypeSelector;

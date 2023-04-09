import { lotrSortTypeMappings } from '../../../../lotr-common/types/filter-types/sort-types';
import GempDropdown from '../../GempDropdown/GempDropdown';

function CardTypeSelector() {
  return (
    <GempDropdown
      placeholder="Filter by Card Type"
      options={lotrSortTypeMappings}
    />
  );
}

export default CardTypeSelector;

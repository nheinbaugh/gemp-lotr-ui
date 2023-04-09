import { lotrSortTypeMappings } from '../../../../lotr-common/types/filter-types/sort-types';
import GempDropdown from '../../GempDropdown/GempDropdown';

function SortSelector() {
  return <GempDropdown placeholder="Sort by" options={lotrSortTypeMappings} />;
}

export default SortSelector;

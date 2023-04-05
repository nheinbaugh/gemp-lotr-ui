import { lotrSortTypeMappings } from '../../../../lotr-common/types/filter-types/sort-types';
import GempDropdown from '../../GempDropdown/GempDropdown';

function SortSelector() {
  return <GempDropdown options={lotrSortTypeMappings} />;
}

export default SortSelector;

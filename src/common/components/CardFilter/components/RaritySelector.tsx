import { rarityMappings } from '../../../../lotr-common/types/filter-types/rarity-filter.type';
import GempDropdown from '../../GempDropdown/GempDropdown';

function RaritySelector() {
  return <GempDropdown options={rarityMappings} />;
}

export default RaritySelector;

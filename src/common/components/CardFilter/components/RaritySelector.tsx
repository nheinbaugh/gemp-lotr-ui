import { rarityMappings } from '../../../../lotr-common/types/filter-types/rarity-filter.type';
import GempDropdown from '../../GempDropdown/GempDropdown';
import { CardFilterDropdownProps } from './CardFilter-props.interface';

function RaritySelector({ filterChanged }: CardFilterDropdownProps) {
  return (
    <GempDropdown
      selectionChanged={filterChanged}
      placeholder="Filter by Rarity"
      options={Object.values(rarityMappings)}
    />
  );
}

export default RaritySelector;

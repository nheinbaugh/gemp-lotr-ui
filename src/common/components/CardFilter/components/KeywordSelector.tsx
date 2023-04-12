import { lotrCardKeywordTypeMappings } from '../../../../lotr-common/types/filter-types/keyword.types';
import GempDropdown from '../../GempDropdown/GempDropdown';
import { CardFilterDropdownProps } from './CardFilter-props.interface';

function KeywordSelector({ filterChanged }: CardFilterDropdownProps) {
  return (
    <GempDropdown
      selectionChanged={filterChanged}
      placeholder="Filter by Keyword"
      options={Object.values(lotrCardKeywordTypeMappings)}
    />
  );
}

export default KeywordSelector;

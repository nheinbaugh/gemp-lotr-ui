import { lotrCardKeywordTypeMappings } from '../../../../lotr-common/types/filter-types/keyword.types';
import GempDropdown from '../../GempDropdown/GempDropdown';

function KeywordSelector() {
  return (
    <GempDropdown
      placeholder="Filter by Keyword"
      options={lotrCardKeywordTypeMappings}
    />
  );
}

export default KeywordSelector;

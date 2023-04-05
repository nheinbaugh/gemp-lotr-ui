import { lotrCardKeywordTypeMappings } from '../../../../lotr-common/types/filter-types/keyword.types';
import GempDropdown from '../../GempDropdown/GempDropdown';

function CardTypeSelector() {
  return <GempDropdown options={lotrCardKeywordTypeMappings} />;
}

export default CardTypeSelector;

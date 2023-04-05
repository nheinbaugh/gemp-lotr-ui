import { getIconByName } from '../../../lotr-common/icons/icon-name.functions';
import { IconName } from '../../../lotr-common/icons/icons.type';

interface GempIconProps {
  name: IconName;
}

function GempIcon({ name }: GempIconProps) {
  return (
    <div>
      <img src={getIconByName(name)} alt="dwarves" />
    </div>
  );
}

export default GempIcon;

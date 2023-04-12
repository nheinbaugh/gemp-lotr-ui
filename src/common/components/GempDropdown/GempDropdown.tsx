import { Option, Select } from '@mui/joy';
import { Mappings } from '../../types/mappings.interface';

interface GempDropdownProps {
  options: Mappings[];
  placeholder: string;
  selectionChanged: (selection: string) => void;
}

function GempDropdown({
  options,
  placeholder = '',
  selectionChanged,
}: GempDropdownProps) {
  return (
    <Select
      sx={{ width: '100%' }}
      placeholder={placeholder}
      onChange={(_, newValue) => selectionChanged(newValue?.toString() || '')}
    >
      {options.map(({ apiName, displayName }) => (
        <Option key={apiName} value={apiName}>
          {displayName}
        </Option>
      ))}
    </Select>
  );
}

export default GempDropdown;

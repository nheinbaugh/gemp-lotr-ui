import { Option, Select } from '@mui/joy';

interface GempDropdownProps {
  options: Record<string, string>;
  placeholder: string;
}

function GempDropdown({ options, placeholder = '' }: GempDropdownProps) {
  return (
    <Select sx={{ width: '100%' }} placeholder={placeholder}>
      {Object.entries(options).map(([displayName, internalName]) => {
        return (
          <Option key={internalName} value={internalName}>
            {displayName}
          </Option>
        );
      })}
    </Select>
  );
}

export default GempDropdown;

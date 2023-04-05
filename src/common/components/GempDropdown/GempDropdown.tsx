import { Option, Select } from '@mui/joy';

interface GempDropdownProps {
  options: Record<string, string>;
}

function GempDropdown({ options }: GempDropdownProps) {
  return (
    <Select>
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

import Button from '@mui/material/Button';
import { IconButton } from '@mui/joy';
import FilterAlt from '@mui/icons-material/FilterAlt';

interface FilterToggleProps {
  showFilters: (e: React.MouseEvent) => void;
}

function FilterToggle({ showFilters }: FilterToggleProps) {
  return (
    <Button onClick={showFilters} sx={{ float: 'right' }}>
      <IconButton
        variant="solid"
        sx={{
          position: 'fixed',
          p: 0,
          right: 0,
          minHeight: '8em',
          top: 'calc(50vh - 4em)',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
        }}
      >
        <FilterAlt />
      </IconButton>
    </Button>
  );
}

export default FilterToggle;

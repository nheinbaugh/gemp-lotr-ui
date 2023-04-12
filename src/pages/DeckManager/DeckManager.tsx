import { Box } from '@mui/joy';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import FiltersList from './components/FilterList/FiltersList';
import FilterToggle from './components/FilterToggle/FilterToggle';
import SearchResults from './components/SearchResults/SearchResults';

export default function TemporaryDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <>
      <Box
        sx={{
          width: '50vw',
          height: '50vh',
          backgroundColor: 'background.level3',
        }}
      >
        <SearchResults />
      </Box>
      <FilterToggle showFilters={toggleDrawer(true)} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList applyFilters={toggleDrawer(false)} />
      </Drawer>
    </>
  );
}

import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import FiltersList from './components/FilterList/FiltersList';
import FilterToggle from './components/FilterToggle/FilterToggle';

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
      <FilterToggle showFilters={toggleDrawer(true)} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList applyFilters={toggleDrawer(false)} />
      </Drawer>
    </>
  );
}

import { Box } from '@mui/joy';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import FiltersList from './modules/FilterSelector/FilterSelector';
import FilterToggle from './components/FilterToggle/FilterToggle';
import SearchResults from './modules/SearchResults/SearchResults';
import { CollectionFiltersViewModel } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';

export default function DeckManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<CollectionFiltersViewModel>({});

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

  const onFilterUpdate = (
    updatedFilters: Partial<CollectionFiltersViewModel>
  ): void => {
    setFilters((previous: CollectionFiltersViewModel) => {
      return {
        ...previous,
        ...updatedFilters,
      };
    });
    toggleDrawer(false);
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
        <SearchResults filters={filters} />
      </Box>
      <FilterToggle showFilters={toggleDrawer(true)} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList currentFilters={filters} applyFilters={onFilterUpdate} />
      </Drawer>
    </>
  );
}

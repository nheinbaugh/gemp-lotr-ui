import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Box, Button } from '@mui/joy';
import FiltersList from './modules/FilterSelector/FilterSelector';
import FilterToggle from './components/FilterToggle/FilterToggle';
import {
  CollectionFiltersViewModel,
  PageInformation,
} from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { defaultPageInformation } from '../../lotr-common/api/collection-api/collection-api-parameters.functions';
import PageSelector from './components/PageSelector/PageSelector';
import CardBank from './modules/CardBank/CardBank';

export default function DeckManager() {
  const [filters, setFilters] = useState<CollectionFiltersViewModel>({});
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

  const onFilterUpdate = (
    updatedFilters: Partial<CollectionFiltersViewModel>
  ): void => {
    setFilters((previous: CollectionFiltersViewModel) => {
      return {
        ...previous,
        ...updatedFilters,
      };
    });
    setIsOpen(false);
  };

  return (
    <>
      <CardBank filter={filters} />
      <FilterToggle showFilters={toggleDrawer(true)} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList currentFilters={filters} applyFilters={onFilterUpdate} />
      </Drawer>
    </>
  );
}

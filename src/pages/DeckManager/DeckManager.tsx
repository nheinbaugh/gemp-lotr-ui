import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Grid, Typography } from '@mui/joy';
import FiltersList from './modules/FilterSelector/FilterSelector';
import FilterToggle from './components/FilterToggle/FilterToggle';
import { CollectionFiltersViewModel } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import CardBank from './modules/CardBank/CardBank';
import LotrCardDetails from '../../lotr-common/components/LotrCardDetails/LotrCardDetails';

export default function DeckManager() {
  const [filters, setFilters] = useState<CollectionFiltersViewModel>({});
  const [isOpen, setIsOpen] = useState(false);
  const [cardModalState, setCardModalState] = useState<{
    isOpen: boolean;
    cardId: string;
  }>({ isOpen: false, cardId: '' });

  const closeModal = (): void => {
    setCardModalState({ isOpen: false, cardId: '' });
  };

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

  const handleAddCardToDeck = (blueprintId: string): void => {
    console.log('you would have added card with BP id', blueprintId);
  };

  const openCardDetails = (blueprintId: string): void => {
    setCardModalState({ isOpen: true, cardId: blueprintId });
  };
  return (
    <>
      <Grid display="flex" flexDirection="row">
        <Grid sx={{ minWidth: '40%;' }}>Deck Builder</Grid>
        <Grid>
          <Typography level="h3">Available Cards</Typography>
          <CardBank
            filter={filters}
            onCardPrimaryAction={handleAddCardToDeck}
            onCardSecondaryAction={openCardDetails}
          />
          <FilterToggle showFilters={toggleDrawer(true)} />
        </Grid>
      </Grid>
      <LotrCardDetails
        isOpen={cardModalState.isOpen}
        onClose={closeModal}
        blueprintId={cardModalState.cardId}
      />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList currentFilters={filters} applyFilters={onFilterUpdate} />
      </Drawer>
    </>
  );
}

import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Grid, Typography } from '@mui/joy';
import FiltersList from './modules/FilterSelector/FilterSelector';
import FilterToggle from './components/FilterToggle/FilterToggle';
import { CollectionFiltersViewModel } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import CardBank from './modules/CardBank/CardBank';
import LotrCardDetails from '../../lotr-common/components/LotrCardDetails/LotrCardDetails';
import Deckbuilder from './modules/DeckBuilder/Deckbuilder';
import { Deck, createDefaultDeck } from '../../common/types/Deck';
import {
  createLocationFilters,
  createOneRingFilters,
  createRingbearerFilters,
} from '../../lotr-common/api/collection-api/collection-filter-view-model.functions';
import DeckManagerMenu from './modules/DeckManagerMenu/DeckManagerMenu';
import { LotrLocationNames } from '../../common/types/LotrLocations/lotr-locations.type';
import { isLotrLocation } from '../../common/types/LotrLocations/lotr-locations.type-guard';
import { useCardQueryStore } from '../../lotr-common/state/card-filter.state';

// Note to self: this is hot ass garbage, i'm too lazy to figure how I'd rather do this.
const locationNotBeingUsed = 'no-active-location';

type SiteSelectionOptions = LotrLocationNames | 'no-active-location';

export default function DeckManager() {
  const { updateFilter, filters } = useCardQueryStore();

  const [isOpen, setIsOpen] = useState(false);
  const [currentLocation, setCurrentLocation] =
    useState<SiteSelectionOptions>(locationNotBeingUsed);
  const [currentDeck, setCurrentDeck] = useState<Deck>(createDefaultDeck());
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
    updateFilter({
      ...filters,
      ...updatedFilters,
    });
    setIsOpen(false);
  };

  const handleDeckbuilderFilterUpdate = (
    filterName: string,
    additionalFilter = ''
  ) => {
    console.log(
      'the deckbuilder wants to filter by: ',
      filterName,
      additionalFilter,
      currentLocation
    );
    let newlySelectedLocation = locationNotBeingUsed;
    if (filterName === 'ring') {
      updateFilter(createOneRingFilters());
    } else if (filterName === 'ring-bearer') {
      updateFilter(createRingbearerFilters());
    } else if (filterName === 'site') {
      newlySelectedLocation = additionalFilter;
      updateFilter(createLocationFilters());
    }
    if (
      currentLocation !== newlySelectedLocation &&
      isLotrLocation(newlySelectedLocation)
    ) {
      setCurrentLocation(newlySelectedLocation);
    }
  };

  // TODO: this should all be moved to a reducer. It's time....
  const handleAddCardToDeck = (blueprintId: string): void => {
    if (filters.activeDeckSection === 'ring') {
      setCurrentDeck({ ...currentDeck, ringId: blueprintId });
    }
    if (filters.activeDeckSection === 'ring-bearer') {
      setCurrentDeck({ ...currentDeck, ringbearerId: blueprintId });
    }
    if (filters.activeDeckSection === 'site') {
      setCurrentDeck({
        ...currentDeck,
        ringId: blueprintId,
        locations: { ...currentDeck.locations, [currentLocation]: blueprintId },
      });
    }
  };

  const openCardDetails = (blueprintId: string): void => {
    setCardModalState({ isOpen: true, cardId: blueprintId });
  };

  return (
    <>
      <DeckManagerMenu />
      <Grid display="flex" flexDirection="row">
        <Grid sx={{ minWidth: '40%;' }}>
          <Deckbuilder
            currentDeck={currentDeck}
            filterRequest={handleDeckbuilderFilterUpdate}
          />
        </Grid>
        <Grid>
          <Typography level="h3">Available Cards</Typography>
          <CardBank
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

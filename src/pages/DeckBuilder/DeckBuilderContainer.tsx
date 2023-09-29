import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Grid } from '@mui/joy';
import { CollectionFiltersViewModel } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import LotrCardDetails from '../../lotr-common/components/LotrCardDetails/LotrCardDetails';
import { Deck, createDefaultDeck } from '../../common/types/Deck';
import {
  createLocationFilters,
  createOneRingFilters,
  createRingbearerFilters,
} from '../../lotr-common/api/collection-api/collection-filter-view-model.functions';
import { LotrLocationNames } from '../../common/types/LotrLocations/lotr-locations.type';
import { useCardQueryStore } from '../../lotr-common/state/card-filter.state';
import FilterToggle from '../DeckManager/components/FilterToggle/FilterToggle';
import CardBank from '../DeckManager/modules/CardBank/CardBank';
import Deckbuilder from '../DeckManager/modules/DeckBuilder/Deckbuilder';
import FiltersList from '../DeckManager/modules/FilterSelector/FilterSelector';
import DeckBuilderMenu from '../DeckManager/modules/DeckBuilder/components/DeckBuilderMenu';

// Note to self: this is hot ass garbage, i'm too lazy to figure how I'd rather do this.
const locationNotBeingUsed = 'no-active-location';

type SiteSelectionOptions = LotrLocationNames | 'no-active-location';

export default function DeckBuilderContainer() {
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
      updateFilter(createLocationFilters(additionalFilter));
      if (currentLocation !== newlySelectedLocation) {
        // TODO: this is really crappy, but whatever, i'm not in the mood for type gymnaastics
        setCurrentLocation(
          newlySelectedLocation as unknown as LotrLocationNames
        );
      }
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
    if (filters.activeDeckSection === 'location') {
      setCurrentDeck({
        ...currentDeck,
        locations: { ...currentDeck.locations, [currentLocation]: blueprintId },
      });
    }
  };

  const openCardDetails = (blueprintId: string): void => {
    setCardModalState({ isOpen: true, cardId: blueprintId });
  };

  return (
    <>
      <Grid
        display="flex"
        flexDirection="column"
        sx={{ height: '100%', maxHeight: '100vh' }}
      >
        <DeckBuilderMenu />
        <Grid display="flex" flexDirection="row" sx={{ height: '100%' }}>
          <Grid sx={{ minWidth: '40%;', height: '100%' }}>
            <Deckbuilder
              currentDeck={currentDeck}
              filterRequest={handleDeckbuilderFilterUpdate}
            />
          </Grid>
          <Grid
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            <CardBank
              onCardPrimaryAction={handleAddCardToDeck}
              onCardSecondaryAction={openCardDetails}
            />
            <FilterToggle showFilters={toggleDrawer(true)} />
          </Grid>
          <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
            <FiltersList
              currentFilters={filters}
              applyFilters={onFilterUpdate}
            />
          </Drawer>
        </Grid>
      </Grid>
      <LotrCardDetails
        isOpen={cardModalState.isOpen}
        onClose={closeModal}
        blueprintId={cardModalState.cardId}
      />
    </>
  );
}

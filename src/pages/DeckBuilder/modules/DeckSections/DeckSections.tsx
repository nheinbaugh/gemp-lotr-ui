import { Grid, Tab, TabList, TabPanel, Tabs, Typography } from '@mui/joy';
import * as React from 'react';
import { Warning } from '@mui/icons-material';
import { Deck } from '../../../../common/types/Deck';
import PlaceholderCard from '../../../../common/components/PlaceholderCard/PlaceholderCard';
import LocationDeckSection from './components/LocationDeckSection/LocationDeckSection';
import RingBearerDeckSection from './components/RingBearerDeckSection';

type DeckbuilderProps = {
  currentDeck: Deck;
  filterRequest: (filterName: string, additionalFilter?: string) => void;
};

export default function DeckSections({
  currentDeck: deck,
  filterRequest,
}: DeckbuilderProps) {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: string | number | null
  ) => {
    setCurrentTabIndex(+(newValue ?? 0));
  };
  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={(theme) => ({
        boxShadow: theme.shadow.lg,
        backgroundColor: 'neutral.dark',
        height: '100%',
      })}
    >
      <Tabs
        defaultValue={currentTabIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <TabList>
          <Tab>
            <Typography>Ring and Ring-Bearer</Typography>
            <Warning />
          </Tab>
          <Tab>Locations 0/9</Tab>
          <Tab>Free Peoples</Tab>
          <Tab>Twilight</Tab>
        </TabList>
        <TabPanel value={0}>
          <RingBearerDeckSection
            ring={deck.ringId ?? ''}
            ringBearer={deck.ringbearerId ?? ''}
            updateFilter={filterRequest}
          />
        </TabPanel>
        <TabPanel value={1}>
          <LocationDeckSection
            updateFilteredSites={(siteFilter) =>
              filterRequest('site', siteFilter)
            }
            selectedSites={deck.locations}
          />
        </TabPanel>
        <TabPanel value={2}>Freeps</TabPanel>
        <TabPanel value={3}>Twilight</TabPanel>
      </Tabs>
    </Grid>
  );
}

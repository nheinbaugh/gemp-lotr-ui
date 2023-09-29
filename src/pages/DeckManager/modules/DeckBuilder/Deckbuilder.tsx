/* eslint-disable react/jsx-props-no-spreading -- garbage copy/paste */
import { Grid } from '@mui/joy';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Deck } from '../../../../common/types/Deck';
import PlaceholderCard from '../../../../common/components/PlaceholderCard/PlaceholderCard';
import SiteSelectionTab from './components/SiteSelectionTab';
import DeckBuilderMenu from './components/DeckBuilderMenu';

type DeckbuilderProps = {
  currentDeck: Deck;
  filterRequest: (filterName: string, additionalFilter?: string) => void;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Deckbuilder({
  currentDeck: deck,
  filterRequest,
}: DeckbuilderProps) {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue);
  };
  return (
    <Grid
      display="flex"
      flexDirection="column"
      sx={(theme) => ({
        boxShadow: theme.shadow.lg,
        backgroundColor: 'neutral.dark',
        height: '100vh',
      })}
    >
      <DeckBuilderMenu />

      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={currentTabIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Required Cards 0/2" {...a11yProps(0)} />
            <Tab label="Locations 0/9" {...a11yProps(1)} />
            <Tab label="Free Peoples" {...a11yProps(2)} />
            <Tab label="Twilight" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={currentTabIndex} index={0}>
          <Grid display="flex" direction="row" gap="1rem">
            <PlaceholderCard
              blueprintId={deck.ringId}
              placeholder="The One Ring"
              onSelect={() => filterRequest('ring')}
            />

            <PlaceholderCard
              blueprintId={deck.ringbearerId}
              placeholder="The Ring-Bearer"
              onSelect={() => filterRequest('ring-bearer')}
            />
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={currentTabIndex} index={1}>
          <SiteSelectionTab
            updateFilteredSites={(siteFilter) =>
              filterRequest('site', siteFilter.toString())
            }
            selectedSites={deck.locations}
          />
        </CustomTabPanel>
        <CustomTabPanel value={currentTabIndex} index={2}>
          Free Peoples Cards
        </CustomTabPanel>
        <CustomTabPanel value={currentTabIndex} index={3}>
          Twilight Cards
        </CustomTabPanel>
      </Box>
    </Grid>
  );
}

/* eslint-disable react/jsx-props-no-spreading -- garbage copy/paste */
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Grid, Typography } from '@mui/joy';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FiltersList from './modules/FilterSelector/FilterSelector';
import FilterToggle from './components/FilterToggle/FilterToggle';
import { CollectionFiltersViewModel } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import CardBank from './modules/CardBank/CardBank';
import LotrCardDetails from '../../lotr-common/components/LotrCardDetails/LotrCardDetails';
import { Deck } from '../../../../common/types/Deck';
import LotrCard from '../../../../lotr-common/components/LotrCard/LotrCard';

type DeckbuilderProps = {
  currentDeck: Deck;
  filterRequest: (filterName: string) => void;
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type CardPlaceholderProps = {
  blueprintId?: string;
  placeholder: string;
  vertical?: boolean;
  onSelect: VoidFunction;
};

function CardPlaceholder({
  placeholder,
  vertical = true,
  onSelect,
  blueprintId,
}: CardPlaceholderProps) {
  const longSide = '190px';
  const shortSide = '140px';
  const width = vertical ? shortSide : longSide;
  const height = vertical ? longSide : shortSide;
  if (!blueprintId) {
    return (
      <Box
        sx={{
          width,
          height,
          backgroundColor: 'lightgray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span onClick={onSelect}>{placeholder}</span>
      </Box>
    );
  }
  return (
    <LotrCard
      blueprintId={blueprintId}
      width={140}
      onPrimaryAction={onSelect}
      onSecondaryAction={() => console.log('secondary clicked the ring')}
    />
  );
}

export default function Deckbuilder({
  currentDeck: deck,
  filterRequest,
}: DeckbuilderProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log('deck', deck);
  return (
    <Grid display="flex" flexDirection="column">
      <h1>Deck Builder Header</h1>
      <Grid display="flex" flexDirection="row">
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Required Cards 0/2" {...a11yProps(0)} />
              <Tab label="Locations 0/9" {...a11yProps(1)} />
              <Tab label="Free Peoples" {...a11yProps(2)} />
              <Tab label="Twilight" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Grid display="flex" direction="row" gap="1rem">
              <CardPlaceholder
                blueprintId={deck.ringId}
                placeholder="The One Ring"
                onSelect={() => filterRequest('ring')}
              />

              <CardPlaceholder
                blueprintId={deck.ringbearerId}
                placeholder="The Ring-Bearer"
                onSelect={() => filterRequest('ring-bearer')}
              />
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Grid display="grid" gap="1rem">
              <Grid display="flex" direction="row" gap="1rem">
                <CardPlaceholder placeholder="Location 1" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
                <CardPlaceholder placeholder="Location 2" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
                <CardPlaceholder placeholder="Location 3" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
              </Grid>
              <Grid display="flex" direction="row" gap="1rem">
                <CardPlaceholder placeholder="Location 4" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
                <CardPlaceholder placeholder="Location 5" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
                <CardPlaceholder placeholder="Location 6" vertical={false} 
                onSelect={() => filterRequest('site')}
                />
              </Grid>
              <Grid display="flex" direction="row" gap="1rem">
                <CardPlaceholder placeholder="Location 7" vertical={false}
                onSelect={() => filterRequest('site')}
                 />
                <CardPlaceholder placeholder="Location 8" vertical={false} 
                onSelect={() => filterRequest('site')}
                />
                <CardPlaceholder placeholder="Location 9" vertical={false} 
                onSelect={() => filterRequest('site')}
                />
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Free Peoples Cards
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Twilight Cards
          </CustomTabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}

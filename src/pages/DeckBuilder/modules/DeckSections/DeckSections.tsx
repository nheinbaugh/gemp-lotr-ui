import { Grid, TabList, TabPanel, Tabs } from '@mui/joy';
import * as React from 'react';
import { Deck } from '../../../../common/types/deck/Deck';
import LocationDeckSection from './components/LocationDeckSection/LocationDeckSection';
import RingBearerDeckSection from './components/RingBearerDeckSection';
import TabWithStatus from './components/TabWithStatus';
import useLotrDeckValidity from '../../../../lotr-common/types/deck-validity/useLotrDeckValidity';
import { DeckValidityStatus } from '../../../../common/types/deck/deck-validity-status.type';
import { LotrFormatMetadata } from '../../../../lotr-common/types/expansions/lotr-expansion-metadata.interface';
import { useDeckBuilderStore } from '../../state/deckbuilder-state';
import { FreePeopleDeckSection } from './components/FreePeopleDeckSection';

type DeckbuilderProps = {
  deck: Deck;
  selectedFormat: LotrFormatMetadata;
  filterRequest: (filterName: string, additionalFilter?: string) => void;
};

export default function DeckSections(props: DeckbuilderProps) {
  const { deck } = props;
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const { filterRequest, selectedFormat } = props;
  const isValid = useLotrDeckValidity(deck, selectedFormat);
  const { ring, ringBearer, sites } = useDeckBuilderStore();
  console.log('ring', ring, sites);
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
      <Tabs value={currentTabIndex} onChange={handleChange}>
        <TabList>
          <TabWithStatus
            tabName="Ring and Ring-Bearer"
            status={isValid.deckValidity.ringbearer.status}
          />
          <TabWithStatus tabName="Site Path" status={DeckValidityStatus.Ok} />
          <TabWithStatus
            tabName="Free Peoples"
            status={DeckValidityStatus.Ok}
          />
          <TabWithStatus tabName="Twilight" status={DeckValidityStatus.Ok} />
        </TabList>
        <TabPanel value={0}>
          <RingBearerDeckSection
            ring={ring}
            ringBearer={ringBearer}
            updateFilter={filterRequest}
          />
        </TabPanel>
        <TabPanel value={1}>
          <LocationDeckSection
            updateFilteredSites={(siteFilter) =>
              filterRequest('site', siteFilter)
            }
            selectedSites={sites}
          />
        </TabPanel>
        <TabPanel value={2}>
          <FreePeopleDeckSection />
        </TabPanel>
        <TabPanel value={3}>Twilight</TabPanel>
      </Tabs>
    </Grid>
  );
}

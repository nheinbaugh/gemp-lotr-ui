import { Grid } from '@mui/joy';
import PlaceholderCard from '../../../../../common/components/PlaceholderCard/PlaceholderCard';
import { LotrLocations } from '../../../../../common/types/LotrLocations/lotr-locations.type';

type SiteSelectionTabProps = {
  selectedSites: LotrLocations;
  updateFilteredSites: (siteName: string) => void;
};

export default function SiteSelectionTab(props: SiteSelectionTabProps) {
  const { updateFilteredSites, selectedSites } = props;
  return (
    <Grid display="grid" gap="1rem">
      <Grid display="flex" direction="row" gap="1rem">
        <PlaceholderCard
          placeholder="Location 1"
          blueprintId={selectedSites.siteOne}
          vertical={false}
          onSelect={() => updateFilteredSites('siteOne')}
        />
        <PlaceholderCard
          placeholder="Location 2"
          vertical={false}
          onSelect={() => updateFilteredSites('siteTwo')}
        />
        <PlaceholderCard
          placeholder="Location 3"
          vertical={false}
          onSelect={() => updateFilteredSites('siteThree')}
        />
      </Grid>
      <Grid display="flex" direction="row" gap="1rem">
        <PlaceholderCard
          placeholder="Location 4"
          vertical={false}
          onSelect={() => updateFilteredSites('siteFour')}
        />
        <PlaceholderCard
          placeholder="Location 5"
          vertical={false}
          onSelect={() => updateFilteredSites('siteFive')}
        />
        <PlaceholderCard
          placeholder="Location 6"
          vertical={false}
          onSelect={() => updateFilteredSites('siteSix')}
        />
      </Grid>
      <Grid display="flex" direction="row" gap="1rem">
        <PlaceholderCard
          placeholder="Location 7"
          vertical={false}
          onSelect={() => updateFilteredSites('siteSeven')}
        />
        <PlaceholderCard
          placeholder="Location 8"
          vertical={false}
          onSelect={() => updateFilteredSites('siteEight')}
        />
        <PlaceholderCard
          placeholder="Location 9"
          vertical={false}
          onSelect={() => updateFilteredSites('siteNine')}
        />
      </Grid>
    </Grid>
  );
}

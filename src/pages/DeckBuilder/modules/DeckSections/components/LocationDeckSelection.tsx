import { Grid } from '@mui/joy';
import PlaceholderCard from '../../../../../common/components/PlaceholderCard/PlaceholderCard';
import {
  LotrLocationNames,
  LotrLocations,
} from '../../../../../common/types/LotrLocations/lotr-locations.type';

type SiteSelectionTabProps = {
  selectedSites: LotrLocations;
  updateFilteredSites: (siteName: number) => void;
};

const locations = [
  {
    title: 'Location 1',
    site: LotrLocationNames.SiteOne,
  },
  {
    title: 'Location 2',
    site: LotrLocationNames.SiteTwo,
  },
  {
    title: 'Location 3',
    site: LotrLocationNames.SiteThree,
  },
  {
    title: 'Location 4',
    site: LotrLocationNames.SiteFour,
  },
  {
    title: 'Location 5',
    site: LotrLocationNames.SiteFive,
  },
  {
    title: 'Location 6',
    site: LotrLocationNames.SiteSix,
  },
  {
    title: 'Location 7',
    site: LotrLocationNames.SiteSeven,
  },
  {
    title: 'Location 8',
    site: LotrLocationNames.SiteEight,
  },
  {
    title: 'Location 9',
    site: LotrLocationNames.SiteNine,
  },
];

export default function SiteSection(props: SiteSelectionTabProps) {
  const { updateFilteredSites, selectedSites } = props;
  return (
    <Grid gap="1rem" container>
      {locations.map((location) => (
        <Grid md={3} key={location.site}>
          <PlaceholderCard
            placeholder={location.title}
            card={selectedSites[location.site]}
            vertical={false}
            height={180}
            onSelect={() => updateFilteredSites(location.site)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

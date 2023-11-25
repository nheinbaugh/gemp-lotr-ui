import { Grid } from '@mui/joy';
import PlaceholderCard from '../../../../../common/components/PlaceholderCard/PlaceholderCard';
import { FilterableDeckSection } from '../types/filterable-deck-section.interface';

interface DeckSectionProps {
  selections: FilterableDeckSection[];
  onSectionChange: (section: string) => void;
  placeholderWidth: 'small' | 'large';
}

const getDefaultDeckSectionProps = (): DeckSectionProps => ({
  selections: [],
  onSectionChange: () => {},
  placeholderWidth: 'small',
});

export default function DeckSectionTemplate(
  props: DeckSectionProps = getDefaultDeckSectionProps()
) {
  const { onSectionChange, selections, placeholderWidth } = props;

  return (
    <Grid gap="1rem" container>
      {(selections ?? []).map((section) => (
        <Grid
          md={placeholderWidth === 'small' ? 3 : 5}
          key={section.placeholder}
        >
          <PlaceholderCard
            placeholder={section.placeholder}
            card={section.cardBlueprint}
            vertical={section.isVertical}
            height={section.isVertical ? 240 : 180}
            onSelect={() => onSectionChange(section.filterName)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

import { Grid } from '@mui/joy';
import PlaceholderCard from '../../../../../common/components/PlaceholderCard/PlaceholderCard';
import { FilterableDeckSection } from '../types/filterable-deck-section.interface';

interface DeckSectionProps {
  sections: FilterableDeckSection[];
  onSectionChange: (section: string) => void;
  placeholderWidth: 'small' | 'large';
}

const getDefaultDeckSectionProps = (): DeckSectionProps => ({
  sections: [],
  onSectionChange: () => {},
  placeholderWidth: 'small',
});

export default function DeckSectionTemplate(
  props: DeckSectionProps = getDefaultDeckSectionProps()
) {
  const { onSectionChange, sections, placeholderWidth } = props;

  return (
    <Grid gap="1rem" container>
      {(sections ?? []).map((section) => (
        <Grid
          md={placeholderWidth === 'small' ? 3 : 5}
          key={section.placeholder}
        >
          <PlaceholderCard
            placeholder={section.placeholder}
            blueprintId={section.cardId}
            vertical={section.isVertical}
            height={section.isVertical ? 240 : 180}
            onSelect={() => onSectionChange(section.filterName)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

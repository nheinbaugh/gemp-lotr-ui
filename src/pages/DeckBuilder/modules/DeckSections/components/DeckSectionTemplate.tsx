import { Grid } from '@mui/joy';
import PlaceholderCard from '../../../../../common/components/PlaceholderCard/PlaceholderCard';
import { FilterableDeckSection } from '../types/filterable-deck-section.interface';

interface DeckSectionProps {
  sections: FilterableDeckSection[];
  onSectionChange: (section: string) => void;
}

const getDefaultDeckSectionProps = (): DeckSectionProps => ({
  sections: [],
  onSectionChange: () => {},
});

export default function DeckSectionTemplate(
  props: DeckSectionProps = getDefaultDeckSectionProps()
) {
  const { onSectionChange, sections } = props;

  return (
    <Grid gap="1rem" container>
      {(sections ?? []).map((section) => (
        <Grid md={3} key={section.placeholder}>
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

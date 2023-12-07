import { Box } from '@mui/joy';
import StackedLotrCard from '../../../../../lotr-common/components/LotrCard/StackedLotrCard';
import { CardId } from '../../../../../lotr-common/types/lotr-card/card-blueprint.interface';
import { CardBlueprintWithCount } from '../../../state/card-blueprint-with-count';
import { EmptyDeckSection } from './EmptyDeckSection';

type PlayerSideDeckSectionProps = {
  cards: Map<CardId, CardBlueprintWithCount>;
};

/**
 * This is a really poorly named component, but it is either Free Peoples or Shadow. Not sure what else to call it :/
 */
export function PlayerSideDeckSection(props: PlayerSideDeckSectionProps) {
  const { cards } = props;
  const entries = [...cards.entries()];
  return entries.length ? (
    // <Box sx={{ width: '100%', maxWidth: '100%' }}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: '6px',
        height: '160px',
      }}
    >
      {entries.map(([cardId, card]) => (
        <StackedLotrCard
          key={cardId}
          card={card}
          count={card.count}
          height={150}
          onPrimaryAction={() => {}}
          onSecondaryAction={() => {}}
          allowHover
        />
      ))}
    </Box>
  ) : (
    // </Box>
    <EmptyDeckSection />
  );
}

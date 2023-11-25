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
    <>
      {entries.map(([cardId, card]) => (
        <div key={cardId}>
          {card.cardBlueprintId} - {card.count}
        </div>
      ))}
    </>
  ) : (
    <EmptyDeckSection />
  );
}

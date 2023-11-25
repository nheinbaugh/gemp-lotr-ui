import { useDeckBuilderStore } from '../../../state/deckbuilder-state';

export function FreePeopleDeckSection() {
  const { freePeople } = useDeckBuilderStore();
  const entries = [...freePeople.entries()];
  return (
    <span>
      we are the free peoples!{' '}
      {freePeople.size ? (
        <span>
          {entries.map(([cardId, card]) => (
            <div key={cardId}>
              {card.cardBlueprintId} - {card.count}
            </div>
          ))}
        </span>
      ) : (
        <span>no cards in here</span>
      )}
    </span>
  );
}

import { Deck } from '../../../common/types/deck/Deck';
import { DeckBuilderStore } from './deckbuilder-state';

export const getCurrentDeck = (state: DeckBuilderStore): Deck => {
  const { ring, ringBearer, sites, freePeople, shadow } = state;
  return {
    ring,
    ringBearer,
    sites,
    cards: [...freePeople, ...shadow],
  };
};

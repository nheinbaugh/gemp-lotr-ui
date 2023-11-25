import { create } from 'zustand';
import {
  CardBlueprint,
  LotrSiteCardBlueprint,
} from '../../../lotr-common/types/lotr-card/card-blueprint.interface';
import { LotrLocations } from '../../../common/types/LotrLocations/lotr-locations.type';

interface DeckBuilderState {
  ring?: CardBlueprint;
  ringBearer?: CardBlueprint;
  sites: LotrLocations;
  freePeople: CardBlueprint[];
  shadow: CardBlueprint[];
}

interface DeckBuilderActions {
  addCardToDeck: (card: CardBlueprint) => void;
}

export type DeckBuilderStore = DeckBuilderState & DeckBuilderActions;

export const useDeckBuilderStore = create<DeckBuilderStore>()((set) => ({
  addCardToDeck: (card: CardBlueprint) => {
    switch (card.group) {
      case 'site': {
        const { siteNumber } = card as LotrSiteCardBlueprint;
        console.log(card, siteNumber);
        set((state) => ({ sites: { ...state.sites, [siteNumber]: card } }));
        break;
      }
      case 'fp': {
        set((state) => ({ freePeople: [...state.freePeople, card] }));
        break;
      }
      case 'shadow':
        set((state) => ({ shadow: [...state.shadow, card] }));
        break;
      case 'ring':
        set((state) => ({ ring: card }));
        break;
      case 'ringBearer':
        set((state) => ({ ringBearer: card }));
        break;
      default:
        break;
    }
  },
  freePeople: [],
  shadow: [],
  sites: {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  },
  ring: undefined,
  ringBearer: undefined,
}));

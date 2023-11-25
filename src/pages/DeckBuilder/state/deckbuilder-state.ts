import { create } from 'zustand';
import {
  CardBlueprint,
  CardId,
  LotrSiteCardBlueprint,
} from '../../../lotr-common/types/lotr-card/card-blueprint.interface';
import { LotrLocations } from '../../../common/types/LotrLocations/lotr-locations.type';
import { doAddCardToDeck } from './add-card-to-deck.function';
import { CardBlueprintWithCount } from './card-blueprint-with-count';

interface DeckBuilderState {
  ring?: CardBlueprint;
  ringBearer?: CardBlueprint;
  sites: LotrLocations;
  freePeople: Map<CardId, CardBlueprintWithCount>;
  shadow: Map<CardId, CardBlueprintWithCount>;
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
        set((state) => ({ sites: { ...state.sites, [siteNumber]: card } }));
        break;
      }
      case 'fp': {
        set((state) => {
          const freePeople = doAddCardToDeck(card, state.freePeople);
          return { freePeople };
        });
        break;
      }
      case 'shadow': {
        set((state) => {
          const shadow = doAddCardToDeck(card, state.shadow);
          return { shadow };
        });
        break;
      }
      case 'ring':
        set(() => ({ ring: card }));
        break;
      case 'ringBearer':
        set(() => ({ ringBearer: card }));
        break;
      default:
        break;
    }
  },
  freePeople: new Map(),
  shadow: new Map(),
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

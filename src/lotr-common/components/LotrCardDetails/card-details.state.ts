import { create } from 'zustand';

function doUpdateCurrentCard(state: CardDetailModalStore, pointer: string) {
  const currentIndex = state.displayedCardId
    ? state.availableCardIds.indexOf(state.displayedCardId)
    : 0;
  let nextIndex = currentIndex;
  switch (pointer) {
    case 'next':
      if (currentIndex === state.availableCardIds.length) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }
      break;
    case 'previous':
    default:
      if (currentIndex === 0) {
        nextIndex = state.availableCardIds.length - 1;
      } else {
        nextIndex = currentIndex - 1;
      }
      break;
  }
  return { ...state, displayedCardId: state.availableCardIds[nextIndex] };
}

interface CardDetailModalState {
  availableCardIds: Array<string>;
  displayedCardId: string;
  hoverImage: string | null;
}

interface CardDetailModalActions {
  updateCurrentCard: (pointer: 'next' | 'previous') => void;
  iniatlizeModal: (cardId: string, cardIds: Array<string>) => void;

  setHoverImage(cardId: string | null): void;
}

type CardDetailModalStore = CardDetailModalState & CardDetailModalActions;

export const useCardDetailStore = create<CardDetailModalStore>()((set) => ({
  availableCardIds: [],
  displayedCardId: '',
  hoverImage: null,
  setHoverImage: (cardId: string | null) =>
    set((state) => {
      return { ...state, hoverImage: cardId };
    }),
  iniatlizeModal: (cardId: string, availableCardIds: Array<string>) =>
    set((state) => ({ ...state, displayedCardId: cardId, availableCardIds })),
  updateCurrentCard: (pointer: 'next' | 'previous') =>
    set((state) => {
      return doUpdateCurrentCard(state, pointer);
    }),
}));

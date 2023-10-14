import { create } from 'zustand';

interface CardDetailModalState {
  availableCardIds: Array<string>;
  displayedCardId: string;
}

interface CardDetailModalActions {
  updateCurrentCard: (pointer: 'next' | 'previous') => void;
  iniatlizeModal: (cardId: string, cardIds: Array<string>) => void;
}

type CardDetailModalStore = CardDetailModalState & CardDetailModalActions;

export const useCardDetailStore = create<CardDetailModalStore>()((set) => ({
  availableCardIds: [],
  displayedCardId: '',
  iniatlizeModal: (cardId: string, availableCardIds: Array<string>) =>
    set((state) => ({ ...state, displayedCardId: cardId, availableCardIds })),
  updateCurrentCard: (pointer: 'next' | 'previous') =>
    set((state) => {
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
    }),
}));

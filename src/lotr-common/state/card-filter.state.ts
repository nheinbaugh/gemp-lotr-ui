import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import {
  CollectionFiltersViewModel,
  PageInformation,
} from '../api/collection-api/collection-api-parameters.interface';
import { createDefaultCollectionViewModel } from '../api/collection-api/collection-filter-view-model.functions';
import { CollectionCardViewModel } from '../api/collection-api/collection-api-response.functions';
import { createDefaultPageInformation } from '../api/collection-api/collection-api-parameters.functions';

interface CardQueryState {
  filters: CollectionFiltersViewModel;
  results: CollectionCardViewModel[];
  pageInformation: PageInformation;
}

interface CardQueryActions {
  updateFilter: (filter: CollectionFiltersViewModel) => void;
  setResults: (results: CollectionCardViewModel[]) => void;
  setCurrentPage: (pageNumber: PageInformation) => void;
}

type CardQueryStore = CardQueryState & CardQueryActions;

const doUpdateFilter = async (
  filters: CollectionFiltersViewModel,
  previousState: CardQueryState,
  set: (updatedState: Partial<CardQueryState>) => void
): Promise<void> => {
  const updatedFilters = {
    ...previousState.filters,
    ...filters,
  };
  if (!updatedFilters.format) {
    updatedFilters.format = previousState.filters.format;
  }
  set({ filters });
};

export const useCardQueryStore = create(
  devtools(
    immer<CardQueryStore>((set) => ({
      filters: createDefaultCollectionViewModel(),
      pageInformation: createDefaultPageInformation(),
      results: [],
      setResults: (results: CollectionCardViewModel[]) =>
        set((state) => ({ ...state, results })),
      setCurrentPage: (pageNumber: PageInformation) =>
        set((state) => {
          const currentPageInfo = state.pageInformation;
          return {
            pageInformation: {
              ...currentPageInfo,
              ...pageNumber,
            },
          };
        }),
      updateFilter: async (filters: CollectionFiltersViewModel) =>
        set(async (prevState) => doUpdateFilter(filters, prevState, set)),
    }))
  )
);

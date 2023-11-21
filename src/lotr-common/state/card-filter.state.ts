import { create } from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { prev } from 'cheerio/lib/api/traversing';
import {
  CollectionFiltersViewModel,
  PageInformation,
} from '../api/collection-api/collection-api-parameters.interface';
import { createDefaultCollectionViewModel } from '../api/collection-api/collection-filter-view-model.functions';
import {
  CollectionCardViewModel,
  convertGetCollectionFromXml,
} from '../api/collection-api/collection-api-response.functions';
import { collectionApiConfiguration } from '../api/collection-api/collection-api.configuration';
import {
  getDefaultCollectionApiParameters,
  convertViewModelToDao,
  createDefaultPageInformation,
} from '../api/collection-api/collection-api-parameters.functions';

interface CardQueryState {
  filters: CollectionFiltersViewModel;
  results: CollectionCardViewModel[];
  pageInformation: PageInformation;
}

interface CardQueryActions {
  updateFilter: (filter: CollectionFiltersViewModel) => void;
  setCurrentPage: (pageNumber: PageInformation) => void;
}

type CardQueryStore = CardQueryState & CardQueryActions;

const doUpdateFilter = async (
  filters: CollectionFiltersViewModel,
  previousState: CardQueryState,
  set: (updatedState: Partial<CardQueryState>) => void
): Promise<void> => {
  // TODO: Convert to use immer
  const previousFilters = {
    ...filters,
  };
  if (!previousFilters.format) {
    previousFilters.format = previousState.filters.format;
  }

  const dao = getDefaultCollectionApiParameters(
    convertViewModelToDao(filters),
    {
      start: 0,
      count: 18,
    } // currentPage
  );
  const filterApiConfiguration = collectionApiConfiguration(dao);
  const result = await axios.get(
    filterApiConfiguration[0],
    filterApiConfiguration[1]
  );
  const results = convertGetCollectionFromXml(result.data).cards;
  set({ filters, results });
};

export const useCardQueryStore = create(
  devtools(
    immer<CardQueryStore>((set) => ({
      filters: createDefaultCollectionViewModel(),
      pageInformation: createDefaultPageInformation(),
      results: [],
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

import { create } from 'zustand';
import axios from 'axios';
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

export const useCardQueryStore = create<CardQueryStore>()((set) => ({
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
  updateFilter: async (filters: CollectionFiltersViewModel) => {
    const dao = getDefaultCollectionApiParameters(
      convertViewModelToDao(filters),
      {
        start: 0,
        count: 18,
      } // currentPage
    );
    const rawr = collectionApiConfiguration(dao);
    const result = await axios.get(rawr[0], rawr[1]);
    const results = convertGetCollectionFromXml(result.data).cards;
    set({ filters, results });
  },
}));

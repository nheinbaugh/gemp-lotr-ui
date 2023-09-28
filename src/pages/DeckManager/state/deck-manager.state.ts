import { create } from 'zustand';
import { CollectionFiltersViewModel } from '../../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { createDefaultCollectionViewModel } from '../../../lotr-common/api/collection-api/collection-filter-view-model.functions';

interface DeckManagerState {
  filters: CollectionFiltersViewModel;
}

interface DeckManagerActions {
  //   updateBears: (bears: number) => void;
}

type DeckManagerStore = DeckManagerState & DeckManagerActions;

export const useDeckManagerStore = create<DeckManagerStore>()((set) => ({
  filters: createDefaultCollectionViewModel(),
}));

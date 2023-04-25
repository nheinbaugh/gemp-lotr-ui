import {
  CollectionApiFilterDAO,
  CollectionApiParameters,
} from './collection-api-parameters.interface';

export const getDefaultCollectionFilterState = (): CollectionApiFilterDAO => ({
  side: '',
  type: '',
  rarity: '',
  sets: '',
  words: '',
  cardTypes: '',
  cultures: '',
  keywords: '',
  siteNumber: '',
  races: '',
  itemClasses: '',
  phases: '',
});

export const getDefaultCollectionApiParameters =
  (): CollectionApiParameters => {
    return {
      participantId: null,
      count: 18,
      start: 0,
      filter: getDefaultCollectionFilterState(),
    };
  };

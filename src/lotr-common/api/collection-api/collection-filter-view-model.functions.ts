import { CollectionFiltersViewModel } from './collection-api-parameters.interface';

export const createDefaultCollectionViewModel =
  (): CollectionFiltersViewModel => ({
    activeDeckSection: '',
    cultures: [],
  });

export const createOneRingFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'ring',
  cardTypes: {
    displayName: 'The One Ring',
    apiName: 'THE_ONE_RING',
  },
});

export const createRingbearerFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'ring-bearer',
  keywords: {
    displayName: 'Can Start with Ring',
    apiName: 'CAN_START_WITH_RING',
  },
});

export const createLocationFilters = (
  siteNumber: string
): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'location',
  cardTypes: {
    displayName: 'location',
    apiName: 'SITE',
  },
  siteNumber,
});

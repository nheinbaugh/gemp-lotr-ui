import { commonFormatsMetadata } from '../../types/expansions';
import { lotrCardTypeFilterMappings } from '../../types/filter-types/card-types';
import { CollectionFiltersViewModel } from './collection-api-parameters.interface';

export const createDefaultCollectionViewModel =
  (): CollectionFiltersViewModel => ({
    format: commonFormatsMetadata.All,
    activeDeckSection: '',
    cultures: [],
  });

export const createOneRingFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'ring',
  cardTypes: lotrCardTypeFilterMappings.OneRing,
});

export const createRingbearerFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'ring-bearer',
  keywords: lotrCardTypeFilterMappings.RingBearer,
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

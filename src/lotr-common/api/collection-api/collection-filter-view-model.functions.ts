import { commonFormatsMetadata } from '../../types/expansions';
import { lotrCardTypeFilterMappings } from '../../types/filter-types/card-types';
import { lotrCardKeywordTypeMappings } from '../../types/filter-types/keyword.types';
import { CollectionFiltersViewModel } from './collection-api-parameters.interface';

export const createDefaultCollectionViewModel =
  (): CollectionFiltersViewModel => ({
    format: commonFormatsMetadata.All,
    activeDeckSection: '',
    cultures: [],
  });

export const createOneRingFilters = (): CollectionFiltersViewModel => {
  return {
    ...createDefaultCollectionViewModel(),
    activeDeckSection: 'ring',
    cardTypes: lotrCardTypeFilterMappings.OneRing,
  };
};

export const createRingbearerFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'ring-bearer',
  keywords: lotrCardKeywordTypeMappings.RingBearer,
});

export const createLocationFilters = (
  siteNumber: string
): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  activeDeckSection: 'location',
  cardTypes: lotrCardTypeFilterMappings.Sites,
  siteNumber,
});

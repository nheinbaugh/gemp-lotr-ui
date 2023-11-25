import { commonFormatsMetadata } from '../../types/expansions';
import { lotrCardTypeFilterMappings } from '../../types/filter-types/card-types';
import { lotrCardKeywordTypeMappings } from '../../types/filter-types/keyword.types';
import { CollectionFiltersViewModel } from './collection-api-parameters.interface';

export const createDefaultCollectionViewModel =
  (): CollectionFiltersViewModel => ({
    format: commonFormatsMetadata.All,
    cultures: [],
  });

export const createOneRingFilters = (): CollectionFiltersViewModel => {
  return {
    ...createDefaultCollectionViewModel(),
    cardTypes: lotrCardTypeFilterMappings.OneRing,
  };
};

export const createRingbearerFilters = (): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  keywords: lotrCardKeywordTypeMappings.RingBearer,
});

export const createLocationFilters = (
  siteNumber: string
): CollectionFiltersViewModel => ({
  ...createDefaultCollectionViewModel(),
  cardTypes: lotrCardTypeFilterMappings.Sites,
  siteNumber,
});

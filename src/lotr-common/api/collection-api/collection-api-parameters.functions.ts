import {
  CollectionApiFilterDAO,
  CollectionApiParameters,
  CollectionFiltersViewModel,
  PageInformation,
} from './collection-api-parameters.interface';

export const createDefaultPageInformation = (): PageInformation => ({
  count: 18,
  start: 0,
});

export const getDefaultCollectionFilterState = (
  filters: Partial<CollectionApiFilterDAO> = {}
): CollectionApiFilterDAO => ({
  format: '',
  side: '',
  type: '',
  rarity: '',
  words: '',
  cardTypes: '',
  cultures: '',
  keywords: '',
  siteNumber: '',
  races: '',
  itemClasses: '',
  phases: '',
  title: '',
  ...filters,
});

export const getDefaultCollectionApiParameters = (
  filters: Partial<CollectionApiFilterDAO> = {},
  pageInformation = createDefaultPageInformation()
): CollectionApiParameters => {
  return {
    participantId: null,
    count: pageInformation.count,
    start: pageInformation.start,
    filter: getDefaultCollectionFilterState(filters),
  };
};

export const convertViewModelToDao = (
  input: CollectionFiltersViewModel
): CollectionApiFilterDAO => {
  return {
    format: input.format?.apiName ?? '',
    side: '',
    type: input.type?.apiName ?? '',
    rarity: input.rarity?.apiName ?? '',
    words: '',
    cardTypes: input.cardTypes?.apiName ?? '',
    siteNumber: input.siteNumber ?? '',
    itemClasses: '',
    keywords: input.keywords?.apiName ?? '',
    races: '',
    phases: '',
    cultures: input.cultures?.join(',') ?? '',
    title: input.cardTitle ?? '',
  };
};

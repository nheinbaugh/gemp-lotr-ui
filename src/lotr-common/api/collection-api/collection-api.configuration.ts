import { AxiosRequestConfig } from 'axios';
import { CollectionApiParameters } from './collection-api-parameters.interface';
import { getDefaultCollectionApiParameters } from './collection-api-parameters.functions';

const createFilter = (params: CollectionApiParameters): string => {
  let encodedFilter = '';
  if (params.filter.rarity) {
    encodedFilter += encodeURIComponent(`rarity:${params.filter.rarity} `);
  }
  if (params.filter.keywords) {
    encodedFilter += encodeURIComponent(`keyword:${params.filter.keywords} `);
  }
  if (params.filter.cardTypes) {
    encodedFilter += encodeURIComponent(`cardType:${params.filter.cardTypes} `);
  }
  if (params.filter.format) {
    encodedFilter += encodeURIComponent(`set:${params.filter.format} `);
  }
  if (params.filter.title) {
    encodedFilter += encodeURIComponent(`name:${params.filter.title} `);
  }
  if (params.filter.cultures) {
    encodedFilter += encodeURIComponent(
      `culture:${params.filter.cultures.toUpperCase()} `
    );
  }
  if (params.filter.siteNumber) {
    encodedFilter += encodeURIComponent(
      `siteNumber:${params.filter.siteNumber} `
    );
  }
  return encodedFilter;
};

export const collectionApiConfiguration = (
  parameters: Partial<CollectionApiParameters>
): [string, AxiosRequestConfig<CollectionApiParameters>] => {
  const finalParams = {
    ...getDefaultCollectionApiParameters(),
    ...parameters,
  };
  // TODO: --Build query param string builder-- Make it better
  const queryParams = `participantId=null&filter=${createFilter(
    finalParams
  )}&start=${finalParams.start ?? 0}&count=${finalParams.count}`;
  const url = `/gemp-lotr-server/collection/default?${queryParams}`;
  return [
    url,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/xml' },
      url,
    },
  ];
};

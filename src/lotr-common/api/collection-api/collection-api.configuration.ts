import { AxiosRequestConfig } from 'axios';
import zIndex from '@mui/material/styles/zIndex';
import { CollectionApiParameters } from './collection-api-parameters.interface';
import { getDefaultCollectionApiParameters } from './collection-api-parameters.functions';

const createFilter = (params: CollectionApiParameters): string => {
  let encodedFilter = '';
  console.log('sending api request', params);
  if (params.filter.rarity) {
    encodedFilter += encodeURIComponent(`rarity:${params.filter.rarity} `);
  }
  if (params.filter.keywords) {
    encodedFilter += encodeURIComponent(`keyword:${params.filter.keywords} `);
  }
  if (params.filter.cardTypes) {
    encodedFilter += encodeURIComponent(`cardType:${params.filter.cardTypes} `);
  }
  if (params.filter.sets) {
    encodedFilter += encodeURIComponent(`set:${params.filter.sets} `);
  }
  if (params.filter.title) {
    encodedFilter += encodeURIComponent(`name:${params.filter.title} `);
  }
  if (params.filter.cultures) {
    encodedFilter += encodeURIComponent(
      `culture:${params.filter.cultures.toUpperCase()} `
    );
  }
  encodedFilter += encodeURIComponent(`siteNumber:2`);
  return encodedFilter;
};

export const collectionApiConfiguration = (
  parameters: Partial<CollectionApiParameters>
): AxiosRequestConfig<CollectionApiParameters> => {
  const finalParams = {
    ...getDefaultCollectionApiParameters(),
    ...parameters,
  };
  // TODO: --Build query param string builder-- Make it better
  const queryParams = `participantId=null&filter=${createFilter(
    finalParams
  )}&start=${finalParams.start ?? 0}&count=${finalParams.count}`;
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/xml' },
    url: `/gemp-lotr-server/collection/default?${queryParams}`,
  };
};

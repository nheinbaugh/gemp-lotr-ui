import { AxiosRequestConfig } from 'axios';
import { CollectionApiParameters } from './collection-api-parameters.interface';
import { getDefaultCollectionApiParameters } from './collection-api-parameters.functions';

const createFilter = (params: CollectionApiParameters): string => {
  let encodedFilter = '';
  if (params.filter.rarity) {
    encodedFilter += encodeURIComponent(`rarity:${params.filter.rarity} `);
  }
  if (params.filter.sets) {
    encodedFilter += encodeURIComponent(`set:${params.filter.sets} `);
  }
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

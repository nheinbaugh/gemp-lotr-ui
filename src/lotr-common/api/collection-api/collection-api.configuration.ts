import { AxiosRequestConfig } from 'axios';
import { CollectionApiParameters } from './collection-api-parameters.interface';
import { getDefaultCollectionApiParameters } from './collection-api-parameters.functions';

export const collectionApiConfiguration = (
  parameters: Partial<CollectionApiParameters>
): AxiosRequestConfig<CollectionApiParameters> => {
  const finalParams = {
    ...getDefaultCollectionApiParameters(),
    ...parameters,
  };
  // TODO: Build query param string builder
  console.log(parameters);
  const queryParams = `participantId=null&start=${finalParams.start}&count=${finalParams.count}`;
  return {
    method: 'GET',
    headers: { 'Content-Type': 'application/xml' },
    url: `/gemp-lotr-server/collection/default?${queryParams}`,
  };
};

import { AxiosRequestConfig } from 'axios';
import { CollectionApiParameters } from './collection-api-parameters.interface';

export const CollectionApiConfiguration =
  (): AxiosRequestConfig<CollectionApiParameters> => ({
    method: 'GET',
    headers: { 'Content-Type': 'application/xml' },
  });

import { Box } from '@mui/joy';
import { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import SearchResults from './SearchResults';
import PageSelector from '../../components/PageSelector/PageSelector';
import {
  CollectionApiParameters,
  CollectionFiltersViewModel,
  PageInformation,
} from '../../../../lotr-common/api/collection-api/collection-api-parameters.interface';
import {
  convertViewModelToDao,
  defaultPageInformation,
  getDefaultCollectionApiParameters,
} from '../../../../lotr-common/api/collection-api/collection-api-parameters.functions';
import { collectionApiConfiguration } from '../../../../lotr-common/api/collection-api/collection-api.configuration';
import {
  CollectionCardViewModel,
  convertGetCollectionFromXml,
} from '../../../../lotr-common/api/collection-api/collection-api-response.functions';

type CardBankProps = {
  filter: CollectionFiltersViewModel;
};

function CardBank({ filter }: CardBankProps) {
  const [results, setResults] = useState<CollectionCardViewModel[]>([]);
  const [currentPage, setCurrentPage] = useState<PageInformation>(
    defaultPageInformation()
  );
  const [, executeSearch] = useAxios<string, CollectionApiParameters, Error>(
    '',
    { manual: true }
  );

  useEffect(() => {
    async function fetch(dao: CollectionApiParameters) {
      const res = await executeSearch(collectionApiConfiguration(dao));
      setResults(convertGetCollectionFromXml(res.data).cards);
    }
    const dao = getDefaultCollectionApiParameters(
      convertViewModelToDao(filter),
      currentPage
    );
    fetch(dao);
  }, [filter, executeSearch, currentPage]);

  return (
    <Box>
      <SearchResults cards={results} />
      <PageSelector pageUpdated={setCurrentPage} />
    </Box>
  );
}

export default CardBank;

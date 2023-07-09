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

  // yes these prop drills make me want to use a context, but I'm jamming
  onCardPrimaryAction: (blueprintId: string) => void;
  onCardSecondaryAction: (blueprintId: string) => void;
};

function CardBank({
  filter,
  onCardPrimaryAction,
  onCardSecondaryAction,
}: CardBankProps) {
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
      console.log('execute search', dao, filter);
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
      <SearchResults
        cards={results}
        onCardPrimaryAction={onCardPrimaryAction}
        onCardSecondaryAction={onCardSecondaryAction}
      />
      <PageSelector pageUpdated={setCurrentPage} />
    </Box>
  );
}

export default CardBank;

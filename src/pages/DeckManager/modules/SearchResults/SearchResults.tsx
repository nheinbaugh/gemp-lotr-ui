import { Box } from '@mui/joy';
import {
  CollectionApiFilterDAO,
  CollectionFiltersViewModel,
} from '../../../../lotr-common/api/collection-api/collection-api-parameters.interface';

// const executeSearch = async (
//   filters: CollectionApiParameters,
//   callback: (results: string[]) => void
// ): Promise<void> => {
//   console.log(filters);
// };

// const [searchResults, setSearchResults] = useState<string[]>([]);

// const [
//   { response: searchResponse, loading: isSearching, error: searchError },
//   executeSearch,
// ] = useAxios<string, CollectionApiParameters, Error>('', { manual: true });

// useEffect(() => {
//   console.log('the filters were updated', filters);
//   executeSearch(collectionApiConfiguration(filters));
// }, [filters, executeSearch]);

interface SearchResultProps {
  filters: CollectionFiltersViewModel;
}

function SearchResults({ filters }: SearchResultProps) {
  return <Box>you requested {JSON.stringify(filters)}</Box>;
}

export default SearchResults;

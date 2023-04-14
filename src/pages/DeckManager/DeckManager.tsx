import { Box, Button } from '@mui/joy';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import useAxios from 'axios-hooks';
import FiltersList from './components/FilterList/FiltersList';
import FilterToggle from './components/FilterToggle/FilterToggle';
import SearchResults from './components/SearchResults/SearchResults';
import { CollectionApiParameters } from '../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { collectionApiConfiguration } from '../../lotr-common/api/collection-api/collection-api.configuration';
import { getDefaultCollectionApiParameters } from '../../lotr-common/api/collection-api/collection-api-parameters.functions';

export default function DeckManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<CollectionApiParameters>(
    getDefaultCollectionApiParameters()
  );

  const [
    { response: searchResponse, loading: isSearching, error: searchError },
    executeSearch,
  ] = useAxios<string, CollectionApiParameters, Error>('', { manual: true });

  const handleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    executeSearch(collectionApiConfiguration(filters));
  };
  console.log(searchResponse, searchError, isSearching);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  const onFilterUpdate = ({
    rarity,
    cardType,
    keyword,
    expansions,
    sort,
  }: {
    rarity: string;
    cardType: string;
    keyword: string;
    expansions: string;
    sort: string;
  }): void => {
    setFilters((previous) => {
      return {
        ...previous,
        filter: {
          ...previous.filter,
          rarity,
          cardType,
          keywords: keyword,
          sets: expansions,
        },
      };
    });
    toggleDrawer(false);
  };

  return (
    <>
      <Box
        sx={{
          width: '50vw',
          height: '50vh',
          backgroundColor: 'background.level3',
        }}
      >
        <SearchResults />
        <Button onClick={handleSearch}>Search for Cards</Button>
      </Box>
      <FilterToggle showFilters={toggleDrawer(true)} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <FiltersList applyFilters={onFilterUpdate} />
      </Drawer>
    </>
  );
}

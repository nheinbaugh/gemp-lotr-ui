import { Box, Button, Grid } from '@mui/joy';
import { useEffect } from 'react';
import useAxios from 'axios-hooks';
import {
  CollectionApiParameters,
  CollectionFiltersViewModel,
  PageInformation,
} from '../../../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { collectionApiConfiguration } from '../../../../lotr-common/api/collection-api/collection-api.configuration';
import {
  convertViewModelToDao,
  getDefaultCollectionApiParameters,
} from '../../../../lotr-common/api/collection-api/collection-api-parameters.functions';
import {
  CollectionCardViewModel,
  convertGetCollectionFromXml,
} from '../../../../lotr-common/api/collection-api/collection-api-response.functions';
import LotrCard from '../../../../lotr-common/components/LotrCard/LotrCard';
import { useWindowDimensions } from '../../../../common/hooks/useWindowDimensions';

interface SearchResultProps {
  cards: CollectionCardViewModel[];
}

const getCardWidth = (viewportWidth: number): number => {
  const minWidth = 75; // YEA these are rough and suck...
  const maxWidth = 500;
  const desiredWidth = viewportWidth / 8;

  return Math.max(minWidth, Math.min(maxWidth, desiredWidth));
};

function SearchResults({ cards }: SearchResultProps) {
  const viewportWidth = useWindowDimensions();

  const addCardToDeck = (blueprintId: string): void => {
    console.log('card was clicked!', blueprintId);
  };

  const expandCard = (blueprintId: string): void => {
    console.log('card was  right clicked!', blueprintId);
  };

  return (
    <Box>
      <Grid container spacing={1}>
        {cards.map((card) => {
          return (
            <Grid key={card.blueprintId}>
              <LotrCard
                blueprintId={card.blueprintId}
                width={getCardWidth(viewportWidth)}
                onPrimaryAction={() => addCardToDeck(card.blueprintId)}
                onSecondaryAction={() => expandCard(card.blueprintId)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SearchResults;

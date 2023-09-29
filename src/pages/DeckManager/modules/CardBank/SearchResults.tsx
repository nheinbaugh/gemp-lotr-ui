import { Box, Grid } from '@mui/joy';
import { useEffect, useRef, useState } from 'react';
import { CollectionCardViewModel } from '../../../../lotr-common/api/collection-api/collection-api-response.functions';
import LotrCard from '../../../../lotr-common/components/LotrCard/LotrCard';
import { useWindowDimensions } from '../../../../common/hooks/useWindowDimensions';

interface SearchResultProps {
  cards: CollectionCardViewModel[];

  onCardPrimaryAction: (blueprintId: string) => void;
  onCardSecondaryAction: (blueprintId: string) => void;
}

const getCardWidth = (viewportWidth: number): number => {
  const minWidth = 75; // YEA these are rough and suck...
  const maxWidth = 500;
  const desiredWidth = viewportWidth / 8;

  return Math.max(minWidth, Math.min(maxWidth, desiredWidth));
};

function SearchResults({
  cards,
  onCardPrimaryAction,
  onCardSecondaryAction,
}: SearchResultProps) {
  const viewportWidth = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const currentWidth = containerRef.current.offsetWidth;
      if (currentWidth !== containerWidth) {
        setContainerWidth(currentWidth);
      }
    }
  }, [viewportWidth, containerWidth]);

  return (
    <Grid ref={containerRef} container spacing={1}>
      {cards.map((card) => {
        return (
          <Grid key={card.blueprintId}>
            <LotrCard
              blueprintId={card.blueprintId}
              width={getCardWidth(viewportWidth)}
              onPrimaryAction={() => onCardPrimaryAction(card.blueprintId)}
              onSecondaryAction={() => onCardSecondaryAction(card.blueprintId)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SearchResults;

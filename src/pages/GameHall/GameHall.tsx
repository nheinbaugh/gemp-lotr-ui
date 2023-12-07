import { Box, Button, Grid } from '@mui/joy';
import { Link, useLoaderData } from 'react-router-dom';
import { NonInteractiveLotrCard } from '../../lotr-common/components/LotrCard/NonInteractiveLotrCard';
import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';
import { LoaderData } from '../../common/types/react-router/loader-data.type';
import { gameHallLoader } from './types';
import { useClientHeartbeat } from '../../lotr-common/api/hall-api/heartbeat/hall-heartbeat';
import { useCardBlueprintStore } from '../../lotr-common/state/card-state';

const getCardWidth = (viewportWidth: number): number => {
  const minWidth = 75; // YEA these are rough and suck...
  const maxWidth = 500;
  const desiredWidth = viewportWidth / 4;

  return Math.max(minWidth, Math.min(maxWidth, desiredWidth));
};

export default function GameHall() {
  const cardStore = useCardBlueprintStore();
  const cards = [
    cardStore.cardBlueprints.get('2_16'),
    cardStore.cardBlueprints.get('10_6'),
    cardStore.cardBlueprints.get('101_3'),
    cardStore.cardBlueprints.get('15_45'),
  ];
  const viewportWidth = useWindowDimensions();
  const loaderData = useLoaderData() as LoaderData<typeof gameHallLoader>;

  useClientHeartbeat(loaderData.channelNumber);

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined">
        <Link to="/decks">Deck Builder</Link>
      </Button>
      {/* <Button onClick={() => beater?.stop()}>Stop!</Button> */}
      <Grid container spacing={1}>
        {cards
          .filter((card) => card !== undefined)
          .map((card) => (
            <Grid key={card?.cardNumber}>
              <NonInteractiveLotrCard
                card={card}
                width={getCardWidth(viewportWidth)}
                isHorizontal={false}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

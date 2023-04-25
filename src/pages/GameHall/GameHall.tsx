import { Box, Button, Grid } from '@mui/joy';
import { Link, useLoaderData } from 'react-router-dom';
import LotrCard from '../../lotr-common/components/LotrCard/LotrCard';
import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';
import { LoaderData } from '../../common/types/react-router/loader-data.type';
import { gameHallLoader } from './types';
import { useClientHeartbeat } from '../../lotr-common/api/hall-api/heartbeat/hall-heartbeat';

const getCardWidth = (viewportWidth: number): number => {
  const minWidth = 75; // YEA these are rough and suck...
  const maxWidth = 500;
  const desiredWidth = viewportWidth / 4;

  return Math.max(minWidth, Math.min(maxWidth, desiredWidth));
};

export default function GameHall() {
  const cards = ['2_16', '10_6', '101_3', '15_45'];
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
        {cards.map((cardId) => (
          <Grid key={cardId}>
            <LotrCard
              blueprintId={cardId}
              width={getCardWidth(viewportWidth)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

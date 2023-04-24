import { Box, Button, Grid, Typography } from '@mui/joy';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import LotrCard from '../../lotr-common/components/LotrCard/LotrCard';
import { useWindowDimensions } from '../../common/hooks/useWindowDimensions';
import { HallMetadata } from '../../lotr-common/api/hall-api/metadata/hall-metadata.interface';
import { LoaderData } from '../../common/types/react-router/loader-data.type';
import { gameHallLoader } from './types';

const getCardWidth = (viewportWidth: number): number => {
  const minWidth = 75; // YEA these are rough and suck...
  const maxWidth = 500;
  const desiredWidth = viewportWidth / 4;

  return Math.max(minWidth, Math.min(maxWidth, desiredWidth));
};

export class Heartbeat {
  private timerId: NodeJS.Timer | number | null = null;

  start() {
    this.tick();
  }

  stop(): void {
    clearInterval(Number(this.timerId));
  }

  private tick(): void {
    this.timerId = setTimeout(async () => {
      const result = await axios.post(
        '/gemp-lotr-server/hall/update',
        {
          channelNumber: 5,
          participantId: null,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: {
            channelNumber: 12355,
            participantId: 1234,
          },
        }
      );
      this.tick();
    }, 100);
  }
}

const beater: Heartbeat | null = null;

export default function GameHall() {
  const cards = ['2_16', '10_6', '101_3', '15_45'];
  const viewportWidth = useWindowDimensions();
  const loaderData = useLoaderData() as LoaderData<typeof gameHallLoader>;

  // if (beater === null) {
  //   beater = new Heartbeat();
  //   beater.start();
  // }

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="outlined">
        <Link to="/decks">Deck Builder</Link>
      </Button>
      <Button onClick={() => beater?.stop()}>Stop!</Button>
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

import { Add, Home } from '@mui/icons-material';
import { Button, Grid } from '@mui/joy';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { DeckManagerSections } from '../types/deck-manager-sections.type';

const deckManagerActions: {
  title: string;
  section: DeckManagerSections;
  icon: ReactElement;
  href: string;
}[] = [
  {
    title: 'New Deck',
    section: 'deck-builder',
    icon: <Add />,
    href: '/new',
  },
  {
    title: 'Open Deck',
    section: 'deck-list',
    icon: <Home />,
    href: '/list',
  },
];

export default function DeckManagerMenu() {
  return (
    <Grid>
      <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
        {deckManagerActions.map((action) => {
          return (
            <Grid key={action.title}>
              <Button
                startDecorator={action.icon}
                variant="soft"
                color="primary"
              >
                <Link to={`/decks${action.href}`}>{action.title}</Link>
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Grid>
        <Grid>
          Down here we can show recently modified decks as stored inA
          LocalStorage
        </Grid>
      </Grid>
    </Grid>
  );
}

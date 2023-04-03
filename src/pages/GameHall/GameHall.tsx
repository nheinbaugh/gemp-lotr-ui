import { Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

export default function GameHall() {
  return (
    <>
      <span>Lets game dudes!</span>
      <Typography>
        <Link to="/decks">Manage your Decks</Link>
      </Typography>
    </>
  );
}

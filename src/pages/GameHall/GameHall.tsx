import { Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import GempCard from '../../common/components/Card/Card';

export default function GameHall() {
  return (
    <>
      <span>Lets game dudes!</span>
      <Typography>
        <Link to="/decks">Manage your Decks</Link>
      </Typography>
      <GempCard imageHref="google.com" />
    </>
  );
}

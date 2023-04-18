import { Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import GempCard from '../../common/components/Card/Card';
import LotrCard from '../../lotr-common/components/LotrCard/LotrCard';

export default function GameHall() {
  return (
    <>
      <span>Lets game dudes!</span>
      <Typography>
        <Link to="/decks">Manage your Decks</Link>
      </Typography>
      <LotrCard blueprintId="2_16" />
      <LotrCard blueprintId="222_16" />
    </>
  );
}

import { Box } from '@mui/joy';
import CardFilter from '../../common/components/CardFilter/CardFilter';
import GempIcon from '../../common/components/GempIcon/GempIcon';

function DeckManager() {
  return (
    <Box sx={{ width: '99vw', height: '99vh' }}>
      This is where you could (I suppose) manage your decks
      <GempIcon name="dwarven-culture" />
      <GempIcon name="elven-culture" />
      <GempIcon name="raider-culture" />
      <CardFilter />
    </Box>
  );
}

export default DeckManager;

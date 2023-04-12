import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Input, Typography } from '@mui/joy';
import CardTypeSelector from '../../../../common/components/CardFilter/components/CardTypeSelector';
import SortSelector from '../../../../common/components/CardFilter/components/SortSelector';
import RaritySelector from '../../../../common/components/CardFilter/components/RaritySelector';
import ExpansionsFilter from '../../../../common/components/CardFilter/components/ExpansionsFilter';
import KeywordSelector from '../../../../common/components/CardFilter/components/KeywordSelector';
import GempIcon from '../../../../common/components/GempIcon/GempIcon';

interface FiltersListProps {
  applyFilters: (e: React.MouseEvent) => void;
}

export default function FiltersList({ applyFilters }: FiltersListProps) {
  const [rarity, setRarity] = useState<string>('');
  const [cardType, setCardType] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [expansions, setExpansions] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  return (
    <Box sx={{ width: 400, p: 1 }} role="presentation">
      <Typography level="h3">Filters</Typography>
      <List>
        <ListItem>
          <Input sx={{ width: '100%' }} placeholder="Title" />
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '.5em',
          }}
        >
          <Typography>Free People Cultures</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '.4em' }}>
            <GempIcon name="dwarven-culture" />
            <GempIcon name="dunland-culture" />
            <GempIcon name="elven-culture" />
            <GempIcon name="gandalf-culture" />
            <GempIcon name="gollum-culture" />
            <GempIcon name="gondor-culture" />
            <GempIcon name="men-culture" />
            <GempIcon name="shire-culture" />
          </Box>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '.5em',
          }}
        >
          <Typography>Twilight Cultures</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '.4em' }}>
            <GempIcon name="gollum-culture" />
            <GempIcon name="isengard-culture" />
            <GempIcon name="moria-culture" />
            <GempIcon name="orc-culture" />
            <GempIcon name="sauron-culture" />
            <GempIcon name="ringwraith-culture" />
          </Box>
        </ListItem>
        <ListItem>
          <RaritySelector filterChanged={setRarity} />
        </ListItem>
        <ListItem>
          <CardTypeSelector filterChanged={setCardType} />
        </ListItem>
        <ListItem>
          <KeywordSelector filterChanged={setKeyword} />
        </ListItem>
        <ListItem>
          <ExpansionsFilter filterChanged={setExpansions} />
        </ListItem>
        <ListItem>
          <SortSelector filterChanged={setSort} />
        </ListItem>
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '.5em' }}>
        <Button color="info" variant="outlined">
          Reset Filters
        </Button>
        <Button color="primary" variant="solid" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
}

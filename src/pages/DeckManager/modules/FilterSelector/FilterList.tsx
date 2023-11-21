import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Input, Typography } from '@mui/joy';
import CardTypeSelector from '../../../../common/components/CardFilter/components/CardTypeSelector';
import RaritySelector from '../../../../common/components/CardFilter/components/RaritySelector';
import ExpansionsFilter from '../../../../common/components/CardFilter/components/ExpansionsFilter';
import KeywordSelector from '../../../../common/components/CardFilter/components/KeywordSelector';
import { CollectionFiltersViewModel } from '../../../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { CultureOptionContainer } from './components/CultureOptionContainer/CultureOptionContainer';
import { getCulturesBySelectedSet } from '../../../../lotr-common/types/cultures/culture.functions';
import { FilterActions } from './components/FilterActions/FilterActions';
import { Mappings } from '../../../../common/types/mappings.interface';
import { LotrFormatMetadata } from '../../../../lotr-common/types/expansions/lotr-expansion-metadata.interface';
import { commonFormatsMetadata } from '../../../../lotr-common/types/expansions';

interface FiltersListProps {
  currentFilters: CollectionFiltersViewModel;
  applyFilters: ({
    rarity,
    type,
    keywords,
    format,
    cultures,
    cardTitle,
  }: Partial<CollectionFiltersViewModel>) => void;
}

export default function FiltersList({
  currentFilters = {
    format: commonFormatsMetadata.All,
    activeDeckSection: 'required',
  },
  applyFilters,
}: FiltersListProps) {
  const [rarity, setRarity] = useState<Mappings | undefined>(
    currentFilters.rarity
  );
  const [type, setCardType] = useState<Mappings | undefined>(
    currentFilters.type
  );
  const [keywords, setKeyword] = useState<Mappings | undefined>(
    currentFilters.keywords
  );
  const [currentFormat, setCurrentFormat] = useState<
    LotrFormatMetadata | undefined
  >(currentFilters.format);
  const [cardName, setCardName] = useState<string>(
    currentFilters.cardTitle ?? ''
  );
  const [freeCultures, setFreeCultures] = useState<string[]>(
    currentFilters.cultures ?? []
  );
  const [twilightCultures, setTwilightCultures] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('');
  const handleSubmitFilters = (): void => {
    applyFilters({
      rarity,
      type,
      keywords,
      format: currentFormat,
      cultures: [...freeCultures, ...twilightCultures], // TODO: this shouldn't combine them yet, it makes the culture filter settings weird
      cardTitle: cardName,
    });
  };

  const handleResetFilters = (): void => {
    // basically set back to inital state....
  };

  return (
    <Box sx={{ width: 400, p: 1 }} role="presentation">
      <Typography level="h3">Filters</Typography>
      <List>
        <ListItem>
          <Input
            sx={{ width: '100%' }}
            placeholder="Title"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </ListItem>
        <ListItem>
          <CultureOptionContainer
            title="Free People Cultures"
            cultures={getCulturesBySelectedSet(currentFormat).freePeople}
            selectionUpdated={setFreeCultures}
            currentSelectedCultures={[...freeCultures, ...twilightCultures]}
          />
        </ListItem>
        <ListItem>
          <CultureOptionContainer
            title="Shadow Cultures"
            cultures={getCulturesBySelectedSet(currentFormat).twilight}
            selectionUpdated={setTwilightCultures}
            currentSelectedCultures={[...freeCultures, ...twilightCultures]}
          />
        </ListItem>
        <ListItem>
          <RaritySelector
            selectedValue={currentFilters.rarity}
            filterChanged={setRarity}
          />
        </ListItem>
        <ListItem>
          <CardTypeSelector
            selectedValue={currentFilters.cardTypes}
            filterChanged={setCardType}
          />
        </ListItem>
        <ListItem>
          <KeywordSelector
            selectedValue={keywords}
            filterChanged={setKeyword}
          />
        </ListItem>
        <ListItem>
          <ExpansionsFilter
            selectedValue={currentFormat}
            filterChanged={setCurrentFormat}
          />
        </ListItem>
        {/* <ListItem>
          <SortSelector filterChanged={setSort} />
        </ListItem> */}
      </List>
      <FilterActions
        applyFilters={handleSubmitFilters}
        resetFilter={handleResetFilters}
      />
    </Box>
  );
}

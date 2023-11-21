import { Add, Save, ContentCopy, ImportExport } from '@mui/icons-material';
import { Tooltip, IconButton, Box } from '@mui/joy';
import { useCardQueryStore } from '../../../lotr-common/state/card-filter.state';
import GempDropdown from '../../../common/components/GempDropdown/GempDropdown';
import {
  allPlayableFormatsMetadata,
  commonFormatsMetadata,
} from '../../../lotr-common/types/expansions';
import { LotrFormatMetadata } from '../../../lotr-common/types/expansions/lotr-expansion-metadata.interface';
import { Mappings } from '../../../common/types/mappings.interface';

export default function DeckBuilderMenu() {
  const { filters, updateFilter } = useCardQueryStore();

  const setFormat = (input: Mappings | undefined) => {
    let format = input as LotrFormatMetadata;
    if (!input) {
      format = commonFormatsMetadata.All;
    }
    updateFilter({
      ...filters,
      format,
    });
  };

  return (
    <Box
      flexDirection="row"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '0 0 50px',
        gap: '8px',
        maxHeight: '40px',
        marginTop: '8px',
        marginLeft: '8px',
      }}
    >
      <Tooltip title="New Deck">
        <IconButton variant="soft" color="primary">
          <Add />
        </IconButton>
      </Tooltip>
      <Tooltip title="Save Deck">
        <IconButton variant="solid" color="primary">
          <Save />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copy Deck">
        <IconButton variant="soft" color="neutral">
          <ContentCopy />
        </IconButton>
      </Tooltip>
      <Tooltip title="Import Deck">
        <IconButton variant="soft" color="neutral">
          <ImportExport />
        </IconButton>
      </Tooltip>
      <Box alignSelf="center" sx={{ width: '200px' }}>
        <GempDropdown
          selectionChanged={setFormat}
          placeholder="Selected Format"
          options={Object.values(allPlayableFormatsMetadata).map((item) => ({
            apiName: item.apiName,
            displayName: item.displayName,
          }))}
          selectedValue={filters.format}
        />
      </Box>
      <span>Deck Title</span>
    </Box>
  );
}

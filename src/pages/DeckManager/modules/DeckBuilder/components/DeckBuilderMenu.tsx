import { Add, Save, ContentCopy, ImportExport } from '@mui/icons-material';
import { Tooltip, IconButton, Box } from '@mui/joy';
import { useState } from 'react';
import GempDropdown from '../../../../../common/components/GempDropdown/GempDropdown';
import { allPlayableFormatsMetadata } from '../../../../../lotr-common/types/expansions';
import { Mappings } from '../../../../../common/types/mappings.interface';

const formatChanged = (event: Mappings | undefined) => {
  console.log(event, 'something was updated');
};

export default function DeckBuilderMenu() {
  const [selectedValue, setSelectedValue] = useState<Mappings | undefined>(
    undefined
  );
  return (
    <Box
      flexDirection="row"
      sx={{
        display: 'flex',
        fleexDirection: 'row',
        gap: '8px',
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
      <GempDropdown
        selectionChanged={formatChanged}
        placeholder="Selected Format"
        options={Object.values(allPlayableFormatsMetadata).map((item) => ({
          apiName: item.value,
          displayName: item.displayName,
        }))}
        selectedValue={selectedValue}
      />
      <span>Deck Title</span>
    </Box>
  );
}

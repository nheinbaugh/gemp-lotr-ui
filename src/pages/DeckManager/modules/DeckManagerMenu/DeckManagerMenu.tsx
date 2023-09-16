import { Add, Save, ContentCopy, ImportExport } from '@mui/icons-material';
import { Tooltip, IconButton, Box } from '@mui/joy';

export default function DeckManagerMenu() {
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
      <span>Deck Title</span>
    </Box>
  );
}

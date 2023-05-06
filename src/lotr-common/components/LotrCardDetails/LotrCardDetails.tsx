import { Box } from '@mui/joy';

interface LotrCardDetailsProps {
  blueprintId: string;
}

function LotrCardDetails({ blueprintId }: LotrCardDetailsProps) {
  return <Box>This is a card details thing: {blueprintId}</Box>;
}

export default LotrCardDetails;

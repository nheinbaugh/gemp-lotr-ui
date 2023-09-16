import { Box } from '@mui/joy';
import LotrCard from '../../../lotr-common/components/LotrCard/LotrCard';

type CardPlaceholderProps = {
  blueprintId?: string;
  placeholder: string;
  vertical?: boolean;
  onSelect: VoidFunction;
};

/**
 * A Component that will display either an inputted Blueprint ID or a placeholder with a Title.
 * This is intended for use in places where the card displayed here may change (such as the Ring-Bearer in a deckbuilder experience)
 * @param {@see CardPlaceholderProps} Props
 * @returns
 */
export default function PlaceholderCard({
  placeholder,
  vertical = true,
  onSelect,
  blueprintId,
}: CardPlaceholderProps) {
  const longSide = '190px';
  const shortSide = '140px';
  const width = vertical ? shortSide : longSide;
  const height = vertical ? longSide : shortSide;
  if (!blueprintId) {
    return (
      <Box
        onClick={onSelect}
        sx={{
          width,
          height,
          backgroundColor: 'lightgray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <span>{placeholder}</span>
      </Box>
    );
  }
  return (
    <LotrCard
      blueprintId={blueprintId}
      width={140}
      onPrimaryAction={onSelect}
      onSecondaryAction={() => {}}
    />
  );
}

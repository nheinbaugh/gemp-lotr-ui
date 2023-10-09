import { Box } from '@mui/joy';
import LotrCard from '../../../lotr-common/components/LotrCard/LotrCard';
import { determineCardDimensions } from '../Card/types/card-dimension.functions';

type CardPlaceholderProps = {
  blueprintId?: string;
  placeholder: string;
  vertical?: boolean;
  height?: number;
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
  height = 220,
  onSelect,
  blueprintId,
}: CardPlaceholderProps) {
  let dimensions = determineCardDimensions(vertical, height, undefined);
  if (vertical) {
    dimensions = {
      width: Math.min(dimensions.height, dimensions.width),
      height: Math.max(dimensions.height, dimensions.width),
    };
  } else {
    dimensions = {
      width: Math.max(dimensions.height, dimensions.width),
      height: Math.min(dimensions.height, dimensions.width),
    };
  }
  if (!blueprintId) {
    return (
      <Box
        onClick={onSelect}
        sx={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
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
      width={
        vertical
          ? Math.min(dimensions.height, dimensions.width)
          : Math.max(dimensions.height, dimensions.width)
      }
      isHorizontal={!vertical}
      onPrimaryAction={onSelect}
      onSecondaryAction={() => {}}
    />
  );
}

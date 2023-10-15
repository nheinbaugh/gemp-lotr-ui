/* eslint-disable react/require-default-props -- not sure I care for this rule, but the prop really is optional... */
import { Box } from '@mui/joy';
import styles from './index.module.css';
import { determineCardDimensions } from './types/card-dimension.functions';
import { useCardDetailStore } from '../../../lotr-common/components/LotrCardDetails/card-details.state';

type CardProps = {
  cardId: string;
  imageHref: string;
  title: string;
  width?: number;
  height?: number;
  fallbackImage: string;
  onPrimaryAction: VoidFunction;
  onSecondaryAction: VoidFunction;
  isHorizontal: boolean;
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * LotrCard for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function GempCard({
  cardId,
  imageHref,
  title,
  height,
  width,
  fallbackImage,
  onPrimaryAction,
  onSecondaryAction,
  isHorizontal,
}: CardProps) {
  const dimensions = determineCardDimensions(isHorizontal, height, width);
  const { setHoverImage } = useCardDetailStore();
  const handleCardClick = (event: React.MouseEvent): void => {
    if (event.type === 'click') {
      onPrimaryAction();
    } else if (event.type === 'contextmenu') {
      onSecondaryAction();
      event.preventDefault();
    }
  };
  return (
    <Box
      sx={{
        height: dimensions.height,
        width: dimensions.width,
      }}
    >
      <object
        className={styles.cardFace}
        data={imageHref}
        onClick={handleCardClick}
        onContextMenu={handleCardClick} // note: this prevents all browser right click actions
      >
        <img
          onClick={handleCardClick}
          onMouseEnter={() => setHoverImage(cardId)}
          onMouseLeave={() => setHoverImage(null)}
          onContextMenu={handleCardClick} // note: this prevents all browser right click actions
          className={styles.cardFace}
          // onError={(imageHref = fallbackImage)}
          src={fallbackImage}
          alt={title}
        />
      </object>
    </Box>
  );
}

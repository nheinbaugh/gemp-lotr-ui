/* eslint-disable react/require-default-props -- not sure I care for this rule, but the prop really is optional... */
import { Box } from '@mui/joy';
import { useState } from 'react';
import styles from './index.module.css';
import { Dimensions } from '../../types/size-and-position';
import {
  getCardHeightByWidth,
  getCardWidthByHeight,
  getDefaultCardDimensions,
} from './types/card-dimension.functions';

type CardProps = {
  imageHref: string;
  title: string;
  width?: number;
  height?: number;
  fallbackImage: string;
  onPrimaryAction: VoidFunction;
  onSecondaryAction: VoidFunction;
};

const getCardDimensions = (height?: number, width?: number): Dimensions => {
  if (height) {
    return getCardWidthByHeight(height);
  }
  if (width) {
    return getCardHeightByWidth(width);
  }

  return getDefaultCardDimensions();
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * @see{LotrCard} for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function GempCard({
  imageHref,
  title,
  height,
  width,
  fallbackImage,
  onPrimaryAction,
  onSecondaryAction,
}: CardProps) {
  const dimensions = getCardDimensions(height, width);
  const [imageSource, setImageSource] = useState(imageHref);

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
      <img
        onClick={handleCardClick}
        onContextMenu={handleCardClick} // note: this prevents all browser right click actions
        className={styles.cardFace}
        onError={() => setImageSource(fallbackImage)}
        src={imageSource}
        alt={title}
      />
    </Box>
  );
}

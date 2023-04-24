/* eslint-disable react/require-default-props -- not sure I care for this rule, but the prop really is optional... */
import { Box } from '@mui/joy';
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
}: CardProps) {
  const dimensions = getCardDimensions(height, width);
  return (
    <Box
      sx={{
        height: dimensions.height,
        width: dimensions.width,
      }}
    >
      <img className={styles.cardFace} src={imageHref} alt={title} />
    </Box>
  );
}

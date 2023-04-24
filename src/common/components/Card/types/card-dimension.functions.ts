import { Dimensions } from '../../../types/size-and-position';

const WIDTH_TO_HEIGHT = 0.716;
const DEFAULT_WIDTH = 67;
const DEFAULT_HEIGHT = 88;

export const getCardHeightByWidth = (width: number): Dimensions => {
  return {
    width,
    height: Math.round(width / WIDTH_TO_HEIGHT),
  };
};

export const getCardWidthByHeight = (height: number): Dimensions => {
  return {
    height,
    width: Math.round(height * WIDTH_TO_HEIGHT),
  };
};

export const getDefaultCardDimensions = (): Dimensions => ({
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
});

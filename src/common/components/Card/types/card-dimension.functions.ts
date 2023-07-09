import { Dimensions } from '../../../types/size-and-position';

const WIDTH_TO_HEIGHT = 0.716;
const DEFAULT_WIDTH = 67;
const DEFAULT_HEIGHT = 88;

// this is based off the images I randomly checked.... could be wrong
const MAX_ALLOWED_WIDTH = 375;

export const getCardHeightByWidth = (width: number): Dimensions => {
  let actualWidth = width;
  if (actualWidth > MAX_ALLOWED_WIDTH) {
    actualWidth = MAX_ALLOWED_WIDTH;
  }
  return {
    width: actualWidth,
    height: Math.round(actualWidth / WIDTH_TO_HEIGHT),
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

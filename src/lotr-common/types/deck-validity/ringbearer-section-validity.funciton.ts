import { DeckValidityStatus } from '../../../common/types/deck/deck-validity-status.type';
import { DeckValidityFunction } from './deck-validity-function.type';

export const NO_RINGBEARER_MESSAGE = 'A Ring-bearer is required.';
export const NO_RING_MESSAGE = 'The One Ring is required.';
export const NO_RING_OR_RINGBEARER_MESSAGE =
  'The One Ring and a Ring-bearer are required.';

export const isRingbearerSectionValid: DeckValidityFunction = (deck) => {
  if (!deck.ringbearerId && !deck.ringId) {
    return {
      status: DeckValidityStatus.NotStarted,
      message: NO_RING_OR_RINGBEARER_MESSAGE,
    };
  }
  if (!deck.ringId) {
    return { status: DeckValidityStatus.Error, message: NO_RING_MESSAGE };
  }
  if (!deck.ringbearerId) {
    return { status: DeckValidityStatus.Error, message: NO_RINGBEARER_MESSAGE };
  }
  return { status: DeckValidityStatus.Ok, message: '' };
};

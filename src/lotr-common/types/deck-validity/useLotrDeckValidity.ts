import { Deck } from '../../../common/types/deck/Deck';
import { LotrFormatMetadata } from '../expansions/lotr-expansion-metadata.interface';
import { isRingbearerSectionValid } from './ringbearer-section-validity.funciton';
import { useIsDeckSectionValid } from './useIsDeckSectionValid';

export default function useLotrDeckValidity(
  deck: Deck,
  format: LotrFormatMetadata
) {
  const ringbearerValidity = useIsDeckSectionValid(
    deck,
    format,
    isRingbearerSectionValid
  );
  return {
    isDeckValid: false,
    deckValidity: {
      ringbearer: ringbearerValidity,
      errors: [],
      warnings: [],
    },
  };
}

import { Deck } from '../../../common/types/deck/Deck';
import { DeckValidityStatus } from '../../../common/types/deck/deck-validity-status.type';

export interface DeckValidationResult {
  message: string;
  status: DeckValidityStatus;
}

export type DeckValidityFunction = (deck: Deck) => DeckValidationResult;

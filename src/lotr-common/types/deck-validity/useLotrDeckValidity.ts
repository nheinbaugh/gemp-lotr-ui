import { useState, useEffect } from 'react';
import { Deck } from '../../../common/types/deck/Deck';
import { DeckValidationResult } from './deck-validity-function.type';
import { DeckValidityStatus } from '../../../common/types/deck/deck-validity-status.type';
import { isRingbearerSectionValid } from './ringbearer-section-validity.funciton';

const defaultValidityState: DeckValidationResult = {
  status: DeckValidityStatus.NotStarted,
  message: '',
};

export default function useLotrDeckValidity(deck: Deck) {
  const [ringbearerValidity, setRingbearerValidity] =
    useState(defaultValidityState);
  console.log('this hook ran again');
  useEffect(() => {
    setRingbearerValidity(isRingbearerSectionValid(deck));
    console.log('this hook effect ran again');
  }, [deck]);
  return {
    isDeckValid: false,
    deckValidity: {
      ringbearer: ringbearerValidity,
      errors: [],
      warnings: [],
    },
  };
}

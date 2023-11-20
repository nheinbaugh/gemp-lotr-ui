import { expect, describe, it } from 'vitest';
import {
  NO_RINGBEARER_MESSAGE,
  NO_RING_MESSAGE,
  NO_RING_OR_RINGBEARER_MESSAGE,
  isRingbearerSectionValid,
} from './ringbearer-section-validity.funciton';
import { Deck } from '../../../common/types/deck/Deck';
import { DeckValidityStatus } from '../../../common/types/deck/deck-validity-status.type';

describe('ringbearer-section-validity.function', () => {
  it('should return an OK status and an empty message if the deck has a ring and a ring-bearer', () => {
    const deck: Deck = {
      ringbearerId: '1',
      ringId: '2',
    } as Deck;
    const result = isRingbearerSectionValid(deck);

    expect(result.status).toBe(DeckValidityStatus.Ok);
  });

  it('should return an error message when there is no ring', () => {
    const deck: Deck = {
      ringbearerId: '1',
      ringId: '',
    } as Deck;
    const result = isRingbearerSectionValid(deck);

    expect(result.status).toBe(DeckValidityStatus.Error);
    expect(result.message).toBe(NO_RING_MESSAGE);
  });

  it('should return an error message when there is no ringbearer', () => {
    const deck: Deck = {
      ringId: '1_231',
      ringbearerId: '',
    } as Deck;
    const result = isRingbearerSectionValid(deck);

    expect(result.status).toBe(DeckValidityStatus.Error);
    expect(result.message).toBe(NO_RINGBEARER_MESSAGE);
  });

  it('should return an error message when there is no ringbearer OR ring', () => {
    const deck: Deck = {
      ringId: '',
      ringbearerId: '',
    } as Deck;
    const result = isRingbearerSectionValid(deck);

    expect(result.status).toBe(DeckValidityStatus.NotStarted);
    expect(result.message).toBe(NO_RING_OR_RINGBEARER_MESSAGE);
  });
});

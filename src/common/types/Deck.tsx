import { createDefaultLocations } from './LotrLocations/lotr-location-functions';
import { LotrLocations } from './LotrLocations/lotr-locations.type';

export interface Deck {
  name?: string;
  owner?: string;
  ringbearerId?: string;
  locations: LotrLocations;
  ringId?: string;
  cards: {
    blueprintId: string;
    count: number;
  }[];
}

export const createDefaultDeck = (): Deck => ({
  name: 'foobar',
  owner: '',
  ringbearerId: '',
  ringId: '',
  cards: [],
  locations: createDefaultLocations(),
});

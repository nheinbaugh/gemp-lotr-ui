export interface Deck {
  name?: string;
  owner?: string;
  ringbearerId?: string;
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
});

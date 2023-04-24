import { DecipherSets, PlayersCommitteeSets } from '../expansions';

export interface CardBlueprint {
  cardNumber: number;
  set: DecipherSets | PlayersCommitteeSets;
  formattedCardNumber: string;
  formattedSetNumber: string;

  imageUrl: string;
}

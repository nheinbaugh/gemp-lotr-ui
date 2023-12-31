import {
  DecipherSets,
  PlayersCommitteeSets,
  allExpansionsMetadata,
  decipherSetExpansionMetadata,
} from '../expansions';
import { getImageUrl } from '../image-resolver/image-resolver';
import { CardBlueprint } from './card-blueprint.interface';

/**
 * Given a card number format it into a properly padded ID
 * @param cardNumber the number of the card
 * @returns The string ID of the card
 */
export const formatCardNumber = (cardNumber: number): string => {
  if (cardNumber < 10) {
    return `00${cardNumber}`;
  }
  if (cardNumber < 100) {
    return `0${cardNumber}`;
  }
  return `${cardNumber}`;
};

/**
 * Convert a number into a padded ID for the set
 * @param setNumber The number of the set (e.g. 4)
 * @returns The properly padded ID for the set (e.g. 04) as a string
 */
export const formatSetNumber = (setNumber: number): string => {
  if (setNumber < 10) return `0${setNumber}`;
  return setNumber.toString();
};

/**
 * Given a card ID from the API convert it into the CardBlueprint viewmodel
 */
export const getBlueprintByCardId = (id: string): CardBlueprint => {
  const separator = '_';
  const sections = id.split(separator);

  const cardNumber = Number(sections[1]);
  const setNumber = Number(sections[0]);
  const set = Object.entries(decipherSetExpansionMetadata).find(
    ([, metadata]) => {
      return Number(metadata.value) === setNumber;
    }
  )?.[0] as DecipherSets | PlayersCommitteeSets;
  return {
    set,
    cardNumber,
    formattedCardNumber: formatCardNumber(cardNumber),
    formattedSetNumber: formatSetNumber(setNumber),
    imageUrl: getImageUrl(id),
  };
};

/**
 * Given a blueprint convert into the expected ID format
 * @param blueprint The blueprint of the card
 * @returns A string representing the way the card is defined (e.g. "04001" for the first card of set four)
 */
export const getCardNumber = (blueprint: CardBlueprint): string => {
  return `${formatSetNumber(
    Number(allExpansionsMetadata[blueprint.set].value)
  )}${formatCardNumber(blueprint.cardNumber)}`;
};

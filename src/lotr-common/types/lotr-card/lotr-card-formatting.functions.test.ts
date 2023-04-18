import { describe, expect, it } from 'vitest';

import { CardBlueprint } from './card-blueprint.interface';
import {
  formatCardNumber,
  formatSetNumber,
  getBlueprintByCardId,
  getCardNumber,
} from './lotr-card-formatting.functions';

describe('card-formatting.functions', () => {
  describe('getCardNumber', () => {
    it('should return the expected value when passed card blueprints', () => {
      expect(
        getCardNumber({
          set: 'TheTwoTowers',
          cardNumber: 23,
          formattedCardNumber: '023',
          formattedSetNumber: '04',
        })
      ).toEqual('04023');
      expect(
        getCardNumber({
          set: 'Bloodlines',
          cardNumber: 423,
          formattedCardNumber: '423',
          formattedSetNumber: '13',
        })
      ).toEqual('13423');
    });
  });

  describe('fomatCardNumber', () => {
    it('should return the string version of any number above 100', () => {
      expect(formatCardNumber(234)).toEqual('234');
    });

    it('should prefix a single 0 to a number between 10-99', () => {
      expect(formatCardNumber(13)).toEqual('013');
    });

    it('should prefix two 0s to a number between 1 and 10', () => {
      expect(formatCardNumber(7)).toEqual('007');
    });

    it('should return 000 when given 0 as input', () => {
      expect(formatCardNumber(0)).toEqual('000');
    });
  });

  describe('formatSetNumber', () => {
    it('should prefix a numbers below 10 with a zero', () => {
      expect(formatSetNumber(3)).toEqual('03');
    });

    it('should return 00 when given zero', () => {
      expect(formatSetNumber(0)).toEqual('00');
    });

    it('should return the stringified number of any value over 9', () => {
      expect(formatSetNumber(14)).toEqual('14');
    });
  });

  describe('getBlueprintByCardId', () => {
    it('should return a blueprint with set 1 and card 1 when passed 1_1', () => {
      const input = '1_1';
      const expected: CardBlueprint = {
        set: 'FellowshipOfTheRing',
        cardNumber: 1,
        formattedCardNumber: '001',
        formattedSetNumber: '01',
      };
      expect(getBlueprintByCardId(input)).toStrictEqual(expected);
    });

    it('should return a blueprint with set 1 and card 1 when passed 0000001_0000001s', () => {
      const input = '0000001_0000001';
      const expected: CardBlueprint = {
        set: 'FellowshipOfTheRing',
        cardNumber: 1,
        formattedCardNumber: '001',
        formattedSetNumber: '01',
      };
      expect(getBlueprintByCardId(input)).toStrictEqual(expected);
    });
  });
});

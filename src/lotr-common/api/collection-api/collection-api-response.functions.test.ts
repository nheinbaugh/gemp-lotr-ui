import { describe, expect, it } from 'vitest';
import { load } from 'cheerio';
import {
  convertCollectionCardXmlToViewModel,
  convertGetCollectionFromXml,
} from './collection-api-response.functions';
import { sideMappings } from '../../types/filter-types/side.type';

const mockResponse = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<collection count="3823">
    <card blueprintId="2_16" count="4" group="fp" side="FREE_PEOPLE"/>
    <card blueprintId="12_3" count="4" group="fp" side="FREE_PEOPLE"/>
    <card blueprintId="10_19" count="4" group="shadow" side="SHADOW"/>
</collection>`;

describe('collection-api-response.functions', () => {
  describe('convertResponseToJson', () => {
    it('should return the correct number of cards that were included in the response', () => {
      const actual = convertGetCollectionFromXml(mockResponse);

      expect(actual.count).toBe(3823);
    });

    it('should return the correct number of card objects in the response', () => {
      const actual = convertGetCollectionFromXml(mockResponse);

      expect(actual.cards.length).toBe(3);
    });
  });

  describe('convertCollectionCardXmlToViewModel', () => {
    const shadow =
      '<card blueprintId="10_19" count="4" group="shadow" side="SHADOW"/>';
    const freeps =
      '<card blueprintId="12_3" count="4" group="fp" side="FREE_PEOPLE"/>';

    const data = load(shadow)('card')[0];
    const freepData = load(freeps)('card')[0];

    it('should properly parse the card side', () => {
      const shadowActual = convertCollectionCardXmlToViewModel(data);
      const freepActual = convertCollectionCardXmlToViewModel(freepData);

      expect(shadowActual.side).toBe(sideMappings.Shadow.apiName);
      expect(freepActual.side).toBe(sideMappings.FreePeople.apiName);
    });

    it('should properly parse the blueprintId', () => {
      const actual = convertCollectionCardXmlToViewModel(freepData);
      const expected = '12_3';

      expect(actual.blueprintId).toBe(expected);
    });

    it('should properly parse the count', () => {
      const actual = convertCollectionCardXmlToViewModel(freepData);
      const expected = 4;

      expect(actual.count).toBe(expected);
    });
  });
});

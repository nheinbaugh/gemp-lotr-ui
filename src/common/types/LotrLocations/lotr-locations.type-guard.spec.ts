import { describe, expect, it } from 'vitest';
import { LotrLocationNames } from './lotr-locations.type';
import { isLotrLocation } from './lotr-locations.type-guard';

describe('LOTR Location Type Guard', () => {
  it.each([
    LotrLocationNames.SiteOne,
    LotrLocationNames.SiteTwo,
    LotrLocationNames.SiteThree,
    LotrLocationNames.SiteFour,
    LotrLocationNames.SiteFive,
    LotrLocationNames.SiteSix,
    LotrLocationNames.SiteSeven,
    LotrLocationNames.SiteEight,
    LotrLocationNames.SiteNine,
  ])(
    'should return true when a valid value is provided',
    (siteName: string) => {
      expect(isLotrLocation(siteName)).toBeTruthy();
    }
  );

  it('should return false when an invalid value is provided', () => {
    expect(isLotrLocation('star wars is the best')).toBeFalsy();
  });
});

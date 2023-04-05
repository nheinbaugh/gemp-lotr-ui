import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type PlayersCommitteeErrata =
  | 'AgesEndErrata'
  | 'BloodlinesErrata'
  | 'ElfLordsErrata'
  | 'FellowshipErrata'
  | 'HuntersErrata'
  | 'MoriaErrata'
  | 'ReflectionsErrata'
  | 'ReturnOfTheKingErrata'
  | 'ShadowsErrata'
  | 'SiegeOfGondorErrata'
  | 'TwoTowerErrata';

export const playersCommitteeErrataMetadata: Record<
  PlayersCommitteeErrata,
  LotrExpansionMetadata
> = {
  AgesEndErrata: { displayName: '19E - Ages End (PC Errata)', value: '69' },
  BloodlinesErrata: {
    displayName: '13E - Bloodlines (PC Errata)',
    value: '63',
  },
  ElfLordsErrata: {
    displayName: '03E - Realms of the Elf-lords (PC Errata)',
    value: '53',
  },
  FellowshipErrata: {
    displayName: '01E - The Fellowship of the Ring (PC Errata)',
    value: '51',
  },
  HuntersErrata: { displayName: '15E - The Hunters (PC Errata)', value: '65' },
  MoriaErrata: { displayName: '02E - Mines of Moria (PC Errata)', value: '52' },
  ReflectionsErrata: {
    displayName: '09E - Reflections (PC Errata)',
    value: '59',
  },
  ReturnOfTheKingErrata: {
    displayName: '07E - The Return of the King (PC Errata)',
    value: '57',
  },
  ShadowsErrata: { displayName: '11E - Shadows (PC Errata)', value: '61' },
  SiegeOfGondorErrata: {
    displayName: '08E - Siege of Gondor (PC Errata)',
    value: '58',
  },
  TwoTowerErrata: {
    displayName: '04E - The Two Towers (PC Errata)',
    value: '54',
  },
};

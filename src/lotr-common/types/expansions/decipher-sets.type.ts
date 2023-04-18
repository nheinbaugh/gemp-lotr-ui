import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type DecipherSets =
  | 'Promo'
  | 'FellowshipOfTheRing'
  | 'MinesOfMoria'
  | 'RealmsOfTheElfLords'
  | 'TheTwoTowers'
  | 'BattleOfHelmsDeep'
  | 'EntsOfFangorn'
  | 'ReturnOfTheKing'
  | 'SiegeOfGondor'
  | 'Reflections'
  | 'MtDoom'
  | 'Shadows'
  | 'BlackRider'
  | 'Bloodlines'
  | 'ExpandedMiddleEarth'
  | 'Hunters'
  | 'WraithCollection'
  | 'RiseOfSaruman'
  | 'TreacheryAndDeceit'
  | 'AgesEnd';

export const decipherSetExpansionMetadata: Record<
  DecipherSets,
  LotrExpansionMetadata
> = {
  Promo: { displayName: 'Promo', value: '00' },
  FellowshipOfTheRing: {
    displayName: '01 - The Fellowship of the Ring',
    value: '01',
  },
  MinesOfMoria: { displayName: '02 - Mines of Moria', value: '02' },
  RealmsOfTheElfLords: {
    displayName: '03 - Realms of the Elf-lords',
    value: '03',
  },
  TheTwoTowers: { displayName: '04 - The Two Towers', value: '04' },
  BattleOfHelmsDeep: { displayName: "05 - Battle of Helm's Deep", value: '05' },
  EntsOfFangorn: { displayName: '06 - Ents of Fangorn', value: '06' },
  ReturnOfTheKing: { displayName: '07 - The Return of the King', value: '07' },
  SiegeOfGondor: { displayName: '08 - Siege of Gondor', value: '08' },
  Reflections: { displayName: '09 - Reflections', value: '09' },
  MtDoom: { displayName: '10 - Mount Doom', value: '10' },
  Shadows: { displayName: '11 - Shadows', value: '11' },
  BlackRider: { displayName: '12 - Black Rider', value: '12' },
  Bloodlines: { displayName: '13 - Bloodlines', value: '13' },
  ExpandedMiddleEarth: {
    displayName: '14 - Expanded Middle-earth',
    value: '14',
  },
  Hunters: { displayName: '15 - The Hunters', value: '15' },
  WraithCollection: { displayName: '16 - The Wraith Collection', value: '16' },
  RiseOfSaruman: { displayName: '17 - Rise of Saruman', value: '17' },
  TreacheryAndDeceit: { displayName: '18 - Treachery & Deceit', value: '18' },
  AgesEnd: { displayName: '19 - Ages End', value: '19' },
};
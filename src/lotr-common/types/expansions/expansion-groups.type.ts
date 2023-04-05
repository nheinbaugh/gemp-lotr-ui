import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type ExpansionGroups =
  | 'All'
  | 'AllPc'
  | 'DeciperSets'
  | 'EnhancedTowersStandard'
  | 'Expanded'
  | 'ExpandedPc'
  | 'FellowshipBlock'
  | 'FellowshipBlockPc'
  | 'French'
  | 'Hobbit'
  | 'HuntersBlock'
  | 'KingBlock'
  | 'KingStandard'
  | 'Movie'
  | 'MovieBlockPc'
  | 'PcErrata'
  | 'PcVsets'
  | 'Standard'
  | 'TowersBlock'
  | 'TowersStandard'
  | 'WarOftheRingBlock'
  | 'WarOfTheRingStandard';

export const expansionGroupMetadata: Record<
  ExpansionGroups,
  LotrExpansionMetadata
> = {
  All: { displayName: 'All Sets', value: '0-34,50-200' },
  AllPc: { displayName: "All Player's Council Cards", value: '' },
  DeciperSets: { displayName: 'Official Decipher Sets', value: '0-19' },
  EnhancedTowersStandard: {
    displayName: 'Enhanced Towers Standard',
    value: 'ts_reflections',
  },
  Expanded: { displayName: 'Expanded', value: '' },
  ExpandedPc: { displayName: 'Expanded (PC)', value: '' },
  FellowshipBlock: { displayName: 'Fellowship Block', value: 'fotr_block' },
  FellowshipBlockPc: {
    displayName: 'Fellowship Block (PC)',
    value: 'pc_fotr_block',
  },
  French: { displayName: 'French Format', value: 'french' },
  Hobbit: { displayName: 'The Hobbit Sets', value: '30-33' },
  HuntersBlock: { displayName: 'Hunters Block', value: 'hunter_block' },
  KingBlock: { displayName: 'King Block', value: 'king_block' },
  KingStandard: { displayName: 'King Standard', value: 'rotk_sta' },
  Movie: { displayName: 'Movie Block', value: 'movie' },
  MovieBlockPc: { displayName: 'Movie Block (PC)', value: 'pc_movie' },
  PcErrata: { displayName: "Player's Council Errata", value: '50-69,100' },
  PcVsets: { displayName: "Player's Council VSets", value: '100-149' },
  Standard: { displayName: 'Standard', value: 'standard' },
  TowersBlock: { displayName: 'Towers Block', value: 'ttt_block' },
  TowersStandard: { displayName: 'Towers Standard', value: 'towers_standard' },
  WarOftheRingBlock: {
    displayName: 'War of the Ring Block',
    value: 'war_block',
  },
  WarOfTheRingStandard: {
    displayName: 'War of the Ring Standard',
    value: 'war_standard',
  },
};

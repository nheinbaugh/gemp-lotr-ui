import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type OtherFormats =
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

export type CommonFormats =
  | 'All'
  | 'AllPc'
  | 'DeciperSets'
  | 'HobbitSets'
  | 'AllPcErrata'
  | 'AllPcVSets';

export const commonFormatsMetadata: Record<
  CommonFormats,
  LotrExpansionMetadata
> = {
  All: { displayName: 'All Sets', value: '0-34,50-200' },
  AllPc: { displayName: "All Player's Council Cards", value: '50-69,100-149' },
  DeciperSets: { displayName: 'Official Decipher Sets', value: '0-19' },
  HobbitSets: { displayName: 'The Hobbit Sets', value: '30-33' },
  AllPcErrata: { displayName: "All Player's Errata", value: '50-69,100' },
  AllPcVSets: { displayName: "All Player's VSets", value: '100-149' },
};

export const otherFormatMetadata: Record<OtherFormats, LotrExpansionMetadata> =
  {
    EnhancedTowersStandard: {
      displayName: 'Enhanced Towers Standard',
      value: 'ts_reflections',
    },
    Expanded: { displayName: 'Expanded', value: 'expanded' },
    ExpandedPc: { displayName: 'Expanded (PC)', value: 'pc_expanded' },
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
    TowersStandard: {
      displayName: 'Towers Standard',
      value: 'towers_standard',
    },
    WarOftheRingBlock: {
      displayName: 'War of the Ring Block',
      value: 'war_block',
    },
    WarOfTheRingStandard: {
      displayName: 'War of the Ring Standard',
      value: 'war_standard',
    },
  };

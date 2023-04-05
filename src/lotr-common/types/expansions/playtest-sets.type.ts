import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type PlaytestSets =
  | 'AllPlaytest'
  | 'ExpandedPlaytest'
  | 'FellowshipPlaytest'
  | 'MovieBlockPlaytest';

export const playtestSetExpansionMetadata: Record<
  PlaytestSets,
  LotrExpansionMetadata
> = {
  AllPlaytest: {
    displayName: "All Player's Council Playtest Cards",
    value: '70-89,100,150-200',
  },
  ExpandedPlaytest: {
    displayName: 'PLAYTEST - Expanded (PC)',
    value: 'test_pc_fotr_block',
  },
  FellowshipPlaytest: {
    displayName: 'PLAYTEST - Fellowship Block (PC)',
    value: 'test_pc_fotr',
  },
  MovieBlockPlaytest: {
    displayName: 'PLAYTEST - Movie Block (PC)',
    value: 'test_pc_movie',
  },
};

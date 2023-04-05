import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';

export type PlayersCommitteeSets =
  | 'HobbitMain'
  | 'HobbitExpansionOne'
  | 'HobbitExpansionTwo'
  | 'HobbitExpansionThree'
  | 'ShadowsOfThePast';

export const playersCommitteeExpansionMetadata: Record<
  PlayersCommitteeSets,
  LotrExpansionMetadata
> = {
  HobbitMain: { value: '30', displayName: '30 - The Hobbit: Main Deck' },
  HobbitExpansionOne: {
    value: '31',
    displayName: '31 - The Hobbit: Expansion 1',
  },
  HobbitExpansionTwo: {
    value: '32',
    displayName: '32 - The Hobbit: Expansion 2',
  },
  HobbitExpansionThree: {
    value: '33',
    displayName: '33 - The Hobbit: Expansion 3',
  },
  ShadowsOfThePast: {
    value: '150,151',
    displayName: 'V1 - Shadow of the Past (PC)',
  },
};

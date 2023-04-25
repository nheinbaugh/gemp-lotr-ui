import {
  decipherSetExpansionMetadata,
  DecipherSets,
} from './decipher-sets.type';
import {
  CommonFormats,
  otherFormatMetadata,
  OtherFormats,
} from './formats.type';
import { LotrExpansionMetadata } from './lotr-expansion-metadata.interface';
import {
  PlayersCommitteeErrata,
  playersCommitteeErrataMetadata,
} from './players-committee-errata.type';
import {
  playersCommitteeExpansionMetadata,
  PlayersCommitteeSets,
} from './players-committee-sets.type';
import {
  playtestSetExpansionMetadata,
  PlaytestSets,
} from './playtest-sets.type';

export type LotrExpansions =
  | DecipherSets
  | PlayersCommitteeSets
  | PlayersCommitteeErrata
  | PlaytestSets;

export type LotrFormats = CommonFormats | OtherFormats;

export const allExpansionsMetadata: Record<
  LotrExpansions,
  LotrExpansionMetadata
> = {
  ...decipherSetExpansionMetadata,
  ...otherFormatMetadata,
  ...playersCommitteeErrataMetadata,
  ...playtestSetExpansionMetadata,
  ...playersCommitteeExpansionMetadata,
};

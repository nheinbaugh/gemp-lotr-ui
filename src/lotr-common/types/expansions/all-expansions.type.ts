import {
  decipherSetExpansionMetadata,
  DecipherSets,
} from './decipher-sets.type';
import {
  CommonFormats,
  commonFormatsMetadata,
  otherFormatMetadata,
  OtherFormats,
} from './formats.type';
import { LotrFormatMetadata } from './lotr-expansion-metadata.interface';
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

export const allPlayableFormatsMetadata: Record<
  LotrFormats,
  LotrFormatMetadata
> = { ...commonFormatsMetadata, ...otherFormatMetadata };

export const allExpansionsMetadata: Record<LotrExpansions, LotrFormatMetadata> =
  {
    ...decipherSetExpansionMetadata,
    ...otherFormatMetadata,
    ...playersCommitteeErrataMetadata,
    ...playtestSetExpansionMetadata,
    ...playersCommitteeExpansionMetadata,
  };

import { Mappings } from '../../../common/types/mappings.interface';
import { LotrExpansionMetadata } from '../../types/expansions/lotr-expansion-metadata.interface';

export interface CollectionApiParameters {
  participantId: string | null;
  filter: CollectionApiFilterDAO;
  start: number;
  count: number;
}

export interface CollectionFiltersViewModel {
  side?: Mappings;
  type?: Mappings;
  rarity?: Mappings;
  sets?: LotrExpansionMetadata;
  words?: Mappings;
  cardTypes?: Mappings;
  cultures?: string[];
  keywords?: Mappings;
  siteNumber?: Mappings;
  races?: Mappings;
  itemClasses?: Mappings;
  phases?: Mappings;
}

export interface CollectionApiFilterDAO {
  side: string;
  type: string;
  rarity: string;
  sets: string;
  words: string;
  cardTypes: string;
  cultures: string;
  keywords: string;
  siteNumber: string;
  races: string;
  itemClasses: string;
  phases: string;
}

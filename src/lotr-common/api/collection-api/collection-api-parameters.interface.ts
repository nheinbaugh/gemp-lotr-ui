import { Side } from "../../types/filter-types/side.type";

export interface CollectionApiParameters {
  participantId: string;
  filter: CollectionApiFilters;
  start: number;
  count: number;
}

export interface CollectionApiFilters {
  side: Side;
  type: string;
  rarity: string;
  sets: string[];
  words: string[];
  cardTypes: string[];
  cultures: string[];
  keywords: string[];
  siteNumber: number;
  races: string[];
  itemClasses: string[];
  phases: string[];
}

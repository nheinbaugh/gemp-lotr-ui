export interface CollectionApiParameters {
  participantId: string | null;
  filter: CollectionApiFilterDAO;
  start: number;
  count: number;
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

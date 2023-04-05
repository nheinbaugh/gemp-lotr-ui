export type LotrSortingTypes =
  | 'Name'
  | 'Culture'
  | 'Twilight'
  | 'Site Number'
  | 'Strength'
  | 'Vitality'
  | 'Card Type';

export const lotrSortTypeMappings: Record<LotrSortingTypes, string> = {
  Name: 'name',
  Culture: 'culture,name',
  Twilight: 'twilight,name',
  Strength: 'strength,name',
  Vitality: 'vitality,name',
  'Card Type': 'cardType,name',
  'Site Number': 'siteNumber,name',
};

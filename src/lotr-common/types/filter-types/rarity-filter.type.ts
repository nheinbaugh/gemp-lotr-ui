export type CardRarity =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Rare+'
  | 'Alternate Image'
  | 'Promo'
  | 'Fixed'
  | "Poorman's";

export const rarityMappings: Record<CardRarity, string> = {
  'Alternate Image': 'AI',
  Common: 'C',
  Fixed: 'F',
  Uncommon: 'U',
  Rare: 'R',
  'Rare+': 'R+',
  Promo: 'P',
  "Poorman's": 'C,U,P,S',
};

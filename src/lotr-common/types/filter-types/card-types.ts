export type LotrCardTypes =
  | 'Characters'
  | 'Items'
  | 'Sites'
  | 'Allies'
  | 'Artifacts'
  | 'Conditions'
  | 'Companions'
  | 'Events'
  | 'Followers'
  | 'Minions'
  | 'Possessions';

export const lotrCardTypeMappings: Record<LotrCardTypes, string> = {
  Characters: 'COMPANION,ALLY,MINION',
  Items: 'POSSESSION,ARTIFACT',
  Sites: 'SITE',
  Allies: 'ALLY',
  Artifacts: 'ARTIFACT',
  Conditions: 'CONDITION',
  Companions: 'COMPNAION',
  Events: 'EVENT',
  Followers: 'FOLLOWER',
  Minions: 'MINION',
  Possessions: 'POSSESSION',
};

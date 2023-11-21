import { Mappings } from '../../../common/types/mappings.interface';

enum LotrCardTypes {
  Characters = 'Characters',
  Items = 'Items',
  Sites = 'Sites',
  Allies = 'Allies',
  Artifacts = 'Artifacts',
  Conditions = 'Conditions',
  Companions = 'Companions',
  Events = 'Events',
  Followers = 'Followers',
  Minions = 'Minions',
  Possessions = 'Possessions',
  OneRing = 'OneRing',
  RingBearer = 'RingBearer',
}

export const lotrCardTypeFilterMappings: Record<LotrCardTypes, Mappings> = {
  Characters: { apiName: 'COMPANION,ALLY,MINION', displayName: 'Characters' },
  Items: { apiName: 'POSSESSION,ARTIFACT', displayName: 'Items' },
  Sites: { apiName: 'SITE', displayName: 'Sites' },
  Allies: { apiName: 'ALLY', displayName: 'Allies' },
  Artifacts: { apiName: 'ARTIFACT', displayName: 'Artifacts' },
  Conditions: { apiName: 'CONDITION', displayName: 'Conditions' },
  Companions: { apiName: 'COMPNAION', displayName: 'Companions' },
  Events: { apiName: 'EVENT', displayName: 'Events' },
  Followers: { apiName: 'FOLLOWER', displayName: 'Followers' },
  Minions: { apiName: 'MINION', displayName: 'Minions' },
  Possessions: { apiName: 'POSSESSION', displayName: 'Possessions' },
  OneRing: {
    displayName: 'The One Ring',
    apiName: 'THE_ONE_RING',
  },
  RingBearer: {
    displayName: 'Can Start with Ring',
    apiName: 'CAN_START_WITH_RING',
  },
};

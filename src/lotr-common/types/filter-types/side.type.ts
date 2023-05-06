import { Mappings } from '../../../common/types/mappings.interface';

enum Side {
  FreePeople = 'FreePeople',
  Shadow = 'Shadow',
}

export const sideMappings: Record<Side, Mappings> = {
  FreePeople: {
    apiName: 'FREE_PEOPLE',
    displayName: 'Free Peoples',
  },
  Shadow: {
    apiName: 'SHADOW',
    displayName: 'Shadow',
  },
};

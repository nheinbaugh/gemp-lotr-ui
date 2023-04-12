import { Mappings } from '../../../common/types/mappings.interface';

enum Side {
  FreePeople = 'FreePeople',
  Shadow = 'Shadow',
}

export const sideMappings: Record<Side, Mappings> = {
  FreePeople: {
    apiName: '',
    displayName: 'Free Peoples',
  },
  Shadow: {
    apiName: '',
    displayName: 'Shadow',
  },
};

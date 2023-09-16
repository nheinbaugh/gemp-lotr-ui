import { LotrLocationNames } from './lotr-locations.type';

const locationNameValues: Array<string> = Object.values(LotrLocationNames);
export const isLotrLocation = (input: string): input is LotrLocationNames => {
  return locationNameValues.includes(input);
};

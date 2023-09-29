import { LotrLocationNames } from './lotr-locations.type';

// TODO: Find out if I should delete this, I think so. It was to type guard an enum
const locationNameValues: Array<string> = Object.values(LotrLocationNames).map(
  (value) => value.toString()
);
export const isLotrLocation = (input: string): input is LotrLocationNames => {
  return locationNameValues.includes(input);
};

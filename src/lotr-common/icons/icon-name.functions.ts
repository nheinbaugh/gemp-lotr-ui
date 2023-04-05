import dwarven from '@gemp-assets/icons/cultures/dwarven.svg';
import elven from '@gemp-assets/icons/cultures/elven.svg';
import raider from '@gemp-assets/icons/cultures/raider.svg';
import { IconName } from './icons.type';

// todo: ideally this would be auto generated when we add icons :shrug: --nickh
// aaaaand there should be a global version of it i guess --nickh
export const getIconByName = (name: IconName): string => {
  switch (name) {
    case 'dwarven-culture':
      return dwarven;
    case 'elven-culture':
      return elven;
    default:
      return raider;
  }
};

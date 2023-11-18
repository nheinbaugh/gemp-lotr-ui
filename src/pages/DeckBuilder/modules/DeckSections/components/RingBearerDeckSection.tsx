import { useEffect, useState } from 'react';
import { FilterableDeckSection } from '../types/filterable-deck-section.interface';
import DeckSectionTemplate from './DeckSectionTemplate';

const sections: FilterableDeckSection[] = [
  {
    placeholder: 'Ring-Bearer',
    filterName: 'ring-bearer',
    cardId: '',
    isVertical: true,
  },
  {
    placeholder: 'The One Ring',
    filterName: 'ring',
    cardId: '',
    isVertical: true,
  },
];

const getDefaultDeckSectionProps = (): FilterableDeckSection[] => sections;

interface RingBearerDeckSectionProps {
  ring: string;
  ringBearer: string;
  updateFilter: (filterName: string) => void;
}

export default function RingBearerDeckSection(
  props: RingBearerDeckSectionProps
) {
  const { ring, ringBearer, updateFilter } = props;

  const [formattedSections, setFormattedSections] =
    useState<FilterableDeckSection[]>(sections);

  useEffect(() => {
    const formatted = getDefaultDeckSectionProps().map((section) => {
      if (section.filterName === 'ring') {
        return {
          ...section,
          cardId: ring,
        };
      }
      if (section.filterName === 'ring-bearer') {
        return {
          ...section,
          cardId: ringBearer,
        };
      }
      return false;
    });
    setFormattedSections(formatted.filter(Boolean) as FilterableDeckSection[]);
  }, [ring, ringBearer, setFormattedSections]);

  return (
    <DeckSectionTemplate
      sections={formattedSections}
      onSectionChange={updateFilter}
    />
  );
}

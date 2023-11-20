import { useEffect, useState } from 'react';
import { LotrLocations } from '../../../../../../common/types/LotrLocations/lotr-locations.type';
import DeckSectionTemplate from '../DeckSectionTemplate';
import { FilterableDeckSection } from '../../types/filterable-deck-section.interface';
import { formatSiteSelections } from './format-site-selections.functions';
import { getSelectedSiteSectionMappings } from './selected-site-sections';

type LocationDeckSectionProps = {
  selectedSites: LotrLocations;
  updateFilteredSites: (siteName: string) => void;
};

export default function LocationDeckSection(props: LocationDeckSectionProps) {
  const { updateFilteredSites, selectedSites } = props;

  const [formattedSelections, setFormattedSelections] = useState<
    FilterableDeckSection[]
  >([]);

  useEffect(() => {
    setFormattedSelections(formatSiteSelections(selectedSites));
  }, [selectedSites, setFormattedSelections]);

  const doSelectionChanged = (section: string) => {
    const match = getSelectedSiteSectionMappings().find(
      (l) => l.filterName === section
    );
    if (!match) {
      return;
    }
    updateFilteredSites(match.filterName.toString());
  };
  return (
    <DeckSectionTemplate
      sections={formattedSelections}
      onSectionChange={doSelectionChanged}
      placeholderWidth="small"
    />
  );
}

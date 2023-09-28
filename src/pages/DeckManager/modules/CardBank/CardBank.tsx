import { Box } from '@mui/joy';
import SearchResults from './SearchResults';
import PageSelector from '../../components/PageSelector/PageSelector';
import { useCardQueryStore } from '../../../../lotr-common/state/card-filter.state';

type CardBankProps = {
  // yes these prop drills make me want to use a context, but I'm jamming
  onCardPrimaryAction: (blueprintId: string) => void;
  onCardSecondaryAction: (blueprintId: string) => void;
};

function CardBank({
  onCardPrimaryAction,
  onCardSecondaryAction,
}: CardBankProps) {
  const { results, setCurrentPage } = useCardQueryStore();

  return (
    <Box>
      <SearchResults
        cards={results}
        onCardPrimaryAction={onCardPrimaryAction}
        onCardSecondaryAction={onCardSecondaryAction}
      />
      <PageSelector pageUpdated={setCurrentPage} />
    </Box>
  );
}

export default CardBank;

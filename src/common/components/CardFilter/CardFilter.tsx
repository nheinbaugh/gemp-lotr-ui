import CardTypeSelector from './components/CardTypeSelector';
import RaritySelector from './components/RaritySelector';
import SortSelector from './components/SortSelector';

function CardFilter() {
  return (
    <div>
      <div>do stuff</div>
      <SortSelector />
      <RaritySelector />
      <CardTypeSelector />
      <div>did stuff</div>
    </div>
  );
}

export default CardFilter;

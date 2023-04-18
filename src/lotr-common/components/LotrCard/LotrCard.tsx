import GempCard from '../../../common/components/Card/Card';
import { notFoundImageUrl } from '../../types/image-resolver/types/card-image.constants';
import { getBlueprintByCardId } from '../../types/lotr-card/lotr-card-formatting.functions';
import { getCardImage } from '../../types/lotr-card/lotr-card-image';

type LotrCardProps = {
  blueprintId: string;
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * @see{LotrCard} for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function LotrCard({ blueprintId }: LotrCardProps) {
  const blueprint = getBlueprintByCardId(blueprintId);
  const href = getCardImage(blueprintId);
  if (!blueprint) {
    return <GempCard imageHref={notFoundImageUrl} title="Unknown Card" />;
  }
  return <GempCard imageHref={href ?? 'ruhroh.com'} title="" />;
}

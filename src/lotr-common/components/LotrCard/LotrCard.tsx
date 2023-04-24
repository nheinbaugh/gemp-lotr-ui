import GempCard from '../../../common/components/Card/Card';
import { notFoundImageUrl } from '../../types/image-resolver/types/card-image.constants';
import { getBlueprintByCardId } from '../../types/lotr-card/lotr-card-formatting.functions';

type LotrCardProps = {
  blueprintId: string;
  height?: number;
  width?: number;
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * @see{LotrCard} for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function LotrCard({
  blueprintId,
  height,
  width,
}: LotrCardProps) {
  const blueprint = getBlueprintByCardId(blueprintId);
  if (!blueprint) {
    return <GempCard imageHref={notFoundImageUrl} title="Unknown Card" />;
  }
  return (
    <GempCard
      height={height}
      width={width}
      imageHref={blueprint.imageUrl ?? 'ruhroh.com'}
      title=""
    />
  );
}

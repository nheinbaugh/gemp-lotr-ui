import GempCard from '../../../common/components/Card/Card';
import { notFoundImageUrl } from '../../types/image-resolver/types/card-image.constants';
import { getBlueprintByCardId } from '../../types/lotr-card/lotr-card-formatting.functions';

type LotrCardProps = {
  blueprintId: string;
  height?: number;
  width?: number;
  onPrimaryAction: VoidFunction;
  onSecondaryAction: VoidFunction;
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
  onPrimaryAction,
  onSecondaryAction,
}: LotrCardProps) {
  const blueprint = getBlueprintByCardId(blueprintId);
  if (!blueprint) {
    return (
      <GempCard
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
        imageHref={notFoundImageUrl}
        fallbackImage={notFoundImageUrl}
        title="Unknown Card"
      />
    );
  }
  return (
    <GempCard
      height={height}
      width={width}
      imageHref={blueprint.imageUrl}
      fallbackImage={notFoundImageUrl}
      title=""
      onPrimaryAction={onPrimaryAction}
      onSecondaryAction={onSecondaryAction}
    />
  );
}

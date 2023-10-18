import GempCard from '../../../common/components/Card/Card';
import { notFoundImageUrl } from '../../types/image-resolver/types/card-image.constants';
import { getBlueprintByCardId } from '../../types/lotr-card/lotr-card-formatting.functions';

type LotrCardProps = {
  blueprintId: string;
  height?: number;
  width?: number;
  onPrimaryAction: VoidFunction;
  onSecondaryAction: VoidFunction;
  isHorizontal?: boolean;
  allowHover: boolean;
};

export default function LotrCard({
  blueprintId,
  height,
  width,
  onPrimaryAction,
  onSecondaryAction,
  isHorizontal = false,
  allowHover = false,
}: LotrCardProps) {
  const blueprint = getBlueprintByCardId(blueprintId);

  if (!blueprint) {
    return (
      <GempCard
        cardId={blueprintId}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
        isHorizontal={isHorizontal}
        imageHref={notFoundImageUrl}
        fallbackImage={notFoundImageUrl}
        allowHover={allowHover}
        title="Unknown Card"
      />
    );
  }

  return (
    <GempCard
      cardId={blueprintId}
      height={height}
      width={width}
      isHorizontal={isHorizontal}
      imageHref={blueprint.imageUrl}
      fallbackImage={notFoundImageUrl}
      title=""
      onPrimaryAction={onPrimaryAction}
      onSecondaryAction={onSecondaryAction}
      allowHover={allowHover}
    />
  );
}

export function NonInteractiveLotrCard({
  blueprintId,
  height,
  width,
}: Partial<LotrCardProps>) {
  return (
    <LotrCard
      blueprintId={blueprintId ?? ''}
      height={height}
      width={width}
      onPrimaryAction={() => {}}
      onSecondaryAction={() => {}}
      allowHover={false}
    />
  );
}

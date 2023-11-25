import GempCard from '../../../common/components/Card/Card';
import { notFoundImageUrl } from '../../types/image-resolver/types/card-image.constants';
import { CardBlueprint } from '../../types/lotr-card/card-blueprint.interface';

type LotrCardProps = {
  card: CardBlueprint;
  height?: number;
  width?: number;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  isHorizontal: boolean;
  allowHover: boolean;
};

export default function LotrCard(props: LotrCardProps) {
  const { card } = props;

  if (!card) {
    return (
      <GempCard
        fallbackImage={notFoundImageUrl}
        title="Unknown Card"
        {...props}
      />
    );
  }

  return <GempCard fallbackImage={notFoundImageUrl} title="" {...props} />;
}

type NonInteractiveLotrCardProps = {
  isHorizontal: boolean;
  card: CardBlueprint;
  height?: number;
  width?: number;
};

export function NonInteractiveLotrCard(props: NonInteractiveLotrCardProps) {
  return (
    <LotrCard
      onPrimaryAction={() => {}}
      onSecondaryAction={() => {}}
      allowHover={false}
      {...props}
    />
  );
}

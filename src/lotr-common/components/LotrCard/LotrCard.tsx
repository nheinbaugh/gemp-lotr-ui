import GempCard from '../../../common/components/Card/Card';

type LotrCardProps = {
  blueprintId: string;
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * @see{LotrCard} for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function LotrCard({ blueprintId }: LotrCardProps) {
  return <GempCard imageHref="google.com" />;
}

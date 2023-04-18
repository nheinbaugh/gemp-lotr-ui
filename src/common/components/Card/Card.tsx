import { Box } from '@mui/joy';

type CardProps = {
  imageHref: string;
};

/**
 * This is the (essentially) abstract card that displays an image from a URL.
 * @see{LotrCard} for the implementation actually leverages this and does clean separation on top of it
 * @param param
 */
export default function GempCard({ imageHref }: CardProps) {
  return (
    <Box
      sx={{
        minWidth: '200px',
        maxWidth: '250px',
        height: '400px',
        backgroundColor: 'neutral.300',
      }}
    >
      this is the card with href {imageHref}
    </Box>
  );
}

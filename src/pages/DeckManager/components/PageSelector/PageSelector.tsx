import { Box, Button } from '@mui/joy';
import { useState, useEffect } from 'react';
import { PageInformation } from '../../../../lotr-common/api/collection-api/collection-api-parameters.interface';
import { defaultPageInformation } from '../../../../lotr-common/api/collection-api/collection-api-parameters.functions';

type PageSelectorProps = {
  pageUpdated: (update: PageInformation) => void;
};

function PageSelector({ pageUpdated }: PageSelectorProps) {
  const [currentPage, setCurrentPage] = useState<PageInformation>(
    defaultPageInformation()
  );

  useEffect(() => {
    pageUpdated(currentPage);
  }, [currentPage, pageUpdated]);

  const nextPage = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCurrentPage((previous) => {
      return {
        ...previous,
        start: previous.start + previous.count,
      };
    });
  };

  const previousPage = (event: React.MouseEvent): void => {
    event.preventDefault();
    setCurrentPage((previous) => {
      return {
        ...previous,
        start: Math.max(previous.start - previous.count, 0),
      };
    });
  };

  return (
    <Box display="flex" gap={1}>
      <Button variant="soft" onClick={previousPage}>
        Previous
      </Button>
      <Button variant="soft" onClick={nextPage}>
        Next
      </Button>
    </Box>
  );
}

export default PageSelector;

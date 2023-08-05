import { PER_PAGE } from 'constants/pagination';
import { useEffect, useState } from 'react';

export const useTableSerialNumber = (page, perPage = PER_PAGE) => {
  const [initialSerialNumber, setInitialSerialNumber] = useState(1);

  useEffect(() => {
    setInitialSerialNumber((page - 1) * perPage + 1);
  }, [page, perPage]);

  return initialSerialNumber;
};

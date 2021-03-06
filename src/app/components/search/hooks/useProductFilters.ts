import { useEffect, useState } from 'react';
import { Filters } from '@zengenti/contensis-react-base/search';

const useProductFilters = (filters: Filters, path: string) => {
  // Product Facet Filters
  const [isPotFilterSelected, setIsPotFilterSelected] = useState(false);
  const [isPlantFilterSelected, setIsPlantFilterSelected] = useState(false);

  // Depending on the path toggle the correct filters
  useEffect(() => {
    if (path?.includes('pot')) {
      setIsPlantFilterSelected(false);
      setIsPotFilterSelected(true);
    } else if (path?.includes('plant')) {
      setIsPlantFilterSelected(true);
      setIsPotFilterSelected(false);
    } else {
      setIsPotFilterSelected(false);
      setIsPlantFilterSelected(false);
    }
  }, [path]);

  const potFilters = {} as Filters;
  const plantFilters = {} as Filters;
  const defaultFilters = {} as Filters;

  Object.entries(filters || {}).map(([fKey, filter]) => {
    switch (fKey) {
      case 'colour':
      case 'potSize': {
        potFilters[fKey] = filter;
        break;
      }
      case 'plantType':
      case 'plantSize': {
        plantFilters[fKey] = filter;
        break;
      }
      default: {
        plantFilters[fKey] = filter;
        potFilters[fKey] = filter;
        defaultFilters[fKey] = filter;
        break;
      }
    }
  });
  const searchFilters = isPotFilterSelected
    ? potFilters
    : isPlantFilterSelected
    ? plantFilters
    : defaultFilters;

  return searchFilters;
};

export default useProductFilters;

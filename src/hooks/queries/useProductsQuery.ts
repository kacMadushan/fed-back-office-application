import { useQuery } from '@tanstack/react-query';

import { api } from '../../api';

const useProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => api.get('/products')
    });
};

export default useProductsQuery;
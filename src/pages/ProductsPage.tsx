import { Card } from 'antd';
import { Link } from 'react-router-dom';

import ProductsTable from '../components/ProductsTable';
import useProductsQuery from '../hooks/queries/useProductsQuery';

const ProductsPage = () => {
    const {
        data,
        error,
        isLoading
    } = useProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    console.log(data?.data)
    return (
        <Card>
            <ProductsTable products={data?.data} />
            <Link to='/products/10'>Details</Link>
        </Card>
    );
};

export default ProductsPage;
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import ProductsTable from '../components/ProductsTable';

const ProductsPage = () => {
    return (
        <Card>
            <ProductsTable />
            <Link to='/products/10'>Details</Link>
        </Card>
    );
};

export default ProductsPage;
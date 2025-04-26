import { Card } from 'antd';
import ProductsFilter from '../components/ProductsFilterOption';
import ProductListTable from '../components/ProductListTable';

const ProductsPage = () => {
    return (
        <Card>
            <ProductsFilter />
            <ProductListTable />
        </Card>
    );
};

export default ProductsPage;
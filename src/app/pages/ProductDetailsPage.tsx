import { Card, Typography, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import ProductInformation from '../components/ProductInformation';
import ProductAttributes from '../components/ProductAttributes';

const Title = Typography.Title;

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Details',
        children: <ProductInformation />,
    },
    {
        key: '2',
        label: 'Attributes',
        children: <ProductAttributes />,
    },
];

const ProductDetailsPage = () => {
    return (
        <Card>
            <Title level={2}>Product Details</Title>
            <Tabs defaultActiveKey="1" items={items} />
        </Card>
    );
};

export default ProductDetailsPage;
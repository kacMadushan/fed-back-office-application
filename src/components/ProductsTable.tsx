import { Table } from 'antd';
import { Link } from 'react-router-dom';

import { IProduct } from '../lib/models/product.interface';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Category',
        dataIndex: 'category_id',
        key: 'category_id'
    },
    {
        title: 'Attributes',
        dataIndex: 'attributes',
        key: 'attributes'
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: () => <Link to={`/products`}>View</Link>
    }
];

const ProductsTable = ({ products }: any) => {
    return (
        <Table
            columns={columns}
            dataSource={products}
            rowKey='id'
            pagination={{ pageSize: 10 }}
        />
    );
};

export default ProductsTable;
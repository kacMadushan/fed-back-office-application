import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';

interface DataType {
    id: number;
    product_name: string;
    category: string;
    attributes: string
}

const columns: TableProps<DataType>['columns'] = [
    {
        key: 'id',
        dataIndex: 'id',
        title: 'ID',
    },
    {
        key: 'product_name',
        dataIndex: 'product_name',
        title: 'Product Name'
    },
    {
        key: 'category',
        dataIndex: 'category',
        title: 'Category'
    },
    {
        key: 'attributes',
        dataIndex: 'attributes',
        title: 'Attributes'
    },
    {
        key: 'action',
        dataIndex: 'action',
        title: 'Action',
        render: (_, record) => (
            <Link
                className='border border-clr_blue-500 text-xs text-clr_blue-500 rounded-md px-4 py-1 hover:bg-clr_blue-500 hover:text-clr_white'
                to={`/products/${record.id}`}
            >
                View
            </Link>
        )
    }
];

const data = [
    {
        id: 1,
        product_name: 'Macbook Pro 15',
        category: 'Laptop',
        attributes: '5 Attributes'
    },
    {
        id: 2,
        product_name: 'Macbook Pro 13',
        category: 'Laptop',
        attributes: '5 Attributes'
    }
]


const ProductListTable = () => {
    return (
        <Table columns={columns} dataSource={data} rowKey='id' />
    );
};

export default ProductListTable;
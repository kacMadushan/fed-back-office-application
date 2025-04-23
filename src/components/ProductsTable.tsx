import { Table } from 'antd';


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
        key: 'actions'
    }
];

const ProductsTable = () => {
    return (
        <Table
            columns={columns}
            rowKey='id'
            pagination={{ pageSize: 10 }}
        />
    );
};

export default ProductsTable;
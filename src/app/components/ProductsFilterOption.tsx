import { Flex, Typography, Input, Select } from 'antd';

const Title = Typography.Title;

const ProductsFilter = () => {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <Flex className='mb-6' align='center' justify='space-between'>
            <Title level={2}>All Products</Title>
            <Flex align='center' gap={16}>
                <Input.Search placeholder='Search...' />
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="label"
                    onChange={onChange}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'tom',
                            label: 'Tom',
                        },
                    ]}
                />
            </Flex>
        </Flex>
    );
};

export default ProductsFilter;
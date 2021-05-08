<template>
<div class="account-container bgsytle">
    <a-table bordered :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>/
        <span slot="customTitle"></span>
        <span   slot="tags" slot-scope="tags">
            <a-tag v-for="tag in tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                {{ tag.toUpperCase() }}
            </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
        </span>
    </a-table>
</div>
</template>

<script>
const columns = [{
        title: '账号',
        dataIndex: 'name',
        key: 'name',
        slots: {
            title: 'customTitle'
        },
        scopedSlots: {
            customRender: 'name'
        },
    },
    {
        title: '秘钥',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '状态',
        key: 'tags',
        dataIndex: 'tags',
        width: '5%',
        scopedSlots: {
            customRender: 'tags'
        },
    },
    {
        title: '权限',
        key: 'action',
        scopedSlots: {
            customRender: 'action'
        },
    },
];

const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New',
        tags: ['nice'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney',
        tags: ['cool'],
    },
     {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney',
        tags: ['cool'],
    },
];

export default {
    data() {
        return {
            data,
            columns,
        };
    },
};
</script>

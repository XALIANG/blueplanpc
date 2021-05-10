<template>
<div class="account-container bgsytle">
    <a-table  :pagination="pagination" bordered :data-source="data">
        <a-table-column key="name" title="账号" data-index="name"  />
        <a-table-column key="address" title="秘钥" data-index="address" />
        <a-table-column key="tags" title="状态" :width="130" data-index="tags" align="center" >
            <template slot-scope="tags">
                <span>
                    <a-tag v-for="(tag,index) in tags" :key="index" :color="tag.state === 1 ? 'green' :'red'">
                        {{ tag.state === 1 ? tag.title: tag.title }}
                    </a-tag>
                </span>
            </template>
        </a-table-column>
        <a-table-column key="action" title="操作"  align="center" >
            <template slot-scope="text, record">
                <span>
                    <a-button size="small" >编辑</a-button>
                </span>
            </template>
        </a-table-column>

    </a-table>
</div>
</template>

<script>
const data = [{
        key: '1',
        name: 'John Brown',
        address: 'New',
        tags: [{
            state: 1,
            color: 'red',
            title: '离线'
        }],
    },
    {
        key: '2',
        name: 'Jim Green',
        address: 'London',
        tags: [{
            state: 1,
            color: 'green',
            title: '在线'
        }],
    },
    {
        key: '3',
        name: 'Joe Black',
        address: 'Sidney',
        tags: [{
            state: 0,
            color: 'red',
            title: '离线'
        }],
    },
    {
        key: '4',
        name: 'Joe Black',
        address: 'Sidney',
        tags: [{
            state: 1,
            color: 'green',
            title: '在线'
        }],
    },
];

export default {
    data() {
        const pagination = {
            total:0,
            pageSize:20,
            current:1,
            pageSizeOptions:["10","20"],
            showSizeChanger:true,
            showQuickJumper:false,
            showTotal:(total,range)=>{
               return `${range[0]}-${range[1]}总 ${total}条`
            }
        };
        return {
            pagination,
            data,
        };
    },
};
</script>

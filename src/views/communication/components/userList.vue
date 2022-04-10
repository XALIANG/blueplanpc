<template>
    <div class="communication-userlist">
        <a-list :data-source="data">
            <a-list-item
                slot="renderItem"
                slot-scope="item,index"
                @click="obtainUserItem(item, index)"
            >
                <div class="hand user-active" :class="{ 'active': listIndex == index }">
                    <a-list-item-meta :description="item.textInfo">
                        <a slot="title">{{ item.title }}</a>
                        <a-avatar slot="avatar" :src="item.headerUrl" />
                    </a-list-item-meta>
                </div>
            </a-list-item>
        </a-list>
    </div>
</template>
<script>
const data = [
    {
        title: '服务器',
        textInfo: "测试text",
        id: 0,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",
        userTextRecord: [],
    },
    {
        title: '罗翔',
        textInfo: "你他妈的犯法知道吗？",
        id: 1,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",
        userTextRecord: [],
    },
    { 
        title: '古天乐',
        textInfo: "明天有个学校要捐",
        id: 2,
        headerUrl: "https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto",
        userTextRecord: [],
    },
    {
        title: '刘德华',
        textInfo: "演唱会开始了...",
        id: 3,
        headerUrl: "https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        userTextRecord: [],
    },
    {
        title: '周润发',
        textInfo: "你一点也不像个杀手.",
        id: 4,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec",
        userTextRecord: [],
    },
    {
        title: '罗翔',
        textInfo: "你他妈的犯法知道吗？",
        id: 5,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b",
        userTextRecord: [],
    },
    {
        title: '古天乐',
        textInfo: "明天有个学校要捐",
        id: 6,
        headerUrl: "https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto",
        userTextRecord: [],
    },
    {
        title: '刘德华',
        textInfo: "演唱会开始了...",
        id: 7,
        headerUrl: "https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        userTextRecord: [],
    },
    {
        title: '周润发',
        textInfo: "你一点也不像个杀手.",
        id: 8,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec",
        userTextRecord: [],

    },
    {
        title: '罗翔',
        textInfo: "你他妈的犯法知道吗？",
        id: 9,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b"
    },
    {
        title: '古天乐',
        textInfo: "明天有个学校要捐",
        id: 10,
        headerUrl: "https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto"
    },
    {
        title: '刘德华',
        textInfo: "演唱会开始了...",
        id: 11,
        headerUrl: "https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
    },
    {
        title: '周润发',
        textInfo: "你一点也不像个杀手.",
        id: 12,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec"
    },
    {
        title: '罗翔',
        textInfo: "你他妈的犯法知道吗？",
        id: 13,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-988065815-FAD7372C2690B24BA0430F88CBC548C7%2F0%3Ffmt%3Djpg%26size%3D24%26h%3D416%26w%3D640%26ppv%3D1.jpg&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123964&t=a550e5ab7239a266328ffd7051a6942b"
    },
    {
        title: '古天乐',
        textInfo: "明天有个学校要捐",
        id: 14,
        headerUrl: "https://img2.baidu.com/it/u=3926660717,686710726&fm=26&fmt=auto"
    },
    {
        title: '刘德华',
        textInfo: "演唱会开始了...",
        id: 15,
        headerUrl: "https://img0.baidu.com/it/u=3479690518,1941900087&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
    },
    {
        title: '周润发',
        textInfo: "你一点也不像个杀手.",
        id: 16,
        headerUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.meifajie.com%2Fattachments%2Fimage%2F2014-05%2F20140520160522_59445.jpg&refer=http%3A%2F%2Fimage.meifajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639123869&t=7d4673c0903a61c4d793227ce05af0ec"
    },



];
export default {
    name: 'userList',
    data() {
        return {
            data,
            listIndex: 0,
        };
    },
    mounted() {
    },
    methods: {
        obtainUserItem(user, idx) {
            this.listIndex = idx;
            
        },
    }
};
</script>
<style>
.communication-userlist {
    width: 80%;
}
.ant-list-split .ant-list-item {
    border: none;
}
.ant-list-item-meta-description {
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.active {
    padding-left: 5px;
    border-left: 4px solid rgb(74, 192, 228);
    background: rgb(184 181 181 / 41%);
    box-sizing: border-box;
}
</style>
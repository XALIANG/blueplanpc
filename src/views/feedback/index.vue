<template>
<div class="feedback-container bgsytle">

    <div class="feedback-content">
        <a-list v-if="data.length" :data-source="data"  item-layout="horizontal" class="comment-list" :header="`${data.length} replies`">
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-comment :author="item.author" :avatar="item.avatar">
                    <template slot="actions">
                        <span v-for="action in item.actions">{{ action }}</span>
                    </template>
                    <p slot="content">
                        {{ item.content }}
                    </p>
                    <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                        <span>{{ item.datetime.fromNow() }}</span>
                    </a-tooltip>
                    <span key="comment-basic-like">
                        <a-tooltip title="Like">
                            <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
                        </a-tooltip>
                        <span style="padding-left: '8px';cursor: 'auto'">
                            {{ item.likes }}
                        </span>
                    </span>
                    <a-tooltip title="Dislike">
                        <a-icon type="dislike" :theme="action === 'disliked' ? 'filled' : 'outlined'" @click="dislike" />
                    </a-tooltip>
                    <span style="padding-left: '8px';cursor: 'auto'">
                        {{ item.dislikes }}
                    </span>
                    </span>
                </a-comment>
            </a-list-item>
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-comment :author="item.author" :avatar="item.avatar" :content="item.content" :datetime="item.datetime" />
            </a-list-item>
        </a-list>
        
        </a-comment>
    </div>
</div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            comments: [],
            submitting: false,
            value: '',
            likes: 0,
            dislikes: 0,
            action: null,
            moment,
            data: [{
                    actions: ['Reply to'],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: moment().subtract(1, 'days'),
                    likes: 0,
                    dislikes: 99,
                },
                {
                    actions: ['Reply to'],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: moment().subtract(2, 'days'),
                    likes: 0,
                    dislikes: 0,
                },
            ],

        };
    },
    methods: {
        like() {
            this.likes = 1;
            this.dislikes = 0;
            this.action = 'liked';
        },
        dislike() {
            this.likes = 0;
            this.dislikes = 1;
            this.action = 'disliked';
        },
    },
    handleSubmit() {
        if (!this.value) {
            return;
        }

        this.submitting = true;

        setTimeout(() => {
            this.submitting = false;
            this.data = [{
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: this.value,
                    datetime: moment().fromNow(),
                },
                ...this.data,
            ];
            this.value = '';
        }, 1000);
    },
    handleChange(e) {
        this.value = e.target.value;
    },

};
</script>

<style lang="scss" scoped>
.feedback-container {}
</style>

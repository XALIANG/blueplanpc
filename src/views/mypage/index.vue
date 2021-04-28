<template>
<div class="mypage-container">
    <div class="mypage-headCar">
        <div class="account-heade">
            <div class="avatar">
                <a-avatar :size="99" src="https://m.aicealiang.cn/images/61f2d7c69e211819d95204dd9dc955a5.gif" icon="user" />
            </div>
            <div class="username">Lan</div>
            <!-- 个性 -->
            <div class="personality">陈爷爷，9527</div>
        </div>
        <div class="lable">
            <p>描述1</p>
            <p>描述1</p>
            <p>描述1</p>
        </div>
        <div class="horizontal"></div>
        <div class="account-center-tag">
            <div class="tagsTitle">标签</div>
            <div class="tagsTitle-children">
                <a-tag color="pink"> pink </a-tag>
                <a-tag color="red"> red </a-tag>
                <a-tag color="orange"> orange </a-tag>
                <a-tag color="green"> green </a-tag>
                <a-tag color="cyan"> cyan </a-tag>
                <a-tag color="blue"> blue </a-tag>
                <a-tag color="purple"> purple </a-tag>
            </div>
            <div class="horizontal"></div>
        </div>
    </div>
    <!-- 卡片 -->
    <div class="mypage-rightMenu">
        <div class="tabs">
            <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane class="padding" key="1" tab="Tab 1">
                    <div class="tabs-list">
                        <a-list item-layout="vertical" size="large" :data-source="listData">
                            <div slot="footer"><b>ant design vue</b> footer part</div>
                            <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                                <template v-for="{ type, text } in actions" slot="actions">
                                    <span :key="type">
                                        <a-icon :type="type" style="margin-right: 8px" />
                                        {{ text }}
                                    </span>
                                </template>
                                <a-list-item-meta :description="item.description">
                                    <a slot="title" :href="item.href">{{ item.title }}</a>
                                    <a-avatar slot="avatar" :src="item.avatar" />
                                </a-list-item-meta>
                                {{ item.content }}
                            </a-list-item>
                        </a-list>
                    </div>
                    <div class="swiper-constainer">
                        <a-carousel arrows>
                            <div class="swiper-box">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1543094632,1454141156&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div class="swiper-box">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1543094632,1454141156&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div>
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1543094632,1454141156&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <div class="swiper-box">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1543094632,1454141156&fm=26&gp=0.jpg" alt="" />
                            </div>
                        </a-carousel>
                    </div>
                </a-tab-pane>
                <a-tab-pane class="padding" key="2" tab="Tab 2" force-render>
                    <div class="menu-car">
                        <div>
                            <a-card :loading="loading" title="Card title">
                                whatever content
                            </a-card>
                            <a-button style="margintop: 16px" @click="handleClick">
                                Toggle loading
                            </a-button>
                        </div>
                    </div>
                </a-tab-pane>
                <a-tab-pane class="padding" key="3" tab="Tab 3">
                    <div class="menu-car">
                        <div>
                            <a-card :loading="loading" title="Card title">
                                whatever content
                            </a-card>
                            <a-button style="margintop: 16px" @click="handleClick">
                                Toggle loading
                            </a-button>
                        </div>
                    </div>
                </a-tab-pane>
            </a-tabs>
        </div>
    </div>
</div>
</template>

<script>
const listData = [];
for (let i = 0; i < 2; i++) {
    listData.push({
        href: "https://www.antdv.com/",
        title: `ant design vue part ${i + 1}`,
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), ",
    });
}
export default {
    data() {
        return {
            listData,
            loading: true,
            pagination: {
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            },
            actions: [{
                    type: "star-o",
                    text: "156",
                },
                {
                    type: "like-o",
                    text: "156",
                },
                {
                    type: "message",
                    text: "2",
                },
            ],
        };
    },
    methods: {
        callback(key) {
            console.log(key);
        },
        handleClick() {
            this.loading = !this.loading;
        },
    },
};
</script>

<style lang="scss" scoped>
$margin: 10px;
$paddingTabs: 0 24px;

/* For demo */
.ant-carousel>>>.slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel>>>.slick-slide h3 {
    color: #fff;
}

.mypage-container {
    display: flex;
    justify-content: space-around;

    .mypage-headCar {
        width: 464px;
        height: 710;
        background: #fff;
        margin-right: 20px;
        padding: 24px;
        zoom: 1;
        box-sizing: border-box;

        .account-heade {
            height: 178px;
            margin: 0px 0px 24px;
            text-align: center;

            .avatar {
                width: 104px;
                height: 104px;
                overflow: hidden;
                margin: 0 auto;
            }

            .username {
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
                margin-bottom: 4px;
            }

            p {
                position: relative;
                margin-bottom: 8px;
                padding-left: 26px;
            }
        }

        .horizontal {
            display: block;
            clear: both;
            width: 100%;
            height: 1px;
            margin: 24px 0;
            background: rgb(240 240 240);
        }

        .account-center-tag {
            .tagsTitle {
                margin-bottom: $margin;
            }

            .tagsTitle-children {
                display: flex;
                justify-content: space-around;
            }
        }
    }

    .mypage-rightMenu {
        flex: 1;
        height: 900px;
        overflow: hidden;
        background: #fff;

        .tabs {
            .tabs-list {
                margin-top: $margin;
            }
        }
    }

    .padding {
        padding: $paddingTabs;
    }

    .swiper-constainer {
        width: 100%;
        height: 300px;
        overflow: hidden;

        .swiper-box {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>

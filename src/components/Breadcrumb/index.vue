<template>
<div class="breadcrumb">
    <a-breadcrumb separator="/">
        <a-breadcrumb-item v-for="(item, index) in routeList" :key="item.path">
            <span v-if="index==routeList.length-1" class="no-redirect" >{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
        </a-breadcrumb-item>
    </a-breadcrumb>
</div>
</template>

<script>
export default {
    name: "Breadcrumb",
    data() {
        return {
            routeList: null,
        };
    },
    watch: {
        $route(ruote) {
            if (ruote.path.startsWith("/redirect/")) {
                return;
            }
            this.getBreadcrumb();
        },
    },
    created() {
        this.getBreadcrumb();
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(
                (item) => item.meta && item.meta.title
            );
            const first = matched[0];

            if (!this.isHomeApp(first)) {
                matched = [{
                    path: "/index",
                    meta: {
                        title: "HomeApp"
                    }
                }].concat(
                    matched
                );
            }

            // 当item.meta 和 item.meta.title 和 item.meta.breadcrumb !== false 时 才会通过筛选
            this.routeList = matched.filter((item) => item.meta && item.meta.title);
            console.log('面包', this.routeList);
        },
        isHomeApp(route) {
            const name = route && route.name;
            if (!name) {
                return false;
            }
            return name.trim().toLocaleLowerCase() === "HomeApp".toLocaleLowerCase();
        },
        handleLink(route) {
            console.log(route)
            const {
                path,
                redirect
            } = route;
            if (redirect) {
                this.$router.push(redirect);
            }

            this.$router.push(path);

        }
    },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
    display: inline-block;
    font-size: 14px;
    margin-left: 8px;
    margin-top: 13px;
    .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>

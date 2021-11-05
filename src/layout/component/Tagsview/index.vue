<template>
  <div id="tags-view-container">
    <ul class="tags-box">
      <li
        v-for="(item, index) in tagList"
        :key="index"
        :class="{ active: isAcitive(item.path) }"
      >
        <router-link :to="item.path">
          <span> {{ item.title }}</span>
        </router-link>
        <span
          :class="{ 'icon-active': hoemApp(item) }"
          @click="closeTags(index)"
        >
          <a-icon type="close" style="font-size: 8px" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tagsview",
  data() {
    return {
      tagList: [],
    };
  },
  watch: {
    $route(route) {
      this.obtainTags(route);
    },
  },
  computed: {},
  created() {
    this.obtainTags(this.$route);
  },
  mounted() {},
  methods: {
    isAcitive(path) {
      return path === this.$route.path;
    },
    hoemApp(route) {
      return route.title === "主页应用";
    },
    //获取标签
    obtainTags(route) {
      const isExist = this.tagList.some((item) => item.path === route.fullPath);

      if (!isExist) {
        this.tagList.push({
          title: route.meta.title,
          path: route.fullPath,
        });
      }
    },
    closeTags(idx) {
      const deleteItem = this.tagList.splice(idx, 1)[0];

      const item = this.tagList[idx]
        ? this.tagList[idx]
        : this.tagList[idx - 1];
      if (item) {
        deleteItem.path === this.$route.fullPath &&
          this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#tags-view-container {
  height: 36px;
  width: 100%;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) 0 3px 10px rgba(0, 0, 0, 0.12);
 

  .tags-box {
    margin: 0;
    z-index: 3000;
    position: relative;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;

    .active {
      background: #4791d62e;
      border-color: #4791d62e;

      a {
        color: none;
      }
    }

    li {
      margin: 0;
      padding: 7px 16px;
      float: left;
      line-height: 10px;
      border: 1px solid #d8dce5;
      margin-right: 7px;
      cursor: pointer;

      a {
        color: #495060;
      }
    }
  }

  .icon-active {
    display: none;
  }
}
</style>

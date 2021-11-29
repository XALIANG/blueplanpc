<template>
  <div class="container-workplace">
    <!-- user card -->
    <div class="p-t-20 p-l-20 p-r-20 p-b-10 userinfo-card bg">
      <div class="title">
        <span class="fz-20">Workplace</span>
      </div>
      <!-- userInfo -->
      <div class="userinfo m-t-10">
        <!-- avatar -->
        <div class="avatar">
          <div class="m-r-20">
            <img :src="userForm.headPortrait" />
          </div>
          <div class="content">
            <p class="fz-20">早安，{{userForm.userName}} ，祝你开心每一天！</p>
            <p>字节跳动－某某某事业群－某某平台部－某某技术部－Gavin</p>
          </div>
        </div>
        <div class="probject">
          <div class="probject-card p-r-20 fz-14">
            <p>项目数</p>
            <p class="fz-18">2</p>
            <div class="match"></div>
          </div>
          <div class="probject-card p-r-20 fz-14">
            <p>项目总评分</p>
            <p class="fz-18">0.00</p>
            <div class="match"></div>
          </div>
          <div class="probject-card fz-14">
            <p>项目访问</p>
            <p class="fz-18">0</p>
          </div>
        </div>
      </div>
    </div>

    <!-- probject -->
    <div class="probject-list m-t-20">
      <a-row class="list">
        <a-col>
          <CardList :cardList="[]" :title="'进行中的项目'" />
        </a-col>
      </a-row>
      <a-row class="right-content bg">
        <a-col>
          <div>
            <a-card title="预留位置" :bordered="false">
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { CardList } from '@/components/index';
import { mapGetters } from 'vuex';
export default {
  components: {
    CardList
  },
  computed: {
    ...mapGetters(['userForm'])
  }
};
</script>

<style lang="scss" scoped>
.userinfo-card {
  width: 100%;

  .userinfo {
    display: flex;
    justify-content: space-between;

    .avatar {
      display: flex;

      img {
        width: 100px;
        height: 100px;
        border-radius: 20px;
      }
    }
  }

  .content {
    font-weight: 500;
  }

  .probject {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .probject-card {
      position: relative;
      text-align: center;

      & p:nth-child(2) {
        font-weight: 600;
      }
    }
  }
}

.probject-list {
  display: flex;
  justify-content: space-between;

  .list {
    width: 60%;
  }
}

.title {
  font-weight: 500;
  color: $heading-color;
}

.right-content {
  width: 39%;
}
</style>

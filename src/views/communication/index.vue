<template>
  <div class="communication-container bg">
    <!-- Left user  list -->
    <div class="communication-user-list p-l-5">
      <UserList ref="UserList" />
    </div>
    <!-- right content -->
    <div class="communication-message-content">
      <!-- message view -->
      <div class="message-view p-10">
        <UserContent ref="UserContent" />
        <!-- <WebSocket
                    ref="websocket"
                    @onGroupChat="obtianMessageList"
                    :params="userParamText"
                /> -->
      </div>
      <!-- input content -->
      <div class="message-text">
        <!-- 表情组件 -->
        <div class="text-expression mtb-10"></div>
        <div class="text-value">
          <a-textarea ref="textarea" class="text" v-model="userParamText" :maxLength="324" placeholder="文本" @pressEnter="obtainText" />
        </div>
        <div class="text-button">
          <a-button size="small">关闭</a-button>
          <a-button size="small" @click="obtainText" type="primary">发送（Enter）</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from './components/userList.vue';
import UserContent from './components/userContent.vue';
export default {
  components: {
    UserList,
    UserContent
  },
  data() {
    return {
      userParamText: '',
      mainUser: []
    };
  },
  computed: {},
  methods: {
    obtainText() {
      if (this.userParamText === '') return;
      this.$refs.textarea.$el.addEventListener('keydown', (e) => {
        if (e.keyCode != 13) {
          return;
        } else {
          e.returnValue = false;
        }
      });
      this.$refs.websocket.groupChat();
      this.userParamText = '';
    },
    arrayUnique2(arr, name) {
      var hash = {};
      return arr.reduce(function(item, next) {
        hash[next[name]] ? '' : (hash[next[name]] = true && item.push(next));
        return item;
      }, []);
    },
    obtianMessageList(param) {
      console.log('聊天记录', param);
      // 取出相同 ID 属性 过滤 right
      this.$nextTick(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #99999947;
.communication-container {
  width: 70%;
  height: 700px;
  display: flex;
  justify-content: space-between;
  margin: auto;

  .communication-user-list {
    width: 200px;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    border-right: 1px solid $border-color;
  }
  .communication-message-content {
    flex: 1;
    height: 100%;
    .message-view {
      height: 80%;
      box-sizing: border-box;
    }
    .message-text {
      position: relative;
      display: flex;
      flex-direction: column;
      border-top: 1px solid $border-color;
      height: 20%;
      .text-expression {
        height: 35px;
      }
      .text-button {
        position: absolute;
        right: 1%;
        bottom: 8%;
        width: 180px;
        display: flex;
        justify-content: space-around;
      }
    }
  }
}

// 清除默认样式
.text {
  outline: none;
  border: none;
}
textarea {
  resize: none;
}
.ant-input-affix-wrapper,
.ant-input:focus {
  box-shadow: 0px 0px 10px 0px #fff;
  border-color: #ffad01;
}
</style>

<template>
  <div>
    <!-- 搜索栏 -->
    <div class="search-containe m-b-20 bg p-20">
      <a-form-model layout="inline" :model="formInline" @submit="handleSubmit" @submit.native.prevent>
        <a-form-model-item label="账号">
          <a-input v-model="formInline.user" placeholder="acccount"></a-input>
        </a-form-model-item>
        <a-form-model-item label="描述">
          <a-input v-model="formInline.password" type="password" placeholder></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="account-container bg">
      <!-- button components -->
      <!--  -->
      <a-table size="middle" :pagination="pagination" :data-source="data">
        <a-table-column key="uid" title="序号" data-index="uid" />
        <a-table-column key="name" title="账号" data-index="name" />co
        <a-table-column key="createTime" title="注册时间" data-index="createTime" />
        <a-table-column key="address" title="金币" data-index="address" />
        <a-table-column key="tags" title="状态" :width="130" data-index="tags" align="center">
          <template slot-scope="tags">
            <span>
              <a-tag v-for="(tag, index) in tags" :key="index" :color="tag.state === 1 ? 'green' : 'red'">{{ tag.state === 1 ? tag.title : tag.title }}</a-tag>
            </span>
          </template>
        </a-table-column>
        <a-table-column key="action" title="操作" align="center">
          <template slot-scope="text, record">
            <span>
              <a-button @click="showModal(text, record)" size="small">编辑</a-button>
            </span>
          </template>
        </a-table-column>
      </a-table>
      <!-- 编辑账号以及权限控制 -->
      <a-modal v-model="visible" title="Title" on-ok="handleOk">
        <a-form-model ref="FromACcount" :model="FromACcount" :rules="rules" v-bind="layout">
          <a-form-model-item has-feedback label="Password" prop="pass">
            <a-input v-model="FromACcount.pass" type="password" autocomplete="off" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="Confirm" prop="checkPass">
            <a-input v-model="FromACcount.checkPass" type="password" autocomplete="off" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="Age" prop="age">
            <a-input v-model.number="FromACcount.age" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="权限菜单">
            <a-tree v-model="checkedKeys" checkable :expanded-keys="expandedKeys" :auto-expand-parent="autoExpandParent" :selected-keys="selectedKeys" :tree-data="treeData" @expand="onExpand" @select="onSelect" />
          </a-form-model-item>
        </a-form-model>
        <template slot="footer">
          <a-button type="primary" @click="handleCancel">取消</a-button>
          <a-button style="margin-left: 10px" :loading="loading" @click="handleOk">提交</a-button>
        </template>
      </a-modal>
    </div>
  </div>
</template>

<script>
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0'
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1'
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2'
          }
        ]
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0'
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1'
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2'
          }
        ]
      },
      {
        title: '0-0-2',
        key: '0-0-2'
      }
    ]
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0'
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1'
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2'
      }
    ]
  },
  {
    title: '0-2',
    key: '0-2'
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New',
    createTime: '2021',
    uid: 123456700,
    tags: [
      {
        state: 1,
        color: 'red',
        title: '离线'
      }
    ]
  },
  {
    key: '2',
    name: 'Jim Green',
    uid: 123456700,
    createTime: '2021',
    address: 'London',
    tags: [
      {
        state: 0,
        color: 'green',
        title: '离线'
      }
    ]
  },
  {
    key: '3',
    name: 'Joe Black',
    createTime: '2021',
    uid: 123456700,
    address: 'Sidney',
    tags: [
      {
        state: 0,
        color: 'red',
        title: '离线'
      }
    ]
  },
  {
    key: '4',
    name: 'Joe Black',
    createTime: '2021',
    uid: 123456700,
    address: 'Sidney',
    tags: [
      {
        state: 1,
        color: 'green',
        title: '在线'
      }
    ]
  }
];
import { userList } from '../../apis/user';
export default {
  data() {
    let checkPending;
    let checkAge = (rule, value, callback) => {
      clearTimeout(checkPending);
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.FromACcount.checkPass !== '') {
          this.$refs.FromACcount.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.FromACcount.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const pagination = {
      total: 0,
      pageSize: 20,
      current: 1,
      pageSizeOptions: ['10', '20'],
      showSizeChanger: true,
      showQuickJumper: false,
      showTotal: (total, range) => {
        return `${range[0]}-${range[1]}总 ${total}条`;
      }
    };
    return {
      treeData,
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
      FromACcount: {
        pass: '',
        checkPass: '',
        age: ''
      },
      loading: false,
      visible: false,
      pagination,
      data,
      formInline: {
        user: '',
        password: ''
      },
      rules: {
        pass: [
          {
            validator: validatePass,
            trigger: 'change'
          }
        ],
        checkPass: [
          {
            validator: validatePass2,
            trigger: 'change'
          }
        ],
        age: [
          {
            validator: checkAge,
            trigger: 'change'
          }
        ]
      },
      layout: {
        labelCol: {
          span: 4
        },
        wrapperCol: {
          span: 14
        }
      }
    };
  },
  watch: {
    checkedKeys(val) {
      console.log('onCheck', val);
    }
  },
  mounted() {
    userList({ page: 1, limit: 10 }).then((res) => {
      console.log(res);
    });
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info);
      this.selectedKeys = selectedKeys;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-containe {
  ::v-deep input {
    width: 400px;
  }
}
</style>

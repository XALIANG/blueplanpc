<template>
  <div class="role-container m-b-20 bg p-20">
    <a-layout>
      <div class="bg">
        <a-table :dataSource="roleList" :columns="columns" rowKey="roleId" size="middle" border style="width: 100%"> </a-table>
      </div>
    </a-layout>
  </div>
</template>

<script>
import { role } from '../../apis/role';
export default {
  data() {
    return {
      roleList: [],
      columns: [
        {
          title: '角色',
          dataIndex: 'roleName',
          key: '1'
        },
        {
          title: '描述',
          dataIndex: 'roleDescription',
          key: '2'
        },
        {
          title: '会员',
          dataIndex: 'rolePrivilege',
          key: '3'
        }
      ],
      role: {}
    };
  },
  mounted() {
    this.obitanRole();
  },
  methods: {
    async obitanRole() {
      const { data, status } = await role();
      if (status === 200) {
        this.roleList = data;
      }
    }
  }
};
</script>

<template>
  <div class="hello">
    <el-dialog
      title="重置密码"
      :visible.sync="ResetPwdDialogVisible"
      width="40%"
      @close="resetForm('pwdForm')"
    >
      <el-form
        :model="resetPwdForm"
        status-icon
        :rules="resetPwdRules"
        ref="pwdForm"
        label-width="100px"
      >
        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="iconfont icon-showpassword"
            placeholder="请输入 
        密码"
            type="password"
            v-model="resetPwdForm.password"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="new_password">
          <el-input
            prefix-icon="iconfont icon-showpassword"
            placeholder="请输入新密码"
            type="password"
            v-model="resetPwdForm.new_password"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password_again">
          <el-input
            prefix-icon="iconfont icon-showpassword"
            placeholder="请再次输入新密码"
            type="password"
            v-model="resetPwdForm.password_again"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('pwdForm')"
            >确认修改</el-button
          >
          <el-button @click="resetForm('pwdForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "correct",
  data() {
    return {
      msg: "章桥是我儿子",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

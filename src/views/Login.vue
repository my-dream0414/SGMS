<template>
  <div class="login">
    <div class="bgimage">
      <div class="login_box">
        <div class="login_box_input">
          <div class="loginBoxInput_container">
            <h4 class="title">登录</h4>
            <div class="login_input_box">
              <div class="login_input_detali">
                <div class="login_user">
                  <el-input
                    size="large"
                    placeholder="用户名"
                    prefix-icon="el-icon-user"
                    v-model="name"
                  >
                  </el-input>
                </div>
                <div class="login_password">
                  <el-input
                    type="password"
                    size="large"
                    placeholder="密码"
                    prefix-icon="el-icon-lock"
                    v-model="password"
                  >
                  </el-input>
                </div>
              </div>
              <div class="login_button">
                <el-button type="primary" class="login_btn" @click="handelClick"
                  >登录</el-button
                >
                <p class="tipText">
                  <span>管理员登录：admin/admin</span>
                </p>
              </div>
              <div class="register">
                <router-link to="/register" class="registerBtn"
                  >立即注册</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { mockUrl } from "../config/index";
export default {
  name: "Login",
  data() {
    return {
      msg: "dapeng",
      password: "",
      name: "",
    };
  },
  methods: {
    async login(url = "", data = {}) {
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
      });
      return res.json();
    },
    handelClick() {
      if (!this.name || !this.password) {
        return Message.error({
          message: "请输入完整的登陆信息！",
          duration: 1000,
        })
      }
      this.login(mockUrl + "/userLogin", {
        userName: this.name,
        userPwd: this.password,
      })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          Message.success({
            message: "登录成功！",
            duration: 1000,
            center: true,
          });
          this.$store.commit("setUserInfo", res.data);
          this.$router.replace({ path: `/${res.data.role}`, replace: true });
        })
        .catch((err) =>
          Message.error({
            message: err || "登录失败！",
            duration: 1000,
            center: true,
          })
        );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
  width: 100%;
}
.bgimage {
  position: relative;
  /* background-image: url('../../static/bg.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  min-height: 600px;
}
.login_box {
  height: 100%;
  /* padding-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box_input {
  position: absolute;
  width: 600px;
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  padding-bottom: 40px;
}
.loginBoxInput_container {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
}
.title {
  margin: 0;
  padding: 40px 0;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: 40px;
  font-weight: 500;
}
.login_password {
  margin-top: 30px;
}
.login_remember {
  margin-top: 20px;
}
.login_button {
  margin-top: 20px;
}
.login_btn {
  width: 100%;
}
.tipText {
  color: #999;
  font-style: 13px;
  text-decoration: none;
}
.tipText span {
  margin-right: 20px;
}
.register {
  text-align: center;
}
.registerBtn {
  text-decoration: none;
  color: #5584ff;
}
</style>

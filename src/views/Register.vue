<template>
  <div class="login">
    <div class="bgimage">
      <div class="login_box">
        <div class="login_box_input">
          <div class="loginBoxInput_container">
            <h4 class="title">注册</h4>
            <div class="login_input_box">
              <div class="login_input_detali">
                <div class="login_user">
                  <el-input
                    size="large"
                    placeholder="用户名"
                    prefix-icon="el-icon-user"
                    v-model="data.name"
                    class="left"
                  >
                  </el-input>
                  <el-select
                    v-model="data.value"
                    placeholder="请选择身份"
                    class="right"
                  >
                    <el-option
                      v-for="item in data.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>

                <div class="login_email">
                  <el-input
                    size="large"
                    placeholder="用户邮箱"
                    prefix-icon="el-icon-user"
                    v-model="data.email"
                  >
                  </el-input>
                </div>

                <div class="login_password">
                  <el-input
                    type="password"
                    size="large"
                    placeholder="密码"
                    prefix-icon="el-icon-lock"
                    v-model="data.password"
                  >
                  </el-input>
                </div>
                <div class="login_password">
                  <el-input
                    type="password"
                    size="large"
                    placeholder="确认密码"
                    prefix-icon="el-icon-lock"
                    v-model="data.password2"
                  >
                  </el-input>
                </div>
              </div>
              <div class="login_button">
                <el-button type="primary" class="login_btn" @click="handelClick"
                  >注册</el-button
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
import { mockUrl } from "../config";
export default {
  name: "register",
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
        password2: "",
        options: [
          { value: "学生", label: "学生" },
          { value: "教师", label: "教师" },
        ],
        value: "",
      },
      confirmData: {
        name: "用户名不能为空！",
        email: "邮箱不能为空！",
        value: "身份选择不能为空！",
        password: "密码不能为空！",
        password2: "密码不能为空！",
      },
    };
  },
  methods: {
    async register(url = "", data = {}) {
      for (let key in this.data) {
        if (!this.data[key]) {
          return Message.error({
            message: this.confirmData[key],
            duration: 1000,
          });
        }
      }
      if (this.data.password !== this.data.password2) {
        return Message.error({
          message: "两次密码不一致!",
          duration: 1000,
        });
      }
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify(data),
      });
      return res.json();
    },
    handelClick() {
      const roleData = {
        学生: "student",
        教师: "teacher",
      };
      this.register(mockUrl + "/userRegiste", {
        name: this.data.name,
        email: this.data.email,
        password: this.data.password,
        role: roleData[this.data.value],
      })
        .then((res) => {
          if (!res.data) {
            return;
          }
          Message.success({
            message: "注册成功，即将返回登录页面。",
            duration: 1000,
            onClose: () => this.$router.push(`/login`),
          });
        })
        .catch((error) => {
          return Message.error({
            message: error || "注册失败，请稍候重试！",
            duration: 1500,
          });
        });
    },
  },
};
</script>

<style scoped>
.left {
  width: 60%;
}

.right {
  width: 40%;
}

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
.login_email {
  margin-top: 30px;
}
.login_password {
  margin-top: 30px;
}
.login_button {
  margin-top: 20px;
}
.login_btn {
  width: 100%;
}
</style>

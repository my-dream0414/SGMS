<template>
  <div class="hello">
    <el-row class="header">
      <span>修改用户信息</span>
    </el-row>
    <el-row class="content">
      <el-col>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-col :span="10">
              <el-input v-model="form.name"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="电话">
            <el-col :span="10">
              <el-input v-model="form.telephone"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-col :span="10">
              <el-input v-model="form.email"></el-input>
            </el-col>
          </el-form-item>

          <el-form-item label="学院">
            <el-col class="line" :span="4">
              <el-select v-model="form.academy" placeholder="请选择学院">
                <el-option label="信息学院" value="信息学院"></el-option>
                <el-option
                  label="计算机科学与技术学院"
                  value="计算机科学与技术学院"
                ></el-option>
                <el-option
                  label="土木工程学院"
                  value="土木工程学院"
                ></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="专业">
            <el-col class="line" :span="4">
              <el-select v-model="form.major" placeholder="请选择专业">
                <!-- <el-option v-for="key in major[form.academy]" :label="key" :value="key"></el-option> -->

                <el-option
                  v-for="item in major[form.academy]"
                  :label="item"
                  :value="item"
                  :key="item"
                ></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="性别">
            <el-col :span="3">
              <el-radio-group v-model="form.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-col>
          </el-form-item>

          <el-form-item label="出生时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="出生年月"
                v-model="form.borndate"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="个人简介">
            <el-input type="textarea" v-model="form.introduction"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "correct",
  data() {
    return {
      msg: "章桥是我儿子",
      form: {
        name: "",
        telephone: "",
        email: "",
        academy: "",
        major: "",
        class: "",
        gender: "",
        borndate: "",
        introduction: "",
      },
      major: {
        计算机科学与技术学院: ["计算机科学与技术", "信息安全", "软件工程"],
        信息学院: ["电子信息", "物联网工程"],
        土木工程学院: ["土木工程", "工程造价", "城乡建设"],
      },
    };
  },
  mounted() {
    console.log(this.major["信息管理学院"]);
    // this.getInfo().then((res) => {
    //   const data = res.data;
    //   this.userName = data.name;
    //   this.role = data.name;
    //   this.class = data.class;
    //   this.stuId = data.stuId;
    //   this.major = data.major;
    //   this.$router .push( {path: "/selfinfo"})
    // });
  },
  methods: {
    // async getInfo() {
    //   const token = localStorage.getItem("token");
    //   const res = await fetch(mockUrl + "/poststudentinfo", {
    //     headers: {
    //       token: token,
    //     },
    //   });
    //   return res.json();
    // },
    onSubmit() {
      console.log(this.form.academy);
    },
  },
};
</script>

<style scoped>
.hello {
  margin: 20px;
}
.header {
  margin: 20px;
  color: black;
  font-size: 30px;
}
.content {
  margin-bottom: 10px;
  font-size: 20px;
}
</style>

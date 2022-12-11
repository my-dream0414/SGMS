<template>
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            router :default-openeds=open :default-active="this.$route.path">
            <el-menu-item index="/teacher">首页</el-menu-item>
            <el-submenu index="student">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/teacher/GradeManage">学生成绩管理</el-menu-item>
                <el-menu-item index="/teacher/StuInfoManage">学生信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="source">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/teacher/SourceManage">课程信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <h1>{{ this.$route.meta.title }}</h1>
          <h5 class="name">{{ this.name }}{{ "（教师）" }}</h5>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import { mockUrl } from '../../config';
export default {

  name: "teacher",
  data() {
    return {
      open: ['student'],
      name: "",
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    this.getteaInfo(mockUrl + "/getTeacherInfo", token).then(res => {
      this.name = res.data.name;
    })
  },
  methods: {
    async getteaInfo(url = "", token) {
      const res = await fetch(url, {
        headers: {
          token: token,
        }
      })
      return res.json();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo {
  width: 100%;
  height: 80%;
}

.el-header {
  position: relative;
}

.name {
  position: absolute;
  right: 20px;
  bottom: 0;
  cursor: pointer;
}

.el-header,
.el-footer {
  background-color: #f3f3f3;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-left: 200px;
}

.el-aside {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #545c64;
  color: #333;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
}

.el-main {
  background-color: white;
  margin-left: 200px;
  color: #333;
  text-align: center;
  height: 88vh;
}

body>.el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-container {
  overflow-y: hidden;
}
</style>

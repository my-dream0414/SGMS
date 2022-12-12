<template>
  <div class="main">
    <div class="headerbox"></div>
    <el-row >
      <el-col :span="4">
        <el-menu
          default-active="/selfinfo"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          router
          @close="handleClose"
          background-color="#f0f9fd"
          text-color="black"
          active-text-color="white"
        >
          <el-submenu index="/selfinfo">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>个人信息</span>
            </template>
          </el-submenu>
          <el-submenu index="/Grade">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成绩概览</span>
            </template>
          </el-submenu>
          <el-submenu index="/ScoreAn">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成绩分析</span>
            </template>
          </el-submenu>
          <el-submenu index="/Correct">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>信息修改</span>
            </template>
          </el-submenu>
        </el-menu>
        
      </el-col>

      <el-col :span="20">
        <router-view></router-view>
      </el-col>

    </el-row>
  </div>
</template>

<script>
// import Schart from "vue-schart";
import { mockUrl } from "../../config";
export default {
  name: "student",
  data() {
    return {
      workDetailDialogVisible: false,
      userName: "",
      role: "",
      class: "",
      stuId: "",
      major: "",
    };
  },

  components: {
  },
  watch:{
    // 监听路由变化
    '$route.path':{
      handler(routePath){
        this.handleOpen(routePath)
      }
    }
  },
  computed: {},
  mounted() {
    this.getInfo().then((res) => {
      const data = res.data;
      this.userName = data.name;
      this.role = data.name;
      this.class = data.class;
      this.stuId = data.stuId;
      this.major = data.major;
      this.$router .push( {path: "/selfinfo"})
    });
  },
  methods: {
    async getInfo() {
      const token = localStorage.getItem("token");
      const res = await fetch(mockUrl + "/getStudentInfo", {
        headers: {
          token: token,
        },
      });
      return res.json();
    },
    handleOpen(key, keyPath){
      console.log(key, keyPath)
      // this.activeIndex = this.$route.path
      this.$router .push( {path: key})
    },
    handleClose(){

    }

  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 28.5px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
  width: 100%;
}

.correctBtn {
  font-size: 15px;
  color: #999;
  line-height: 30px;
  text-decoration: none;
}
.schart {
  width: 100%;
  height: 300px;
}

el-menu-item,
.el-submenu__title {
  height: 40px;
  line-height: 40px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
  float: left;
}
.headerbox{
  height: 50pX;
  background-color: aqua;
  margin-bottom: 10px;
}
.el-menu-vertical-demo {
  height: 750px;
}
</style>

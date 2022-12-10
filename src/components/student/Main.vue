<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 380px">
          <div class="user-info">
            <img src="../../assets\img\zhangqiao.png" class="user-avator" alt />
          </div>
          <div class="user-info-list">
            姓名
            <span>{{ this.userName }}</span>
          </div>
          <div class="user-info-list">
            班级：
            <span>{{this.class}}</span>
          </div>
          <div class="user-info-list">
            学号：
            <span>{{(this.stuId)}}</span>
          </div>
          <div class="user-info-list">
            专业：
            <span>{{this.major}}</span>
          </div>
          <div class="user-info-list">
            身份
            <span>{{this.role}}</span>
          </div>
          <!-- <router-link to="/correct" class="correctBtn">修改</router-link> -->
</el-card>
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

  computed: {

  },
  mounted() {

    this.getInfo().then(res => {
      const data = res.data;
      this.userName = data.name;
      this.role = data.name;
      this.class = data.class;
      this.stuId = data.stuId;
      this.major = data.major;
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
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
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

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
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
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
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
</style>

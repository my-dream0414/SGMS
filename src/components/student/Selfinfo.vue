<template>
  <div class="Selfinfo">
    <el-card shadow="hover" class="mgb20">
      <div class="user-info">
        <img src="../../assets\img\zhangqiao.png" class="user-avator" alt />
        <h3>嘴强王者</h3>
      </div>
    </el-card>
    <span class="headerlabel"> 基本信息 </span>
    <el-card
      ><el-descriptions
        class="margin-top"
        :column="2"
        border
        :contentStyle="CS"
        :label-style="LS"
      >
        <el-descriptions-item>
          <template slot="label"> 姓名 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 性别 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 地址 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 邮箱 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 学校 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 专业 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 班级 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 学号 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 出生日期 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 用户名 </template> <span>{{this.userName}} </span> 
        </el-descriptions-item>
      </el-descriptions>
      </el-card>
  </div>
</template>
  
  <script>
import { mockUrl } from "../../config";
export default {
  name: "Selfinfo",
  data() {
    return {
      workDetailDialogVisible: false,
      userName: "",
      role: "",
      class: "",
      stuId: "",
      major: "",
      CS: {
        "text-align": "center", //文本居中
        "min-width": "250px", //最小宽度
        "word-break": "break-all", //过长时自动换行
      },
      LS: {
        color: "#000",
        "text-align": "center",
        "font-weight": "600",
        height: "70px",
        "background-color": "rgba(255, 97, 2, 0.1)",
        "min-width": "110px",
        "word-break": "keep-all",
      },
    };
  },
  mounted() {
    this.getInfo().then((res) => {
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
  font-size: 30px;
  color: rgb(8, 8, 8);
  line-height: 28.5px;
  margin-top: 30px;
}

.user-info-list span {
  /* margin-left: 70px; */
}
.headerlabel {
  margin: 10px;
  font-size: 20px;
}
h3 {
  margin-left: 30px;
}
</style>
  
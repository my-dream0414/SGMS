<template>
  <div class="Grade">
    <el-row>
      <el-col>
        <el-card shadow="hover" style="height: 730px">
          <el-menu>成绩表</el-menu>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="black"
            background-color="white"
            active-text-color="#31c27c"
            router
          >
            <el-menu-item index="1">第一学期</el-menu-item>
            <el-menu-item index="2">第二学期</el-menu-item>
            <el-menu-item index="3">第三学期</el-menu-item>
            <el-menu-item index="4">第四学期</el-menu-item>
          </el-menu>
          <el-table
            :data="table_data"
            header-row-class-name="header_row_className"
            height="720"
            border
            style="width: 100%"
          >
            <el-table-column align="center" prop="subject" label="科目">
            </el-table-column>
            <el-table-column align="center" prop="credit" label="学分">
            </el-table-column>
            <el-table-column prop="score" label="分数" align="center">
            </el-table-column>
            <el-table-column
              prop="point"
              label="绩点"
              align="center"
              width="100"
            >
            </el-table-column>
            <el-table-column prop="term" label="学期" align="center">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
import { init } from "events";
import { mockUrl } from "../../config";
export default {
  name: "Grade",
  data() {
    return {
      workDetailDialogVisible: false,
      userName: "",
      role: "",
      class: "",
      stuId: "",
      major: "",
      score: [],
      tableLabel:["date","name","address"],
      tableData: [
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 4 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 4 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 4 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 4 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 4 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 2 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 3 },
        { subject: "高数", credit: 3, score: 96, point: 15.3, term: 1 },
      ],
      table_data: [],

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
    this.init()
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
    handleSelect(key, keyPath) {
      this.table_data = [];
      for (let i in this.tableData) {
        if (this.tableData[i].term == key) {
          this.table_data.push(this.tableData[i]);
        }
      }
    },
    init(){
      this.table_data = this.tableData
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .Grade {
    margin-left: 10px;
  }
</style>
  
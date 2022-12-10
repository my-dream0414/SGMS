<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 380px">
          <div class="user-info">
            <img src="../../assets\img\zhangqiao.png" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>{{ this.now }}</span>
          </div>
          <div class="user-info-list">
            班级：
            <span>软工2002班</span>
          </div>
          <div class="user-info-list">
            学号：
            <span>5120205942</span>
          </div>
          <div class="user-info-list">
            专业：
            <span>软件工程</span>
          </div>
          <div class="user-info-list">
            性别：
            <span>女</span>
          </div>
          <el-button style="padding: 3px 0" type="text" @click="correct"
            >信息修改</el-button
          >
          <!-- <router-link to="/correct" class="correctBtn">修改</router-link> -->

          <el-dialog
            class="assignWorkloadDialog"
            title="信息修改"
            :visible.sync="workDetailDialogVisible"
            width="50%"
            :modal="false"
          >
            <!-- :model='formData' -->
            <el-form label-width="80px">
              <el-form-item label="日期：">
                <el-input v-model="this.date"></el-input>
              </el-form-item>
              <el-form-item label="姓名：">
                <el-input v-model="this.name"></el-input>
              </el-form-item>
              <el-form-item label="地址：">
                <el-input v-model="this.address"></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                <el-input ></el-input>
              </el-form-item>
              <el-form-item label="邮箱：">
                <el-input ></el-input>
              </el-form-item>
            </el-form>
            <div class="login_button">
              <el-button type="primary" class="login_btn" @click="submit"
                >提交</el-button
              >
            </div>
          </el-dialog>
        </el-card>

        <el-card shadow="hover" style="height: 252px">
          <div slot="header" class="clearfix">
            <span>语言详情</span>
          </div>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress
          >JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>学分</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>及格课程数</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>不及格课程数</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-card shadow="hover" style="height: 530px">
          <el-menu>成绩表</el-menu>
          <!-- 成绩表导航栏 -->
          <!-- :default-active="path" : 路由监听 -->

          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="black"
            background-color="white"
            active-text-color="#31c27c"
            router
          >
            <!-- el-menu-item：根据数据v-for生成 -->
            <!-- 添加一级菜单 -->
            <el-menu-item index="1">第一学期</el-menu-item>
            <el-menu-item index="2">第二学期</el-menu-item>
            <el-menu-item index="3">第三学期</el-menu-item>
            <el-menu-item index="4">第四学期</el-menu-item>
          </el-menu>
          <el-table
            :data="table_data"
            header-row-class-name="header_row_className"
            height="420"
            border
            style="width: 100%"
          >
            <el-table-column align="center" prop="subject" label="科目">
            </el-table-column>
            <!-- <template slot-scope="scope"></template> -->
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

    <el-row>
      <el-col style="width: 50%">
        <el-card shadow="hover">
          <el-tabs type="card" @tab-click="handleClick">
            <el-tab-pane label="数学" name="1"></el-tab-pane>
            <el-tab-pane label="英语" name="second"></el-tab-pane>
            <el-tab-pane label="语文" name="third"></el-tab-pane>
            <el-tab-pane label="物理" name="fourth"></el-tab-pane>
          </el-tabs>
          <el-table
            :data="tabledataset"
            header-row-class-name="header_row_className"
            height="420"
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
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="line"
            class="schart"
            canvasId="line"
            :options="options2"
          ></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import path from "path";
import Schart from "vue-schart";
export default {
  name: "student",
  data() {
    return {
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
      tabledataset: [],
      date: "",
      name: "",
      address: "",
      workDetailDialogVisible: false,
      now: "",
      name: localStorage.getItem("ms_username"),
      data: [
        {
          name: "2019/09/04",
          value: 1083,
        },
        {
          name: "2019/09/05",
          value: 941,
        },
        {
          name: "2019/09/06",
          value: 1139,
        },
        {
          name: "2019/09/07",
          value: 816,
        },
        {
          name: "2019/09/08",
          value: 327,
        },
        {
          name: "2018/09/09",
          value: 228,
        },
        {
          name: "2019/09/10",
          value: 1065,
        },
      ],
      options: {
        type: "bar",
        title: {
          text: "最近一周各品类销售图",
        },
        xRorate: 25,
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 190, 135, 160],
          },
          {
            label: "食品",
            data: [144, 198, 150, 235, 120],
          },
        ],
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类销售趋势图",
        },
        labels: ["6月", "7月", "8月", "9月", "10月"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 150, 135, 160],
          },
          {
            label: "食品",
            data: [74, 118, 200, 235, 90],
          },
        ],
      },
    };
  },

  components: {
    Schart,
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    },
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.now = new Date();
      console.log(this.now);
      this.table_data = this.tableData;
    },
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`;
      });
    },
    handleClick(key) {
      this.tabledataset = [];
      // key = key + 1
      let index = key.index;
      index = parseInt(index) + 1;
      console.log(key.index);
      for (let i in this.tableData) {
        console.log(index);
        if (this.tableData[i].term == index) {
          console.log(this.tableData[i]);
          this.tabledataset.push(this.tableData[i]);
        }
      }
    },

    // 修改信息对话框
    correct() {
      this.workDetailDialogVisible = true;
    },

    // 对话框信息提交
    submit() {
      this.workDetailDialogVisible = false;
    },
    resetWorkTime() {
      this.zhipaiTotal = 0;
    },
    handleSelect(key, keyPath) {
      this.table_data = [];
      for (let i in this.tableData) {
        if (this.tableData[i].term == key) {
          this.table_data.push(this.tableData[i]);
        }
      }
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

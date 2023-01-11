<template>
  <div class="ScoreAn">
    
    <el-row>
      <el-col>
        <el-card shadow="hover">
          <el-menu>成绩概况分析</el-menu>
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
        </el-card>
      </el-col>

      <div  class="mgb20">
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
        </div>
        <el-col style="height:15px"></el-col>


      <el-col style="width: 50%">
        <el-card id="chart1" style="height: 500px">
        </el-card>
      </el-col>
      <el-col style="width: 50%">
        <el-card id="chart2" style="height: 500px"> </el-card>
      </el-col>
      <el-col>
        <el-card>
          <div></div>
        </el-card>
      </el-col>
    </el-row>
   
  </div>
</template>
    
    <script>
import { mockUrl } from "../../config";
import * as echarts from "echarts";
export default {
  name: "ScoreAn",
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

  mounted() {
    this.getInfo().then((res) => {
      const data = res.data;
      this.userName = data.name;
      this.role = data.name;
      this.class = data.class;
      this.stuId = data.stuId;
      this.major = data.major;
    });
    this.init();
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
    handleSelect(key) {
      console.log(key);
    },
    init() {
      var chartDom = document.getElementById("chart1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "成绩分析",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);

      var chartDom = document.getElementById("chart2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "成绩分析",
        },
        legend: {
          data: ["第一学期", "第二学期","第三学期","第四学期","第五学期","第六学期"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "成绩分析",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "第一学期",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
.contentchart {
  border-width: 1px;
  border-color: black;
}
.mgb20 {
  margin-bottom: 20px;
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
</style>
    
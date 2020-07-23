<template>
  <div class="hello">
    <div class="head">
      <div class="headLift">
        <span>公司logo</span>
        <span>
          <i class="el-icon-s-unfold" style="margin-right:5px;"></i>首页
        </span>
      </div>
      <div class="headRight">
        <span>qq账号</span>
        <span>
          <el-dropdown>
            <span class="el-dropdown-link">
              中文
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>En</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>
    <div class="body">
      <div class="bodyLeft">
        <el-row class="tac">
          <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span>报表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">综合报表</el-menu-item>
                  <el-menu-item index="1-2">用户活跃</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">应用&广告位</span>
              </el-menu-item>

              <el-menu-item index="4">
                <i class="el-icon-office-building"></i>
                <span slot="title">中介</span>
              </el-menu-item>

              <el-menu-item index="5">
                <i class="el-icon-position"></i>
                <span slot="title">广告网络</span>
              </el-menu-item>

              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">账号</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>

      <div class="bodyMiddle"></div>

      <div class="bodyRight">
        <div class="block">
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>

        <div class="echarts">
          <div class="echartsFirst">
            <div class="echTop">
              <p>展示次数</p>
              <p>一</p>
              <p>-</p>
            </div>
            <div id="myChart" :style="{width: '515px', height: '350px'}"></div>
          </div>

          <div class="echartsFirst">
            <div class="echTop">
              <p>eCPM</p>
              <p>一</p>
              <p>-</p>
            </div>
            <div id="myChart2" :style="{width: '515px', height: '350px'}"></div>
          </div>

          <div class="echartsFirst">
            <div class="echTop">
              <p>预估收入</p>
              <p>一</p>
              <p>-</p>
            </div>
            <div id="myChart3" :style="{width: '515px', height: '350px'}"></div>
          </div>
        </div>

        <button>查看完整报表</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
  name: "index",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      let myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      // 绘制图表
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });

       myChart2.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });

       myChart3.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  height: 50px;
  width: 100%;
  background-color: #147ce4;
  display: flex;
  justify-content: space-between;
  color: white;
  line-height: 50px;
}
.headLift {
  margin-left: 30px;
}
.headLift > span {
  margin-right: 40px;
}
.headRight {
  margin-right: 10px;
}
.headRight > span {
  margin-right: 40px;
}
/* 头部下拉框 */
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-aside {
  background-color: #d3dce6;
  height: 100%;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

/* 身体部分 */
.body {
  width: 100%;
  height: 100%;
  display: flex;
}
.bodyLeft {
  width: 8%;
}
.bodyMiddle {
  width: 0.8%;
  background-color: rgb(240, 238, 238);
}

.block {
  margin-top: 20px;
  margin-left: 20px;
}
.echarts {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
.echartsFirst{
  margin-top: 20px;
}
.echTop{
  border-left:2px solid red ;
  height: 70px;
  padding-left: 20px;
  color: rgb(138, 136, 136);
  font-size: 18px;
}
#myChart,#myChart2,#myChart3{
 top:-41px;
}
</style>

<template>
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

    <div>
      <div class="echarts clearfix">
        <div class="echartsFirst">
          <div class="echTop">
            <p>展示次数</p>
            <p>一</p>
            <p>-</p>
          </div>
          <div id="myChart" :style="{width: '510px', height: '350px'}"></div>
        </div>

        <div class="echartsFirst">
          <div class="echTop">
            <p>eCPM</p>
            <p>一</p>
            <p>-</p>
          </div>
          <div id="myChart2" :style="{width: '510px', height: '350px'}"></div>
        </div>

        <div class="echartsFirst">
          <div class="echTop">
            <p>预估收入</p>
            <p>一</p>
            <p>-</p>
          </div>
          <div id="myChart3" :style="{width: '510px', height: '350px'}"></div>
        </div>
      </div>
    </div>

    <button class="btn">查看完整报表</button>

    <div class="rightBootom">
      <span>应用</span>
      <div class="search">
        <input type="text" placeholder="按应用名称或ID搜索" />
        <button class="inputBtn">
          <span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAnBJREFUOBGtlMtrE1EUh8+5mRZpqC3alVRLiouCK1/VhdQHFowKsSIliUkm07W4EPxTRETIc5KAC+lGsCkIWgpCwaotKEjRhSuLKCiI7cwcfzNl6mQc6AMvDPfe8/jmPO69RP95cJhnmube37bcYeELQnSESPbAaJ4VP97X19tIpVI/wj7BfQewVG2kSJyHAPUz0xwJL5OSLnJ4VEiOM/GHGKsbup59G4QE15vAarVx3iZ5SkKvFGm5YjG9EjQsm+ZJsahCTAmNtdFCIb0c1Ptr5S5ardYBwKYRxXvuiyfDMNfGyOUWqKf7HH742ZL1+yKyGYyr94cH/LVm3UaaPapbSxkTE999ZXiempxchcMtETpTrprpsN7de0DAkkzSNjKZT1FGQVmxmGsj7Y/EfC0o99ceEMUfgmDJF241ozmLSP1wlN0GkCkGpftta6B+ChW0oow9IAu9g/JYlEFY5jWD+SiLvA7r3P0GkGWaiM+Wm82RKKOgrFJvXSWRIdTwWVDurz2govgDNOabrNuVWm0m7ivDM27RoDjOPdRwwSjcfBTWu3sPqOvXvypmHVGesJzVF6V6/Z/0y7XG5TVb5nFWD7KiEjMKFTE6Dme53hx3HKeJlAZw9d7gB0uomYZjcgpdTUC2gnk/9l3EsStThezzMNOL0Bca+ezsQH/vMJO6C8cvAF9ErdAAwjVTeuLQ4IimtHHo1knsJ5VKY8z39eeOCH3hVrN7rx2LZpG1hvSTRj4/5/vsCug6l2otlMFu43nDA/QXumugC0Wkp8WmGXRHaRQb0/XMYkcNXaOdDLxAL2OkLuGQ/8TdGd6J77Zt/wDBGdWpN+uNFAAAAABJRU5ErkJggg=="
              alt
            />
          </span>
        </button>
      </div>
    </div>

    <div class="appName">
      <el-row>
        <el-col :span="9">
          <div class="grid-content bg-purple leftTitle">应用名称</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-info"></i>
            <el-tooltip class="item" effect="dark" content="数据来自第三方网络展示数之和" placement="top">
              <el-button class="elbtn">展示次数</el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-info"></i>
            <el-tooltip class="item" effect="dark" content="数据来自第三方网络展示数之和" placement="top">
              <el-button class="elbtn">点击数</el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-info"></i>
            <el-tooltip class="item" effect="dark" content="数据来自第三方网络展示数之和" placement="top">
              <el-button class="elbtn">点击率</el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-info"></i>
            <el-tooltip class="item" effect="dark" content="数据来自第三方网络展示数之和" placement="top">
              <el-button class="elbtn">eCPM</el-button>
            </el-tooltip>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">
            <i class="el-icon-info"></i>
            <el-tooltip class="item" effect="dark" content="数据来自第三方网络展示数之和" placement="top">
              <el-button class="elbtn">预估收入</el-button>
            </el-tooltip>
          </div>
        </el-col>
      </el-row>

      <div class="datas">暂无数据</div>
      <div class="paging">
        <el-pagination background layout="prev, pager, next" :total="3"></el-pagination>
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

<style scoped>
.bodyRight {
  width: 100%;
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
.echartsFirst {
  margin-top: 20px;
  /* float: left; */
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.echTop {
  border-left: 2px solid red;
  height: 70px;
  padding-left: 20px;
  color: rgb(138, 136, 136);
  font-size: 18px;
}
#myChart,
#myChart2,
#myChart3 {
  top: -41px;
}

.btn {
  margin-left: 20px;
  padding: 8px 20px;
  color: #247ae6;
  border: 1px solid #247ae6;
  background-color: white;
  border-radius: 5px;
  margin-top: -6px;
}

.rightBootom {
  border-top: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  height: 80px;
  line-height: 80px;
  overflow: hidden;
  text-align: left;
}
.search {
  position: relative;
  width: 40%;
  height: 100%;
  display: inline-block;
}
.rightBootom > span {
  font-size: 26px;
  color: rgb(129, 125, 125);
  margin-right: 30px;
}
.search > input {
  height: 40px;
  line-height: 40px;
  color: #606266;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  padding-left: 20px;
  font-size: 14px;
  width: 100%;
  margin-left: 20px;
}
.inputBtn {
  width: 35px;
  height: 35px;
  border: none;
  position: absolute;
  top: 50%;
  right: -12px;
  transform: translateY(-50%);
  z-index: 999;
  padding: 0;
  background-color: white;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  font-weight: 500;
}
.appName {
  margin: 0 20px;
}
.bg-purple {
  background: #e5e9f2;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.leftTitle {
  line-height: 30px;
  padding-left: 10px;
  color: rgb(117, 115, 115);
}
.elbtn {
  background-color: #e5e9f2;
  width: 50px;
  height: 30px;
  border: none;
}
.datas {
  width: 100%;
  height: 100%;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
.paging{
    margin-top: 20px;
    text-align: center;
}
</style>
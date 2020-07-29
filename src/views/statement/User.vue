<template>
  <div class="user">
    <div class="user-head">
      <!-- 日期选择器 -->
      <div class="block">
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>

      <!-- 快新闻 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="快新闻">
              <el-option label="222" value="one">222</el-option>
              <el-option label="11" value="two">11</el-option>
              <el-option label="快日记" value="three">快日记</el-option>
              <el-option label="快新闻" value="four">快新闻</el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 地区 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="阿富汗">
              <el-input
                class="app-input"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2"
              ></el-input>
              <p v-for="item in allCountry" :key="item.id" class="allCountry">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 图表 -->
    <div>
      <div class="echarts clearfix">
        <div class="echartsFirst">
          <div class="echTop">
            <p>
              <el-dropdown>
                <span class="el-dropdown-link">
                  Config DAU
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in numberOfHits" :key="item.id">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
            <p>一</p>
            <p>-</p>
          </div>
          <div id="myChart"></div>
        </div>

        <div class="echartsFirst">
          <div class="echTop">
            <p>
              <el-dropdown>
                <span class="el-dropdown-link">
                  DEU
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in numberOfHits" :key="item.id">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
            <p>一</p>
            <p>-</p>
          </div>
          <div id="myChart2"></div>
        </div>
      </div>
    </div>

    <div class="user-bottom">
      <div class="el-row-col">
        <el-row>
          <el-col :span="4"><i class="el-icon-info"></i>日期</el-col>
          <el-col :span="4">
            <i class="el-icon-info"></i>Config DAU
          </el-col>
          <el-col :span="4">
            <i class="el-icon-info"></i>DEU
          </el-col>
          <el-col :span="4">
            <i class="el-icon-info"></i>渗透率
          </el-col>
          <el-col :span="4">
            <i class="el-icon-info"></i>Impression/DAU
          </el-col>
          <el-col :span="4">
            <i class="el-icon-info"></i>Impression/DAU
          </el-col>
          
        </el-row>
      </div>
      <p class="datas">暂无数据</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value2: "",
      //   newsList: ["222", "111", "快日记", "快新闻"],
      allCountry: ["中国", "泰国", "巴基斯坦", "韩国"],
      formInline: {
        user: "",
        region: "",
      },
      input2:"",
      numberOfHits: [
        "Config DAU",
        "DEU",
        "渗透率",
        "填充数",
        "填充率",
        "展示点击数",
        "展示率",
      ],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
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
    },
  },
};
</script>

<style scoped>
.user {
  padding: 20px;
}
.user-head {
  display: flex;
}
.all-width {
  margin-left: 10px;
}
.app-input {
  width: 210px;
}
.app-input,
.allCountry {
  margin: 10px;
}
.echarts {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.echartsFirst {
  width: 45%;
  height: 350px;
}

.echTop {
  border-left: 2px solid red;
  height: 70px;
  padding-left: 20px;
  color: rgb(138, 136, 136);
  font-size: 18px;
}
#myChart,
#myChart2 {
  width: 100%;
  height: 100%;
  top: -41px;
}
.el-row-col {
  background-color: rgb(241, 241, 241);
  height: 35px;
  line-height: 35px;
  color: rgb(107, 105, 105);
  margin-top: 20px;
  padding-left: 10px;
}
.datas {
  text-align: center;
  line-height: 80px;
}
.user-bottom{
    margin-top: 60px;
    border-bottom: 1px solid #ccc;
}
</style>
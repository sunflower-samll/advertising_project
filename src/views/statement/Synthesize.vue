<template>
  <div class="synthesize">
    <div class="aynth-headList">
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

      <!-- 应用 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="应用">
              <el-input
                class="app-input"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2"
              ></el-input>
              <p v-for="item in allAppList" :key="item.id" class="allAppList">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 广告位 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="广告位">
              <el-input
                class="app-input"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2"
              ></el-input>
              <p v-for="item in allAdverSpace" :key="item.id" class="allAdverSpace">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 广告网络 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="广告网络">
              <p v-for="item in allAdverNetwork" :key="item.id" class="allAdverNetwork">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 广告源 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="广告源">
              <el-input
                class="app-input"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input2"
              ></el-input>
              <p v-for="item in allAdverSource" :key="item.id" class="allAdverSource">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 所有国家 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="所有国家/地区">
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

      <!-- 广告类型 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="广告类型">
              <p v-for="item in allAdverType" :key="item.id" class="allAdverType">
                <el-checkbox>{{item}}</el-checkbox>
              </p>
              <el-option label="区域二" value="beijing" style="display:none"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <!-- 平台 -->
      <div class="all-width">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="formInline.region" placeholder="平台">
              <p class="allAdverType">
                <el-checkbox>Android</el-checkbox>
              </p>
              <p class="allAdverType">
                <el-checkbox>iOS</el-checkbox>
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
                  点击数
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
                  填充率
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

    <!-- 应用导航 -->
    <div class="synthesize-bottom">
      <el-tabs v-model="activeName">
        <el-tab-pane label="应用" name="first">
          <p class="app-search">
            <el-input placeholder="按应用名称或ID搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </p>
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">应用名称</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="广告位" name="second">
          <p class="app-search">
            <el-input placeholder="按广告位名称或ID搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </p>
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">广告位</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="广告网络" name="third">
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">广告网络</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="广告源" name="fourth">
          <p class="app-search">
            <el-input placeholder="按广告源名称或ID搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </p>
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">广告源</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="国家/地区" name="five">
          <p class="app-search">
            <el-input placeholder="按国家/地区名称或ID搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </p>
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">国家/地区</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="广告类型" name="six">
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">广告类型</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="平台" name="seven">
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">平台</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
        <el-tab-pane label="日期" name="eight">
          <div class="el-row-col">
            <el-row>
              <el-col :span="6">日期</el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>请求数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>填充率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示次数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>展示率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击数
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>点击率
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>eCPM
              </el-col>
              <el-col :span="2">
                <i class="el-icon-info"></i>预估收入
              </el-col>
            </el-row>
          </div>
          <p class="datas">暂无数据</p>
        </el-tab-pane>
      </el-tabs>
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
      input2: "",
      formInline: {
        user: "",
        region: "",
      },
      //应用列表
      allAppList: ["222", "111", "快日记", "快新闻"],
      allAdverSpace: ["开屏广告", "横幅广告", "激励广告", "积分墙广告"],
      allAdverNetwork: [
        "facebook",
        "facebook",
        "facebook",
        "facebook",
        "facebook",
        "facebook",
      ],
      allAdverSource: [
        "Pangle_open",
        "Pangle_open",
        "Pangle_open",
        "Pangle_open",
        "Pangle_open",
      ],
      allCountry: ["中国", "泰国", "巴基斯坦", "韩国"],
      allAdverType: ["原生", "插屏", "开屏", "横幅"],

      //点击数下拉菜单
      numberOfHits: [
        "预估收入",
        "eCPM",
        "请求数",
        "填充数",
        "填充率",
        "展示点击数",
        "展示率",
      ],
      activeName: "first",
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
.synthesize {
  padding: 15px;
}
.aynth-headList {
  display: flex;
  height: 35px;
}
.el-input__inner {
  width: 222px;
}
.all-width {
  width: 150px;
  margin-left: 10px;
}
.app-select {
  padding: 10px;
}
.app-input {
  width: 300px;
  margin: 10px;
}
.allAppList,
.allAdverSpace,
.allAdverNetwork,
.allAdverSource,
.allCountry,
.allAdverType {
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
  margin-top: 20px;
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
.synthesize-bottom {
  margin-left: 20px;
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
}
.app-search {
  width: 400px;
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
</style>
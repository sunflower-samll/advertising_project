<template>
  <div class="adver">
    <!-- 左边盒子 -->
    <div class="left">
      <!-- 添加 -->
      <p class="left-p1">
        <span>
          添加应用
          <span>(4)</span>
        </span>
        <el-button type="primary" @click="dialogVisible = true">主要按钮</el-button>

        <el-dialog title="添加应用" :visible.sync="dialogVisible" width="30%">
          <p class="appName">
            <span style="color:red">*</span>
            <span>应用名称</span>
            <input type="text" />
          </p>
          <p class="platform">
            <span style="color:red">*</span>
            <span>平台</span>
            <select>
              <option>Android</option>
              <option value>iOS</option>
            </select>
          </p>
          <div>
            <el-radio v-model="radio" label="1">应用已发布</el-radio>
            <p class="appURl">
              <span>应用商店URL</span>
              <input type="text" />
            </p>
          </div>
          <div>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <p class="package">
              <span style="color:red">*</span>
              <span>包名</span>
              <input type="text" />
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </p>
      <!-- 搜索框 -->
      <el-input placeholder="按应用名搜索" prefix-icon="el-icon-search"></el-input>

      <div class="area">
        <div
          class="news-box"
          v-for="(item,index) in navLists"
          :key="index"
          :class="{blue:changeBlue==index}"
          @click="blues(index)"
        >
          <img :src="item.img" alt />
          <div class="news">
            <p>{{item.title}}</p>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边  -->
    <div class="right">
      <div class="right-head">
        <div class="head-left">
          <div class="edit-box">
            <el-breadcrumb separator="|">
              <el-breadcrumb-item :to="{ path: '|' }">新闻一</el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="/">Android</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item>免费</el-breadcrumb-item>
            </el-breadcrumb>

            <span class="edit">
              <el-button type="text" @click="centerDialogVisible = true">编辑</el-button>
              <el-dialog title="编辑应用" :visible.sync="centerDialogVisible" width="30%" center>
                <p class="appName">
                  <span style="color:red">*</span>
                  <span>应用名称</span>
                  <input type="text" />
                </p>
                <p class="platform">
                  <span style="color:red">*</span>
                  <span>平台</span>
                  <select>
                    <option>Android</option>
                    <option value>iOS</option>
                  </select>
                </p>
                <div>
                  <el-radio v-model="radio" label="1">应用已发布</el-radio>
                  <p class="appURl">
                    <span>应用商店URL</span>
                    <input type="text" />
                  </p>
                </div>
                <div>
                  <el-radio v-model="radio" label="2">备选项</el-radio>
                  <p class="package">
                    <span style="color:red">*</span>
                    <span>包名</span>
                    <input type="text" />
                  </p>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </span>

            <span class="delete">
              <el-button type="text" @click="open">删除</el-button>
            </span>
          </div>
          <p class="idbox">
            <span>应用ID:</span>
            <span>14545454545755754545</span>
          </p>
        </div>

        <div class="head-right">
          <div>
            <el-button type="primary" @click="outerVisible = true">添加广告位</el-button>

            <el-dialog title="添加广告位" :visible.sync="outerVisible">
              <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
              <p class="setting">基础设置</p>
              <p class="typeBox">
                <span style="color:red">*</span>
                <span>广告类型</span>
                <select name id>
                  <option value>Android</option>
                  <option value>iOS</option>
                </select>
              </p>
              <p class="nameBox">
                <span style="color:red">*</span>
                <span>广告位名称</span>
                <input type="text" />
              </p>
              <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="innerVisible = true">确定</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
      </div>

      <div class="right-main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <el-table :data="tableData2" border style="width: 100%">
              <el-table-column prop="adverNetwork" label="广告网络" width="200"></el-table-column>
              <el-table-column prop="adverName" label="广告源名称" width="380"></el-table-column>
              <el-table-column prop="adverMessg" label="广告位信息" width="380"></el-table-column>
              <el-table-column prop="adverState" label="授权状态" width="150">
                <i class="el-icon-success" style="color:#0bbd46"></i>
                <span>已授权</span>
              </el-table-column>
              <el-table-column prop="adverOperation" label="操作">
                <!-- 删除 -->
                <el-button type="text" @click="delet">
                  <i class="el-icon-delete"></i>
                </el-button>
                <!-- 编辑 -->
                <el-button type="text" @click="dialogTableVisible = true" style="margin-left:10px;margin-right:20px">
                  <i class="el-icon-edit"></i>
                </el-button>

                <el-tooltip :content="'Switch value: ' + value" placement="top">
                  <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ccc"
                    active-value="100"
                    inactive-value="0"
                  ></el-switch>
                </el-tooltip>
              </el-table-column>
            </el-table>
          </el-table-column>

          <el-table-column label="广告位" prop="adverId" width="300">
            <p>开屏广告</p>
            <p>
              <span>ID:</span>
              <span>11245412454</span>
            </p>
          </el-table-column>
          <el-table-column label="广告类型" prop="adverName" width="180"></el-table-column>
          <el-table-column label="广告缓存数" prop="adverNumber" width="180"></el-table-column>
          <el-table-column label="第三方广告源" prop="adverType" width="180"></el-table-column>
          <el-table-column label="操作">
            <el-button type="text" @click="dialogFormVisible = true">添加广告源</el-button>
            <router-link to="/agent" style="margin-left:10px;color:#409EFF">查看中介</router-link>
            <el-button type="text" @click="dialogTableVisible = true" style="margin-left:10px">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button type="text" @click="delet">
              <i class="el-icon-delete"></i>
            </el-button>
          </el-table-column>
        </el-table>

        <!-- 添加广告源弹出框 -->
        <el-dialog title="添加广告源" :visible.sync="dialogFormVisible" width="30%" center>
          <div class="addAdverTop">
            <p>
              <span>广告网络</span>
              <select>
                <option value>广告一</option>
                <option value>广告二</option>
              </select>
            </p>
            <p>
              <span style="color:red">*</span>
              <span>广告源名称</span>
              <input type="text" />
            </p>
            <p>
              <span style="color:red">*</span>
              <span>Placement ID</span>
              <input type="text" />
            </p>
          </div>
          <div class="addAdverbotm">
            <p class>报表 API</p>
            <p>
              <span>App ID</span>
              <input type="text" name id />
            </p>
            <p>
              <span>System User Token</span>
              <input type="text" name id />
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <router-link to="https://www.baidu.com" style="margin-right:70px">如何找到这些信息</router-link>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </span>
        </el-dialog>

        <!-- 编辑框 -->
        <el-dialog title="编辑广告位" :visible.sync="dialogTableVisible" width="40%" left>
          <div class="settings" width="100%">
            <p>基础设置</p>
            <div>
              <p>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="广告类型">
                    <el-select disabled style="width:100%">
                      <el-option label="原生"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="广告名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-form>
              </p>
              <div class="template">
                <p>
                  <span style="color:red">*</span>
                  <span>模板</span>
                </p>
                <p>
                  <el-checkbox-group v-model="checkboxGroup1">
                    <el-checkbox-button v-for="item in Template" :label="item" :key="item">{{item}}</el-checkbox-button>
                  </el-checkbox-group>
                </p>
              </div>
            </div>
          </div>

          <div class="height-setting">
            <p>高级设置</p>
            <p>
              <span style="color:red">*</span>
              <span>广告缓存数</span>
              <i class="el-icon-info icon-info"></i>
              <el-input-number
                v-model="num"
                controls-position="right"
                :min="1"
                :max="8"
                class="input-number"
              ></el-input-number>
            </p>
            <div class="frequency">
              <p>
                <span>频次上限</span>
                <el-radio v-model="radio" label="1">展现次数无上限</el-radio>
              </p>
              <p>
                <el-radio v-model="radio" label="2">展现次数上限</el-radio>
                <el-input-number
                  v-model="num"
                  controls-position="right"
                  :min="1"
                  :max="8"
                  class="input-number"
                ></el-input-number>
                <span style="margin-left:10px">次展示，每</span>
                <el-input-number
                  style="margin-left:10px"
                  v-model="num"
                  controls-position="right"
                  :min="1"
                  :max="8"
                  class="input-number"
                ></el-input-number>

                <el-dropdown style="margin-left:10px">
                  <el-button>
                    分钟
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>分钟</el-dropdown-item>
                    <el-dropdown-item>小时</el-dropdown-item>
                    <el-dropdown-item>秒</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </p>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
const Template = ["标准原生", "原生横幅", "Draw信息流"];
export default {
  data() {
    return {
      checkboxGroup1: ["标准原生"],
      Template: Template,
      dialogVisible: false,
      radio: "1",
      centerDialogVisible: false,
      outerVisible: false,
      innerVisible: false,
      operation: false,
      dialogFormVisible: false,
      dialogTableVisible: false,
      changeBlue: 0,
      value: "100", //开关
      navLists: [
        {
          img:
            "https://api-developer.tradplus.com/Public/assets/images/android.png",
          title: "新闻一",
          text: "Andrid",
        },
        {
          img:
            "https://api-developer.tradplus.com/Public/assets/images/android.png",
          title: "新闻二",
          text: "Andrid",
        },
      ],
      tableData: [
        {
          adverId: "开屏广告",
          adverName: "标准原生",
          adverNumber: "1",
          adverType: "2个",
        },
      ],
      tableData2: [
        {
          adverNetwork: "腾讯广告",
          adverName: "Tencent——Ads——native",
          adverMessg: "ID:111111220212",
          adverState: "已授权",
        },
      ],
      form: {
        name: "",
        id: "",
        region: "",
        type: [],
      },
      formLabelWidth: "120px",
      num: 1,
    };
  },
  methods: {
    open() {
      this.$confirm("确认删除？删除后可以再恢复", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    blues: function (index) {
      console.log(index);
      this.changeBlue = index;
    },
    delet() {
      this.$confirm("确认删除？删除后可以再恢复", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
.adver {
  display: flex;
  width: 100%;
  height: 100%;
}
.left {
  flex: 0 0 246px;
  width: 100%;
  border-right: 10px solid rgb(235, 231, 231);

  height: 106%;
}
.left-p1 {
  display: flex;
  padding: 10px 8px;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.el-input__inner {
  border-radius: 0;
}
.right {
  flex: 1;
  height: 100%;
}
.right-head {
  margin-bottom: 8px;
  height: 8%;
  display: flex;
}
.right-main {
  border-top: 10px solid rgb(235, 231, 231);
  height: 92%;
  padding: 10px 10px 0 10px;
}
.appName,
.platform,
.appURl,
.package {
  text-align: right;
  margin-bottom: 20px;
}
.platform > select,
.appURl > input,
.appName > input,
.package > input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin-left: 30px;
  border: 1px solid #ccc;
  font-size: 16px;
}
.area {
  width: 100%;
  margin-top: 20px;
}
.news-box {
  display: flex;
  padding: 10px;
}
.news {
  margin-left: 20px;
  margin-top: 3px;
  font-size: 14px;
  color: rgb(95, 93, 93);
}
.edit-box {
  display: flex;
}
.head-left {
  padding: 10px;
  width: 30%;
}
.edit,
.delete {
  margin-right: 10px;
  margin-left: 20px;
  margin-top: -13px;
}
.idbox {
  color: rgb(156, 154, 154);
  font-size: 14px;
}
.head-right {
  flex: 1;
  margin-left: 750px;
  margin-top: 15px;
}
.setting {
  font-size: 12px;
  margin-top: -20px;
}
.typeBox,
.nameBox {
  width: 500px;
  margin-left: 200px;
  margin-bottom: 30px;
  text-align: right;
}
.typeBox > select,
.nameBox > input {
  margin-left: 20px;
  width: 350px;
  height: 34px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
}
#edit-app {
  background-color: bisque;
}
.blue {
  background-color: #b1d2f5;
  height: 100%;
  border-left: 3px solid #0b61bd;
}
.addAdverTop {
  width: 500px;
  text-align: right;
  border-bottom: 1px solid #ccc;
}
.addAdverTop > p > select,
input {
  width: 380px;
  height: 27px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.addAdverTop > p > select {
  height: 32px;
}
.addAdverbotm {
  margin-top: 10px;
  font-size: 12px;
}
.addAdverbotm > p:first-child {
  color: #252525;
}
.addAdverbotm > p:nth-child(2) {
  margin-left: 70px;
}
.template {
  display: flex;
}
.template > p:nth-child(1) {
  margin-right: 10px;
  margin-left: 35px;
}
.settings {
  margin-left: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.height-setting {
  margin-left: 10px;
  margin-top: 20px;
}
.icon-info {
  margin-left: 10px;
  margin-right: 10px;
}
.input-number {
  width: 80px;
}
.height-setting > p:nth-child(2) {
  margin-left: 30px;
}
.frequency > p:nth-child(1) {
  margin-left: 60px;
  margin-top: 10px;
}
.frequency > p:nth-child(1) > span {
  margin-right: 10px;
}
.frequency > p:nth-child(2) {
  margin-left: 126px;
}
</style>
<template>
  <div class="agent">
    <div class="agentHead">
      <div class="selectBox">
        <span>应用</span>
        <el-select v-model="select" slot="prepend" placeholder="请选择" size="small">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </div>
      <div class="selectBox2">
        <span>广告位</span>
        <!-- <input type="text" /> -->
        <el-select v-model="select2" slot="prepend" placeholder="请选择" size="small">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
      </div>
      <div class="dataBox">
        <span>日期</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          size="small"
        ></el-date-picker>
      </div>
    </div>

    <div class="agentBottom">
      <div class="agentBottom-left">
        <div class="left-head">
          <span>
            中介组
            <label>(0)</label>
          </span>
          <span class="span2">可拖动排序</span>
          <el-button type="primary" @click="centerDialogVisible = true" size="small">+ 添加</el-button>
          <el-dialog title="添加中介组" :visible.sync="centerDialogVisible" width="30%" center>
            <p class="addAgent-P1">
              <span style="color:red">*</span>
              <span>组名</span>
              <input type="text" />
            </p>
            <p class="addAgent-P2">
              <span style="color:red">*</span>
              <span>国家</span>
              <el-select v-model="value1" multiple placeholder="请选择" class="el-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </p>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false" size="small">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false" size="small">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div class="left-bottom"></div>
      </div>

      <div class="agentBottom-right">
        <div class="right-head">
          <p>
            <span>广告网络优先级 | </span>
            <span>泰国</span>
          </p>
          <p>
            <router-link to="/advertising">广告源不够？去管理</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "",
      select2: "",
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
      centerDialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "巴基斯坦",
        },
        {
          value: "选项2",
          label: "韩国",
        },
        {
          value: "选项3",
          label: "泰国",
        },
        {
          value: "选项4",
          label: "阿富汗",
        },
        {
          value: "选项5",
          label: "阿尔及利亚",
        },
      ],
      value1: [],
    };
  },
};
</script>

<style lang='less' scoped>
.agent {
  height: 100%;
  width: 100%;
  .agentHead {
    padding: 10px 10px;
    display: flex;
    border-bottom: 8px solid rgb(235, 231, 231);
    .selectBox {
      margin-right: 20px;
      span {
        margin-right: 10px;
        color: rgb(116, 113, 113);
      }
    }
    .selectBox2 {
      margin-right: 20px;
      span {
        margin-right: 10px;
        color: rgb(116, 113, 113);
      }
      // input{
      //     width: 50px;
      //     height: 28px;
      //     border-radius: 5px;
      //     border: 1px solid #ccc;
      //     border-right: none;
      // }
    }
    .dataBox {
      span {
        margin-right: 10px;
        color: rgb(116, 113, 113);
      }
    }
  }
  .addAgent-P1 {
    margin-bottom: 30px;
    input {
      margin-left: 10px;
      width: 80%;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
  .addAgent-P2 {
    .el-select {
      margin-left: 10px;
      width: 80%;
    }
  }
  .agentBottom {
    height: 100%;
    display: flex;
    width: 100%;
    .agentBottom-left {
      height: 100%;
      width: 300px;
      border-right: 8px solid rgb(235, 231, 231);
      .left-head {
        padding: 10px;
        border-bottom: 1px solid rgb(235, 231, 231);
        font-size: 14px;
        .span2 {
          margin-left: 10px;
          color: #ccc;
          margin-right: 60px;
        }
      }
    }
    .agentBottom-right {
      height: 100%;
      width: 1400px;
      .right-head {
          display: flex;
          padding: 16px;
          border-bottom: 1px solid rgb(235, 231, 231);
          justify-content: space-between;
          width: 100%;
        p {
            font-size: 14px;
          .router-link-active,a{
            text-decoration: none;
            color: #66b1ff;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
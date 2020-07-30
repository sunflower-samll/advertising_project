<template>
  <div class="head">
    <div class="headLift">
      <span>公司logo</span>
      <span>
        <i class="el-icon-s-unfold" style="margin-right:5px;"></i>首页
      </span>
    </div>
    <div class="headRight">
      <span>{{email}}</span>
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
</template>

<script>
export default {
  props:{
    email:{}
  }
};
</script>

<style scoped>
.head {
  height: 6%;
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
</style>
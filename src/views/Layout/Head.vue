<template>
  <div class="head">
    <div class="headLift">
      <span>公司logo</span>
      <span>
        <i class="el-icon-s-unfold" style="margin-right:5px;"></i>
      </span>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="v in breadArr" :key="v.title" :to="{ path: v.path }">{{v.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="headRight">
      <i class="el-icon-s-custom"></i>
      <span>email</span>
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
  data() {
    return {
      breadArr:[]//面包屑数组
    };
  },
  methods: {
    //面包屑
    calcBread() {
      // console.log("计算面包屑");
      // console.log(this.$route);
      let arr = [];
      console.log(arr);
      this.$route.matched.forEach(v=>{
        if(v.meta&&v.meta.title){
          arr.push({
            title:v.meta.title,
            path:v.path
          })
        }
      })
      console.log("计算出来的数组",arr)
      this.breadArr=arr
    },
  },
  created() {
    this.calcBread();
  },
  watch: {
    "$route.path"() {
      this.calcBread(); //切换导航  地址栏发生变化 计算
    },
  },
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
.breadcrumb {
  /* margin-left: -1530px; */
  height: 40px;
  padding-top: 18px;
}
</style>
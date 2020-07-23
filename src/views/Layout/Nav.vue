<template>
    <div class="nav">
         <el-menu router :default-active='$router.path'>
              <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
              </el-menu-item>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-tickets"></i>
                  <span>报表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/statement/synthesize">综合报表</el-menu-item>
                  <el-menu-item index="/statement/user">用户活跃</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="/advertising">
                <i class="el-icon-menu"></i>
                <span slot="title">应用&广告位</span>
              </el-menu-item>

              <el-menu-item index="/agent">
                <i class="el-icon-office-building"></i>
                <span slot="title">中介</span>
              </el-menu-item>

              <el-menu-item index="/network">
                <i class="el-icon-position"></i>
                <span slot="title">广告网络</span>
              </el-menu-item>

              <el-menu-item index="/account">
                <i class="el-icon-setting"></i>
                <span slot="title">账号</span>
              </el-menu-item>
            </el-menu>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav{
        flex: 0 0 150px;
        background-color: aqua;
    }
</style>
<template>
  <div class="Layout">
    <!-- 头部 -->
    <Head></Head>

    <div class="LayoutBody">
      <!-- 左边导航栏 -->
      <Nav></Nav>

      <div class="middle"></div>
      <!-- 右边主要内容 -->
      <RightMin></RightMin>
    </div>
  </div>
</template>

<script>
//引入组件
import Head from "@/views/Layout/Head.vue";
import Nav from "@/views/Layout/Nav.vue";
import RightMin from "@/views/Layout/RightMin.vue";
export default {
  components: {
    Head,
    Nav,
    RightMin
  }
};
</script>

<style scoped>
.LayoutBody{
  display: flex;
}
.middle{
  width: 20px;
  background-color: #ccc;
}
</style>
<template>
  <div class="Account">
    <div class="account-top">
      <span>账号</span>
      <el-button type="primary" @click="changeShow">编辑</el-button>
    </div>

    <div v-if="close">
      <div class="personal">
        <p class="personal-title">个人信息</p>
        <div class="personal-box">
          <p>姓名</p>
          <p>微信/QQ</p>
          <p>邮箱</p>
          <p>国家</p>
        </div>
      </div>
      <div class="personal">
        <p class="personal-title">公司信息</p>
        <div class="personal-box">
          <p>公司名称</p>
          <p>官网</p>
          <p>其中一个产品链接</p>
        </div>
      </div>
    </div>

    <div v-if="show">
      <div class="personal">
        <p class="personal-title">个人信息</p>
        <div class="personal-box2">
          <p>
            <span style="color:red">*</span>
            <span>姓名</span>
            <input class="personal-input" type="text" />
          </p>
          <p>
            <span style="color:red">*</span>
            <span>微信/QQ</span>
            <input class="personal-input" type="text" />
          </p>
          <p>
            <span style="color:red">*</span>
            <span>邮箱</span>
            <input class="personal-input" type="text" />
          </p>
          <div>
            <span>国家</span>
            <select v-model="one" class="personal-input">
              <option v-for="x in shuju" :key="x.id">{{x.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="personal">
        <p class="personal-title">公司信息</p>
        <div class="personal-box2">
          <p>
            <span style="color:red">*</span>
            <span>公司名称</span>
            <input disabled class="personal-input" type="text" />
          </p>
          <p>
            <span>官网</span>
            <input class="personal-input" type="text" />
          </p>
          <p>
            <span>其中一个产品链接</span>
            <input class="personal-input" type="text" />
          </p>
        </div>
      </div>
      <div class="submit">
        <el-button type="primary" @click="changeShow">提交</el-button>
        <el-button @click="closediv">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      close: true,
      shuju: [
        { name: "中国" },
        { name: "美国" },
        { name: "日本" },
        { name: "韩国" },
        { name: "泰国" },
      ],
      one: "",
    };
  },
  methods: {
    changeShow() {
      this.show = true;
      this.close = false;
    },
    closediv(){
        this.show = false;
      this.close = true;
    }
  },
  computed: {},
};
</script>

<style scoped>
.Account {
  padding: 20px;
  height: 845px;
}
.account-top > span {
  font-size: 20px;
  color: rgb(110, 109, 109);
  margin-right: 20px;
}
.personal {
  margin-top: 20px;
  border-top: 1px solid rgb(110, 109, 109);
  padding: 10px;
}
.personal-title {
  font-size: 20px;
  color: rgb(110, 109, 109);
}
.personal-box {
  width: 300px;
  text-align: right;
  line-height: 40px;
  color: rgb(110, 109, 109);
}
.personal-box2 {
  width: 1000px;
  text-align: right;
  line-height: 80px;
  color: rgb(110, 109, 109);
}
.personal-input {
  width: 800px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 20px;
}
.submit{
    width: 1000px;
    text-align: center;
}
</style>
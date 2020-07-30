<template>
  <div class="Login">
    <div class="login-container">
      <h1 class="title">系统登录</h1>
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="100px"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
      </el-form>
      <p class="rememberMe">
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </p>
      <el-button type="primary" class="loginBtn" @click="login">登录</el-button>
    </div>
    <children :email="dynamicValidateForm.email"></children>
  </div>
</template>

<script>
import { checkLogin } from "@/api/account";
import children from "./Layout/Head"
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      checked: true,
      password: "",
    };
  },
  components:{
    children,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async login() {
      let data = await checkLogin(
        {
          "email": this.dynamicValidateForm.email,
          "password": this.password,
        }
      );
      if(data.data === 'success'){
        this.$router.push('/home');
      }else{
        alert("登录失败");
      }
    },
  },
};
</script>

<style scoped>
.Login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 420px;
}
.title {
  color: rgb(40, 191, 218);
  font-size: 24px;
  font-weight: 700px;
  text-align: center;
  margin-left: 100px;
  margin-bottom: 20px;
}
.rememberMe {
  margin-left: 100px;
}
.loginBtn {
  width: 77%;
  margin-top: 15px;
  margin-left: 97px;
}
</style>
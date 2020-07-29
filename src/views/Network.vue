<template>
  <div class="network">
    <div>
      <el-button type="primary" @click="centerDialogVisible = true">添加广告网络</el-button>

      <el-dialog title="Admob报表API" :visible.sync="centerDialogVisible" width="30%" center>
        <div  class="apiKey">
          <div class="adver-network">
            <p>
              <span style="color:red">*</span>
              <span>广告网络</span>
            </p>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <el-select v-model="formInline.region" class="elSelect">
                  <el-option label="Admob" value="one">Admob</el-option>
                  <el-option label="Unity Ads" value="two">Unity Ads</el-option>
                  <el-option label="Vungle" value="three">Vungle</el-option>
                  <el-option label="IronSource" value="four">IronSource</el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <p>
            <span style="color:red">*</span>
            <span>API key</span>
            <input class="allInput" type="text" />
          </p>

          <p>
            <span style="color:red">*</span>
            <span>Organization</span>
            <input class="allInput" placeholder="Organization" type="text" />
          </p>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      formInline: {
        user: "",
        region: "",
      },
    };
  },
};
</script>

<style scoped>
.network {
  padding: 20px;
}
.adver-network {
  display: flex;
  margin-left: 100px;
}
.demo-form-inline {
  margin-left: 20px;
}
.elSelect {
  width: 300px;
}
.apiKey {
  width: 500px;
  text-align: right;
}
.allInput {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 15px;
}
</style>
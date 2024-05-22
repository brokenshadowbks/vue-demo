<template>
  <div>
    <div
        style="width: 400px; height: 350px; margin: 150px auto; background-color:rgba(172,186,209,0.5); border-radius: 10px">
      <div style="width: 100%; height: 100px; font-size: 30px; line-height: 100px; text-align: center; color: #1c1c24">
        欢迎登录
      </div>
      <div style="margin-top: 25px; text-align: center; height: 320px;">
        <el-form :model="log">
          <el-form-item>
            <el-input v-model="log.name" prefix-icon="el-icon-user" style="width: 80%"
                      placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="log.password" prefix-icon="el-icon-lock" style="width: 80%"
                      placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 80%; margin-top: 10px" type="info" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "login",

  data() {
    return {
      log: {}
    }
  },
  created() {
  },//触发事件
  methods: {
    login() {
      request.post("http://localhost:7573/api/login/gateway", this.log).then(res => {

        if (res.code === "0") {

          this.$message({
            message: '登录成功',
            type: 'success'
          });
          localStorage.setItem("user",JSON.stringify(res.data));
          this.$router.push("/layout")
        } else {

          this.$message({
            message: res.msg,
            type: 'error'
          });

        }
      })
    }
  }
}
</script>



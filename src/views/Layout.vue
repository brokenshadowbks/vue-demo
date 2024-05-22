<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: #4c535a">
        <span style="font-size: 35px; margin-left: 150px; color: white">·······系统</span>
      </el-header>
    </el-container>

    <el-container>
      <el-aside style="overflow: hidden; min-height: 100vh; background-color: #545c64; width: 250px">
        <el-menu :default-active="$route.path" router background-color="#545c64" text-color="#fff"
                 active-text-color="#ffd04b">
          <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i><span>菜单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/view">菜单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item @click="logout">退出登录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data () {
    return {

    }
  },
  methods:{
    logout(){
      localStorage.removeItem("user");
      this.$router.push("/login")
    }
  }
}
</script>
<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <router-view />
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: "Home",
  components: {
    Header
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
  background-color: rgba(218, 218, 218, 0.5);
}
.el-header,
.el-footer {
  background-color: #ffffff;
  text-align: center;
  line-height: 60px;
  border-radius: 0 0 16px 16px;
}

</style>

<template>
<div class="head">
    <main class="main">
        <el-row class="head-main">
            <el-col class="head-left">
                <div class="logo-area">
                    <el-image style="width: 200px; height: 60px" :src="url" :fit="fit"></el-image>
                </div>
            </el-col>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">分类</template>
                    <el-menu-item index="2-i" v-for="(item,i) in category" :key="i">{{item}}</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">标签</template>
                    <el-menu-item index="3-i" v-for="(item,i) in tags" :key="i">{{item}}</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">随笔</el-menu-item>
                <el-menu-item index="5">关于</el-menu-item>
            </el-menu>
            <el-col class="head-mid"></el-col>
            <el-col class="head-right">
                <el-dropdown>
                    <div class="avater-area">
                        <el-avatar :size="40" :src="circleUrl" class="avatar-image el-dropdown-link"></el-avatar>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>写博客</el-dropdown-item>
                        <el-dropdown-item>写随笔</el-dropdown-item>
                        <el-dropdown-item divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>

        </el-row>
    </main>
</div>

<!-- <router-link to="/home">home</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/manage">manage </router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/about">about</router-link> -->
</template>

<script>
export default {
    data() {
        return {
            url: require('../assets/logo.png'),
            category: ["后端", "前端", "运维", "大数据", "机器学习"],
            tags: ["C/C++", "Java", "Js", "Golang"],
            circleUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        };
    },
};
</script>

<style scoped>
.main {
    width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
}

.head-main {
    display: flex;
    flex-flow: row wrap;
}

.head-left {
    display: flex;
    justify-content: flex-start;
    flex: 0 0 auto;
    width: 200px;
    /* background-color: wheat; */
}

.head-mid {
    width: auto;
    flex: 1 1 auto;
}

.head-right {
    display: flex;
    justify-content: flex-end;
    flex: 0 0 auto;
    width: 300px;
    /* background-color: gray; */
}

.logo-area {
    height: 60px;
}

.avater-area {
    height: 60px;
    width: 40px;
}

.avatar-image {
    margin-top: 10px;
    cursor: pointer;
}
</style>

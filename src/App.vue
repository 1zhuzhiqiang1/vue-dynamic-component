<template>
  <div id="app">
   <el-container>
      <el-aside width="150px">
        <el-menu>
          <el-menu-item v-if="menus.length===0">无数据</el-menu-item>
          <template v-if="menus.length>0">
            <el-menu-item v-for="(menu, index) of menus" :key="index" :index="menu.index" @click="handleMenuClick(menu)">
              <span slot="title">{{menu.text}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <!--<el-header>-->
          <!--<el-row class="center">组件开发框架</el-row>-->
        <!--</el-header>-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
</el-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      menus: [],
      renderUrl: "",
      currentComponent: null
    }
  },
  mounted() {
    this.getComponentsJson();
  },
  methods: {
    handleMenuClick(menu) {
      //this.renderUrl = menu.url;
      this.$router.replace({path: menu.routerPath});
    },
    getComponentsJson() {
      axios.get('src/assets/mock-data/components.json')
        .then(res => {
          console.log(res);
          this.menus = res.data || [];
        })
        .catch(error => {
          console.log('获取菜单数据出错', error);
        });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <v-header></v-header>
    <!--路由外链，用于渲染匹配的组件-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    'v-header': Header
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color:	#E8E8E8;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      msg: '问卷调查'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    line-height: 40px;
    position: absolute;
    top: 0;
    left: 0; 
    background-color:#B5CAA0 ;
    width: 100%;
}
</style>

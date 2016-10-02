<template>
  <div class="create">
    <div>
      <button v-on:click="addChoice">添加选择</button>
      <!--<button v-on:click="addInput">添加文字</button>-->
    </div>
    <div>
      <form>
        <q-a-choice v-for="i in choices"></q-a-choice>
        <button type="button" v-on:click="onSubmit">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import QAChoice from './QAChoice'
import QAInput from './QAInput'

export default {
  data () {
    return {
      choices: [],
      inputs: []
    }
  },
  components: {
    QAChoice,
    QAInput
  },
  methods: {
    onSubmit () {
      console.log('wait')
    },
    addChoice () {
      this.choices.push(this.choices.length + 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

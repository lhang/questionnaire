<template>
  <div class="home">
    <table>
        <thead>
            <td></td>
            <td>标题</td>
            <td>选项</td>
        </thead>
        <tr v-for="item in questions.questionList">
            <td></td>
            <td>{{ item.title }}</td>
            <td></td>
        </tr>
        <tfoot>
            <td>
                <button type="">选择全部</button>
                <button type="">删除所选</button>
            </td>
            <td></td>
            <td><a v-link="{ path: '/create' }">新建</a></td>
        </tfoot>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    // console.log(this)
    return {
      questions: []
    }
  },
  ready () {
    $.ajax({
      method: 'GET',
      url: '/static/data.json',
      success: this.setQuestion
    })
  },
  methods: {
    setQuestion: function (data) {
      console.log('saved :')
      console.log(this)
      this.questions = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    min-width: 600px;
}
 table {
     border:2px solid blue;
     width: 100%;
 }
</style>

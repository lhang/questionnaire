<template>
  <div class="horizontal"><table><tbody><tr><td class="vertical">
    <div class="backg">
      <div class="register">
        <p>
          <span>注册</span><br/>
       </p>
       <p>
          <span>邮箱</span><br/>
          <input type="text" name="user"  placeholder="邮箱/手机号" class="user" v-model="account" required><br/>
          <span>密码</span><br/>
          <input type="password" name="key" class="key" v-model="passwd1" required><br/>
          <span>请再次输入设置的密码</span><br/>
          <input type="password" name="key" class="key" v-model="passwd2" required><br/>
        </p>
        <p>
          <!--使用v-link进行导航-->
          <button type="sublim" v-on:click="onregist">注册</button> 
       </p>
      </div>
    </div>
  </td></tr></tbody></table></div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      passwd1: '',
      passwd2: ''
    }
  },
  methods: {
    onregist () {
      console.log(this.account)
      var all_user
      if (!window.localStorage.user) window.localStorage.user = [] else all_user = JSON.parse(window.locaStorage.user)
      if (this.account && this.passwd2 && this.passwd1) {
        if (this.passwd2.match(this.passwd1) && !all_user[this.account]) {
          window.localStorage.user.push({'account': this.account, 'password': this.passwd1})
        } else {
          console.log('已有相同用户或密码不同')
        }
      } else {
        console.log('info not complete')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal {
  margin: 0 auto;
}
.vertical {
  vertical-align: middle;
}
.backg{
    background-image:url(http://img.hb.aicdn.com/326ff3d2922ef9cf84f3874a67500231d16a9a5030672-MAGRKt_fw658);
    background-repeat:no-repeat;
    background-size:500px,400px;
  }
.login{ 
    background-color:#B5CAA0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:400px;
    margin:0 auto;
    display:table-cell;/*IE8以上及Chrome、Firefox*/
    vertical-align:middle;/*IE8以上及Chrome、Firefox*/
    padding:5px 30px;
    box-shadow:0 0 30px #89916B;
    border-radius:20px;
   
}
.login span {
  color:#fff;
}
.login p:nth-of-type(1) {
  font-size:25px;
}
.login p:nth-of-type(2){
  font-size:20px;
  text-align:left;
}
.login p:nth-of-type(3){
  font-size:15px;
}
.login .user,.key{
  height:25px;
  width:250px;
}
.login button {
  cursor:pointer;
  color:#A8497A;
  background-color:#FEDFE1;
}
</style>

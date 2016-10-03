<template>
  <div class="horizontal"><table><tbody><tr><td class="vertical">
  <div class="backg">
    <div class="left">
      <img src="http://img.hb.aicdn.com/c6bc81ca6123face34045791cc1b50ba506648f825ecf-peMCK6_fw658" alt="制作属于你的问卷调查">
    </div>
    <div class="right">
      <div class="login">
        <p>
          <span>用户登录</span><br/>
        </p>
        <p>
          <span>用户名</span><br/>
          <input type="text" name="user"  placeholder="邮箱/手机号" class="user" value="{{ account }}" required><br/>
          <span>密码</span><br/>
          <input type="password" name="key" class="key" value="passwd" required><br/>
        </p>
        <p>
          <input type="checkbox" name="remember-me" class="choose"><span>记住我</span> 
          <!--使用v-link进行导航-->
          <button type="sublim" v-on:click="login">登录</button>
        </p>
        <p>
           <!--使用v-link进行导航-->
           <button type="sublim" v-link="{path:'register'}">快速注册</button>  
        </p>
      </div>
    </div>
  </div>
  </td></tr></tbody></table></div>
</template>

<script>
export default {
  data () {
    return {
      account: '11'
    }
  },
  methods: {
    login () {
      if (!window.localStorage.user) window.localStorage.user = {}
      var account = window.localStorage.user[this.account]
      console.log(this.account)
      if (account) {
        if (account.password.match(this.passwd)) {
          // router.redirect({'/login': '/home'})
          console.log(this)
        } else {
          console.log('no password')
        }
      } else {
        console.log('no user')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.horizontal {
  margin:0 auto;
}
.vertical{
  vertical-align: middle;
}
.backg {
    background-color:	#D0D0D0 ;
    display:flex;
    flex-direction:row;
    justify-content:center;
    max-width:800px;
    box-shadow:2px 2px 30px #89916B;
    border-radius:20px;
  }
.left img {
  margin-top:20px;
  margin-right:0;
  width:180px;
  height:250px;
  border-radius:20px;
}
.login { 
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
.login p:nth-of-type(2) {
  font-size:20px;
  text-align:left;
}
.login p:nth-of-type(3) {
  font-size:15px;
}
.login .user,.key {
  height:25px;
  width:250px;
}
.choose {
  height:15px;
  width:20px;
  cursor:pointer;
   
}
.login button {
  cursor:pointer;
  color:#A8497A;
  background-color:#FEDFE1;
}
.login p:nth-of-type(5) {
  background-color:#FEDFE1;
}
</style>

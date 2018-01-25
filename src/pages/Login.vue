<template>
  <div id="login">
    <div class="super">
      <header class="header">
      <img src="../assets/images/login.png" alt="logo" class="logo">
     <h4>小米账号登录</h4>
     </header>
     <main>
      <div class="input">
        <div class="quhao">+86</div>
         <input type="text" class="ione" placeholder="手机号码">
      </div>
       <div class="input">
           <input type="text" class="itwo" placeholder="短信验证码">
          <div class="mail">获取验证码</div>
       </div>
     </main>
     <div class="button">
      <button class="gai">立即登录/注册</button>
      <button class="pgone">用户名密码登录</button>
     </div>
      <div class="it">
      <fieldset class="win">
        <legend align="center" class="ff">
        其他方式登录
        </legend>
      </fieldset>
      <div class="pic">
       <div class="qq"><img src="../assets/images/qq.png" alt=""></div>
       <div class="sina"><img src="../assets/images/sina.png" alt=""></div>
       <div class="ali"><img src="../assets/images/ali.png" alt=""></div>
      </div>
     </div>
     </div>
    <div class="language">
      <span v-for="(name,index) in names" :key="index" class="text">{{name}}</span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name:'Login',
  data(){
    return{
      names:['简体','繁体','English','常见问题']
    }
  }
}
</script>
<style scoped>
#login{
  overflow: hidden;
  position: relative;
  margin-top: 2rem;
}

.header,main,.button,.it{
  width: 100%;
  margin-top: 1rem;
  box-sizing: border-box;
}
h4{
      font-size:1rem;
     color: #424242;
     font-weight: normal;
}
.logo{
  margin:1rem 0;
  width: 2.5rem;
  height: 2.5rem;
}
.header{
  display: flex;
  align-items: center;
  flex-direction:column;
}
.button{
 display: flex;
 flex-direction: column;
 align-items: center;
}
.gai,.pgone{
 height:2.5rem;
 width: 80%;
 margin-top:.5rem;
 border: none;
 font-size: 1rem;
 border-radius: 30px;
}
.gai{
  color: #fff;
  background-color: #33b4ff;
}
.pgone{
background-color: #fff;
}
.it{
  padding: .5rem 2rem;
}
.win{
  padding-top: 10px;
  border-top: 1px dashed #bdbdbd;
  border-left: none;
  border-right: none;
  border-bottom: none;
}
.ff{
  color: #b0b0b0;
  font-size: .9rem;
}
.pic{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2.5rem;
  padding: 0 2rem;
}
.qq,.sina,.ali{
  position: relative;
  text-align:center;
  height: 2rem;
  width:2rem;
}
.qq img,.ali img,.sina img{
  height: 2rem;
  width:2rem;
}
.language{
  position: relative;
  display: flex;
   height: 2rem;
  align-items: center;
  justify-content: center;
}
.text{
font-size: .8rem;
padding: 0 .5rem;
border-right: 1px solid #757575;
}
.text:last-child{
  border: none;
}
main{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: .7rem 1rem;
}
.input{
  width:90%;
  display:flex;
  flex-direction: row;
}
.quhao{
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  width: 3rem;
  border: 1px solid#e0e0e0;
  background-color: #fff;
  border-radius: 16px 0 0 0;
}
.ione,.itwo{
  padding-left: .5rem;
  font-size: 1rem;
  color: #333;
  width: 100%;
}
.ione{
   border: 1px solid#e0e0e0;
  border-radius: 0 16px 0 0;
}
.itwo{
  height: 2.5rem;
 border: 1px solid#e0e0e0;
  border-radius: 0 0 0 16px;
}
.mail{
  height: 2.5rem;
  text-align: center;
  width: 8rem;
  background-color: #fff;
  line-height: 2.5rem;
 border:1px solid#e0e0e0;
 cursor: pointer;
 color: #003ab5;
  border-radius:0 0 16px 0;
}
@media screen and (min-width:768px ) {
  #login{
    position: relative;
      margin: 7rem auto;
      width:32rem;
  }
  .language{
    position: relative;
    margin-top: 7rem;
  }
}
@media screen and (min-width:1024px ) {
  #login{
    position: relative;
    padding:4rem 0;
    margin: 7rem auto;
    width:100%;
  }
  .language{
    position: relative;
    margin-top:10rem;
  }
}
@media screen and (min-width:375px) and (max-width:766px){
  .language{
    position: relative;
    margin-top: 4rem;
  }
}
@media screen and (max-width:370px){
   .mail{
     font-size:.7rem;
   }
}
</style>


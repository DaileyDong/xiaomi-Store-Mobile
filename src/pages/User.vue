<template>
  <div>
<router-link to="login">
      <header>
      <div class="user">
         <img src="/static/images/u1.png" alt="logo">
         <span>登录/注册</span>
      </div>
    </header>
</router-link>
     <!--订单-->
     <div class="main">
       <div class="order">
          <div class="left">
          <span>
              我的订单
          </span>
        </div>
        <div class="right">
          <span style="font-size:.6rem;" class="min">全部订单</span>
          <img src="/static/images/right.png" alt="">
        </div>
       </div>

     
     <div class="option">
        <div class="dfk">
        <img  src="/static/images/u3.png">
         <span  style="color:rgba(0,0,0,.87);font-size:.6rem;">待付款</span>
        </div>
         <div class="dsk">
         <img  src="/static/images/u4.png">
         <span  style="color:rgba(0,0,0,.87);font-size:.6rem;">待收货</span>
         </div>
          <div class="thh">
                 <img  src="/static/images/u5.png">
        <span  style="color:rgba(0,0,0,.87);font-size:.6rem;">退换货</span>
          </div>
       </div>
     </div>
        <div style="height:.7rem;;width:100%;position:relative;margin-top:1rem;background-color:rgb(245, 245, 245)"></div> 
     <!--其他-->
     <div class="item">
       <div class="up">
         <div class="up-left">
           <img src="/static/images/u6.png" alt="">
         </div>
         <div class="up-right">
            <span>会员福利</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
       <div class="down">
             <div class="down-left">
           <img src="/static/images/u7.png" alt="">
         </div>
         <div class="down-right">
            <span>我的优惠</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
     </div>
       <div style="height:.7rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div> 
      <div class="item">
       <div class="up">
         <div class="up-left">
           <img src="/static/images/u8.png" alt="">
         </div>
         <div class="up-right">
            <span>服务中心</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
       <div class="down">
             <div class="down-left">
           <img src="/static/images/u9.png" alt="">
         </div>
         <div class="down-right">
            <span>小米之家</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
     </div>
      <div style="height:.7rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div> 
         <div class="it">
      <div class="down">
             <div class="down-left">
           <img src="/static/images/u10.png" alt="">
         </div>
         <div class="down-right">
            <span>F码通道</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
      </div>
    <div style="height:.7rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div> 
      <div class="it">
       <div class="down">
             <div class="down-left">
           <img src="/static/images/u11.png" alt="">
         </div>
         <div class="down-right">
            <span>设置</span>
            <img src="/static/images/right.png" alt="">
         </div>
       </div>
     </div>
       <div style="height:5rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div> 
    </div>
</template>
<script>
import $ from 'jquery';

export default {
  name: "User",
  mounted(){
    (function(toPath,scope){
       if(toPath=='/user'){
         scope.init();
       }
    })(this.$route.path,this)
  },
  methods:{
    init(){
      $(`footer a`).removeClass('textActive');
      $('footer a').eq(3).addClass('textActive');
      $('footer a img').eq(0).attr('src',require('../assets/icon/home.png'));
      $('footer a img').eq(1).attr('src',require('../assets/icon/icon-category.png'));
      $('footer a img').eq(2).attr('src',require('../assets/icon/cart.png'));
      $('footer a img').eq(3).attr('src',require('../assets/icon/ybb_userb.png'));
      $('body').css('backgroundColor','#eee')
    },
    login(){
      location.href='/login'
    }
  },
    watch:{
    $route(to,from){
      let light = to.path;
      if('/user'==light){
        this.init();
      }
    }
  },
};
</script>
<style scoped>
header {
  position: relative;
  height: 4.5rem;
  overflow: hidden;
  background-size: 100%;
  background-image: url("/static/images/u2.png");
  background-color: #f37d0f;
  border: 1px solid transparent;
}

.user {
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  height: 3rem;
  line-height: 3rem;
}
.user img {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
}
.user span {
  position: absolute;
  height: 50%;
  margin-left: 0.5rem;
  color: #fff;
  font-size: 0.7rem;
}
.main {
  position: relative;
  height: 6.5rem;
}
.order {
  position: relative;
  height:3rem ;
  line-height: 3rem;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.15);
}
.left,
.right {
  display: inline-block;
}
.left{
  position:absolute;
  height:3rem;
  color: rgba(0,0,0,.87);
  line-height: 3rem;
  left: 1rem;
}
.right {
  height: 1rem;
  margin-top:.4rem;
  position: absolute;
  right: 1rem;
}
.right img {
  position: relative;
  top: -0.1rem;
  width: 1rem;
  height: 1rem;
}
.min {
  position: relative;
  top: -0.35rem;
}
.option{
  font-size: .34rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:4.5rem;
  background: #fff;
  box-sizing: border-box;

}
.dfk,.dsk,.thh{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dfk img,.dsk img,.thh img{
  width:1.5rem;
  height:1.5rem;
}

.item{
   position:relative;
   height:5.5rem;
   background: #fff;
 }
.it{
   position: relative;
   background: #fff;
   height: 2.5rem;
 }
.up,.down{
 height:2.75rem;
 }
 .up-left,.down-left{
   position:absolute;
 }
 .up-left img,.down-left img{
   margin-left: 1rem;
   margin-top: .625rem;
   height:1.5rem;
   width: 1.5rem;
 }
 .up-right,.down-right{
   position: relative;
    right:-3rem;
    width:85%;
    height:2.75rem;
 }
 .up-right{
  border-bottom: 1px solid rgba(0,0,0,.15);
 }
 .up-right span,.down-right span{
   position: relative;
   height: 2.75rem;
   line-height: 2.75rem;
 }
.up-right img,.down-right img{
  position: absolute;
  right:1rem;
  margin-top: .875rem;
  height: 1rem;
  width: 1rem;
}
@media screen and (min-width:375px){
  .dibu{
    position: relative;
    height: 100%;
  }
}
</style>

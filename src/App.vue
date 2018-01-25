<template>
  <div>
    <transition :name="transitionName" >
        <keep-alive>
           <router-view class="Router"></router-view>
        </keep-alive>
    </transition >
  
     <transition :name="barName">
       <div v-if="bb" class="Routes">
         <keep-alive>
          <footer>
            <a href="/#/home" @click="tabClick(0)">
              <div class="homeBar">
                  <img src="./assets/icon/home.png" alt="" class="sone">
              <span class="bone">首页</span>
              </div>
            </a>
              <a href="/#/category"  @click="tabClick(1)">
              <div class="categoryBar">
                <img src="./assets/icon/icon-category.png" alt="" class="stwo">
              <span class="btwo">分类</span>
            </div>
              </a>
             <a href="/#/cart"  @click="tabClick(2)">
            <div class="cartBar">
               <img src="./assets/icon/cart.png" alt="" class="sthree">
              <span class="bthree">购物车</span>
            </div>
             </a>
              <a href="/#/user" @click="tabClick(3)">
            <div class="userBar">
              <img src="./assets/icon/ybb_user.png" alt="" class="sthree">
              <span class="bthree">我的</span>
            </div>
               </a>
          </footer>
         </keep-alive>
     </div>
     </transition>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "app",
  methods: {
    tabClick(b) {
      $(`footer a`).removeClass('textActive');
      $('footer a').eq(b).addClass('textActive');
      $('footer a img').eq(0).attr('src',require('./assets/icon/home.png'));
      $('footer a img').eq(1).attr('src',require('./assets/icon/icon-category.png'));
      $('footer a img').eq(2).attr('src',require('./assets/icon/cart.png'));
      $('footer a img').eq(3).attr('src',require('./assets/icon/ybb_user.png'));
      if(b==0){
       $('footer a img').eq(b).attr('src',require('./assets/icon/homeb.png'));
      }else if(b==1){
       $('footer a img').eq(b).attr('src',require('./assets/icon/icon-categoryb.png'));
      }else if(b==2){
          $('footer a img').eq(b).attr('src',require('./assets/icon/cartb.png'));
      }else if(b==3){
          $('footer a img').eq(b).attr('src',require('./assets/icon/ybb_userb.png'));
      }
    },
  },
  //下方按键显示与隐藏
  mounted(){
      (function(routePath,scope){
        var max = ["/home", "/category", "/cart", "/user"];
        var toPath = max.indexOf(routePath);
        if( toPath == -1 ){
         scope.barName="slide-up";
         scope.bb=false;  
       }else{
         scope.barName='slide-down';
         scope.bb=true;
       }
       var b=toPath;
      scope.tabClick(b);
      
      if(toPath=='/login' || toPath=="/user"){
        $('body').css('backgroundColor','#eee').css('height',"100%");
      }else{
        $('body').css('backgroundColor','#fff');
      }
      })(this.$route.path,this);

  },
  data() {
    return {
      transitionName: "slide-right",
      bb:true,
      barName:'slide-down'
    };
  },
  //左右滑动
  watch: {
    $route(to, from) {
      var max = ["/home", "/category", "/cart", "/user"];
      //索引值
      var toPath = max.indexOf(to.path);
      var fromPath = max.indexOf(from.path);

      if (toPath > fromPath) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      
         if( toPath == -1 ){
         this.barName="slide-up";
         this.bb=false;  
       }else{
         this.barName='slide-down';
         this.bb=true;
       }
          var b=toPath;
         this.tabClick(b);
      if(to.path=='/login' ||to.path=="/user"){
        $('body').css('backgroundColor','#eee').css('height',"100%");
      }else{
        $('body').css('backgroundColor','#fff');
      }
    }
  },

};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
body {
  font-size: 0.8rem;
  min-width: 360px;
  background-color: #fff;
}
footer{
  position: fixed;
  bottom:0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.5rem;
  background-color: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
footer a{
   color: #999;
}
.homeBar,.userBar,.categoryBar,.cartBar{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:2.5rem;
  width: 3rem;
}

.sone,.stwo,.sthree,.sfour{
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
}
.bone,.btwo,.bthree,.bfour{
  font-size: .7rem;
}
.textActive{
   color: #f56c02;
}
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}

.slide-up-enter-to,
.slide-down-leave {
  transform: translate(0,0);
}
.slide-up-enter-active,
.slide-down-leave-active {
 transition: all  ease;
}
.slide-up-enter,
.slide-down-leave-to{
  transform: translate(0,100%);
}


</style>

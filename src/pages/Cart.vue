<template>
  <div>
   <t-header>购物车</t-header>
    <router-link to="user">
         <div class="order">
          <div class="left">
          <span>
              登录后享受更多优惠
          </span>
        </div>
        <div class="right">
          <span style="font-size:.6rem;" class="min">去登录</span>
          <img src="/static/images/right.png" alt="">
        </div>
       </div>
    </router-link>
       <div class="space">
         <div><img class="simg" src="/static/images/spaceCart.png" alt=""></div>
         <div><span class="stitle">购物车还是空的</span></div>
         <div><span class="sbutton">去逛逛</span></div>
       </div>
       <!--猜-->
       <div>
        <img  class="guess" src="/static/images/guess.jpg" alt="">
       </div>
       <!--其他推荐-->
       <div class="it">
    <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/m2.png" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/m3.png" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">红米Note 5A 16GB</div><div class="price">￥649&nbsp;<span class="price old"><s>￥699</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">红米5</div><div class="price">￥799<span>起</span></div></div></flexbox-item>
    </flexbox>
       <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/x7.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/x8.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">15.6"笔记本i7 16GB</div><div class="price">￥6999</div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">70迈智能后视镜</div><div class="price">￥1299</div></div></flexbox-item>
    </flexbox>
          <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/x5.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/x6.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">智米全直流变频空调</div><div class="price">￥4399<span></span></div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">小米移动电源2</div><div class="price">￥49</div></div></flexbox-item>
    </flexbox>
     <div class="bottom">
        
     </div>
       </div>
  </div>
</template>
<script>
import $ from 'jquery';
import {Flexbox,FlexboxItem} from 'vux'
import THeader from '../components/THeader'
export default {
  name:'Cart',
   mounted(){
    (function(toPath,scope){
       if(toPath=='/cart'){
         scope.init();
       }
    })(this.$route.path,this)
  },
  watch:{
    $route(to,from){
      let light = to.path;
      if('/cart'==light){
        this.init();
      }
    }
  },
  methods:{
    init(){
      $(`footer a`).removeClass('textActive');
      $('footer a').eq(2).addClass('textActive');
      $('footer a img').eq(0).attr('src',require('../assets/icon/home.png'));
      $('footer a img').eq(1).attr('src',require('../assets/icon/icon-category.png'));
      $('footer a img').eq(2).attr('src',require('../assets/icon/cartb.png'));
      $('footer a img').eq(3).attr('src',require('../assets/icon/ybb_user.png'));
    }
  },
  components:{
    THeader,
    Flexbox,
    FlexboxItem
  }
}
</script>
<style scoped>
.order {
  position: relative;
  margin-top: 2.5rem;
  height:3rem ;
  background: #fff;
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
  margin-top:1rem;
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
  color: rgba(0,0,0,.54);
}
.space{
  position: relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  height:3.5rem;
  background-color: #ebebeb;
}
.simg{
  display: inline-block;
  height: 2.5rem;
  width: 2.5rem;
}
.stitle{
  color: rgba(0,0,0,.27);
}
.sbutton{
  padding: .3rem;
  border: 1px solid rgba(0,0,0,.27);
}
.guess{
  height: 3.5rem;
  width: 100%;
}
.info{
  padding:0 .12rem 0 .3rem;
  margin-bottom: .5rem;
  color: #3c3c3c;
}
.price{
  font-size: .8rem;
  font-weight:600;
  color: #f56c02;
}

.old{
  font-weight: normal;
    color: rgba(0,0,0,.54);
}
.name{
  font-size: .8rem;
}
.bottom{
  height: 4rem;
  width: 100%;
  background-color: #fff;
}
.it{
  background-color: #fff;
}
</style>

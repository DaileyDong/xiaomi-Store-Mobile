<template>
 <div style="backgroundColor:#fff">
     <!--轮播-->
  <div id="swiper">
      <swiper style="width:100%" height="200px"  dots-position="center" auto loop>
      <swiper-item  v-for="(item, index) in demo04_list" :key="index" style="width:100%;height:100%">
        <img :src="item" style="width:100%;height:100%">
      </swiper-item>
    </swiper>
  </div>

   <div class="fill" >
    <router-link class="filla" to="" v-for="(fill,index) in fills" :key="index">
     <img class="imga" :src="fill" alt="fill">
    </router-link>
   </div>
   <div class="string"></div>
   <div class="cell">
    <flexbox>
      <flexbox-item><div style="height:14rem"> <router-link to=""><img src="/static/images/5-1.webp" class="one" alt=""></router-link></div></flexbox-item>
      <flexbox-item><div style="height:14rem">     
      <flexbox orient="vertical">
      <flexbox-item ><div style="display:flex;order:1" ><img style="height:6.7rem;width:100%" src="/static/images/5-2.png" alt=""></div></flexbox-item>
      <flexbox-item ><div style="display:flex;order:1"><img style="height:6.8rem;width:100%" src="/static/images/5-3.jpg" alt=""></div></flexbox-item>
    </flexbox></div>
    </flexbox-item>
    </flexbox>
      <div style="height:.35rem"></div>
      <flexbox orient="vertical">
      <flexbox-item ><div style="display:flex;order:1" ><img style="height:8rem;width:100%" src="/static/images/5-4.jpg" alt=""></div></flexbox-item>
      <flexbox-item ><div style="display:flex;order:1"><img style="height:8rem;width:100%" src="/static/images/5-5.png" alt=""></div></flexbox-item>
    </flexbox>
  </div>
  <div class="string"></div>
  <!--明星产品-->
  <div class="star">
      <flexbox>
      <flexbox-item ><div ><img style="height:12rem;width:100%" src="/static/images/m1.png" alt=""></div></flexbox-item>
    </flexbox>
      <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/m2.png" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/m3.png" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">红米Note 5A 16GB</div><div class="brief">5.5"高清大屏</div><div class="price">￥649&nbsp;<span class="price old"><s>￥699</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">红米5</div><div class="brief">千元全面屏，前置柔光自拍</div><div class="price">￥799<span>起</span></div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/m4.png" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/m5.png" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">小米MIX 2  全面屏2.0</div><div class="brief">5.99"大屏，4轴光学防抖</div><div class="price">￥2999<span>起&nbsp;</span><span class="price old"><s>￥3299</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">小米5X</div><div class="brief"> 变焦双摄，拍人更美</div><div class="price">￥1199</div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/m6.png" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/m7.png" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info"><div class="name">米家感应夜灯</div><div class="brief">举步之间，光明立现</div><div class="price">￥49</div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">小米电视4A 49英寸</div><div class="brief">全高清，HDR，64位处理器</div><div class="price">￥2199&nbsp;<span class="price old"><s>￥2399</s></span></div></div></flexbox-item>
    </flexbox>
  </div>
 <!--新品-->
  <div class="new">
    <flexbox>
      <flexbox-item ><div ><img style="height:8rem;width:100%" src="/static/images/x1.webp" alt=""></div></flexbox-item>
     </flexbox>
         <flexbox>
      <flexbox-item ><div ><img style="height:12rem;width:100%" src="/static/images/x2.webp" alt=""></div></flexbox-item>
    </flexbox>
      <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/x3.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/x4.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">小米AI音箱</div><div class="brief">听音乐、语音遥控家电的人工...</div><div class="price">￥299</div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">Amazfit Cor手环</div><div class="brief">彩色IPS触摸屏，支付宝离线支付</div><div class="price">￥299<span>起</span></div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/x5.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/x6.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">智米全直流变频空调</div><div class="brief">一级能效，强劲能暖</div><div class="price">￥4399<span></span></div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">小米移动电源2</div><div class="brief">更出色的手感</div><div class="price">￥49</div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/x7.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/x8.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info" ><div class="name">15.6"笔记本i7 16GB</div><div class="brief">NVIDIA MX150/第八代i7处理器</div><div class="price">￥6999</div></div></flexbox-item>
      <flexbox-item><div class="info" ><div class="name">70迈智能后视镜</div><div class="brief">智能语音交互，ADAS高级驾辅</div><div class="price">￥1299</div></div></flexbox-item>
    </flexbox>
     <div class="moreNew">
        <router-link to="">
          <i>
            更多新品>
          </i>
        </router-link>
     </div>
  <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
  </div>

  <!--智能-->
   <div class="capacituy">
     <flexbox>
      <flexbox-item ><div ><img style="height:8rem;width:100%" src="/static/images/z1.webp" alt=""></div></flexbox-item>
     </flexbox>
     <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
      <flexbox>
      <flexbox-item ><div ><img style="height:12rem;width:100%" src="/static/images/z2.webp" alt=""></div></flexbox-item>
    </flexbox>
   
     <flexbox style="margin-bottom:-.3rem">
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/z3.jpg" alt=""></div></flexbox-item>
      <flexbox-item style="margin-top:-3rem"><div class="info"><div class="name">米家空调伴侣 </div><div class="briefwarp">清凉快人一步，让传统空调秒变智能</div><div class="price mt32" style="margin-top:1rem">￥149&nbsp;<span class="price old"><s>￥169</s></span></div></div></flexbox-item>
    </flexbox>
          
    <flexbox>
       <flexbox-item style="margin-top:-3rem;"><div class="info" ><div class="name">电助力折叠自行车</div><div class="briefwarp">力矩传感电助力，让城市出行轻松有趣</div><div class="price mt32" style="margin-top:1rem">￥2999</div></div></flexbox-item>
      <flexbox-item style="margin-left:-.4rem"><div ><img style="height:10rem;width:100%" src="/static/images/z4.webp" alt=""></div></flexbox-item>
    </flexbox>

      <flexbox style="margin-top:-.3rem">
      <flexbox-item style="margin-left:-.4rem"><div ><img style="height:10rem;width:100%" src="/static/images/z5.jpg" alt=""></div></flexbox-item>
        <flexbox-item style="margin-top:-1.7rem;"><div class="info"><div class="name">米家小白智能摄像机</div><div class="briefwarp">360度1080P全方位拍摄，语音控制米家智能设备</div><div class="price mt32" style="margin-top:1rem">￥379<!----><span class="price old"><s>￥399</s></span></div></div></flexbox-item>
   </flexbox>
     <div class="moreNew" style="margin-top:-.29rem">
        <router-link to="">
          <i>
            更多米家智能产品>
          </i>
        </router-link>
     </div>
  <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
   </div>
   <!--小米电视-->
  <div class="tv">
      <flexbox>
      <flexbox-item ><div ><img style="height:8rem;width:100%" src="/static/images/tv1.webp" alt=""></div></flexbox-item>
     </flexbox>
     <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
      <flexbox>
      <flexbox-item ><div ><img style="height:12rem;width:100%" src="/static/images/tv2.webp" alt=""></div></flexbox-item>
    </flexbox>
   
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/tv3.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/tv4.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info"><div class="name">小米电视4C 43英寸</div><div class="brief">超窄边，高清智能电视</div><div class="price">￥1799&nbsp;<span class="price old"><s>￥2099</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info"><div class="name">小米电视4A 49英寸</div><div class="brief">全高清，HDR，64位处理器</div><div class="price">￥2199&nbsp;<span class="price old"><s>￥2399</s></span></div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/tv5.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/tv6.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info"><div class="name">小米电视4C 55英寸</div><div class="brief">4K HDR 人工智能系统</div><div class="price">￥2899&nbsp;<span class="price old"><s>￥3099</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info"><div class="name">小米电视4A 55英寸</div><div class="brief">4K HDR，64位处理器</div><div class="price">￥2799&nbsp;<span class="price old"><s>￥2999</s></span></div></div></flexbox-item>
    </flexbox>
     <!--图片-->
      <flexbox>
      <flexbox-item ><div ><img style="height:10rem;width:100%" src="/static/images/tv7.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:10rem;width:100%" src="/static/images/tv8.webp" alt=""></div></flexbox-item>
    </flexbox>
     <!--文字-->
       <flexbox>
      <flexbox-item ><div class="info"><div class="name">小米盒子3 增强版 </div><div class="brief">高端 4K 网络机顶盒</div><div class="price">￥399&nbsp;<span class="price old"><s>￥449</s></span></div></div></flexbox-item>
      <flexbox-item><div class="info"><div class="name">小米盒子3s</div><div class="brief">4K HDR 人工智能机顶盒</div><div class="price">￥299&nbsp;<span class="price old"><s>￥349</s></span></div></div></flexbox-item>
    </flexbox>
     <div class="moreNew" style="margin-top:.5rem">
        <router-link to="">
          <i>
            更多小米电视产品>
          </i>
        </router-link>
     </div>
  <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>     
   </div>
   <!--更多推荐-->
   <div class="more">
      <flexbox>
      <flexbox-item ><div ><img style="height:14rem;width:100%" src="/static/images/t1.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:14rem;width:100%" src="/static/images/t2.webp" alt=""></div></flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item ><div ><img style="height:14rem;width:100%" src="/static/images/t3.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:14rem;width:100%" src="/static/images/t4.webp" alt=""></div></flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item ><div ><img style="height:14rem;width:100%" src="/static/images/t5.webp" alt=""></div></flexbox-item>
      <flexbox-item><div ><img style="height:14rem;width:100%" src="/static/images/t6.webp" alt=""></div></flexbox-item>
    </flexbox>
      <div style="height:.3rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
      <flexbox>
      <flexbox-item ><div ><img style="height:8.5rem;width:100%" src="/static/images/t7.webp" alt=""></div></flexbox-item>
    </flexbox>
     <div style="height:1.3rem;margin-bottom:1.5rem;position:relative;width:100%;background-color:rgb(245, 245, 245)"></div>      
   </div>
  
</div>
 
</template>
<script>
import { Swiper, Flexbox, SwiperItem,FlexboxItem, Divider } from "vux";
export default {
  name: "MMain",
  data() {
    return {
      demo04_list:[
        '/static/images/swiper1.jpg',
        "/static/images/swiper2.png",
        "/static/images/swiper3.png",
        "/static/images/swiper4.png"
      ],
      fills: [
        "/static/images/fill1.png",
        "/static/images/fill2.png",
        "/static/images/fill3.png",
        "/static/images/fill4.png"
      ],
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Divider
  }
};
</script>
<style scoped>

#swiper {
  position: relative;
  top: 82px;
}
.fill {
  position: relative;
  top: 82px;
  height: 3.6rem;
  width: 99.5%;
}
.filla .imga {
  height: 4.2rem;
  width: 25%;
}
.string{
  position: relative;
  top:90px;
  background-color: #f5f5f5;
  height: .3rem;
  width: 100%;
}

.cell {
  position: relative;
  top: 90px;
  overflow-x: hidden;
}
.one {
  height: 100%;
  width: 100%;
}
.two,
.three {
  height: 70%;
  width: 100%;
}
.star,.new,.capacituy,.tv,.more{
  position: relative;
  top: 97px;
}

.name{
  font-size: .8rem;
}
.brief,.briefwarp{
  font-size: .6rem;
  color: rgba(0,0,0,.54);
}
.price{
  font-size: .8rem;
  color: #ea625b;
}
.old{
    color: rgba(0,0,0,.54);
}
.moreNew{
  padding:.5rem 0;
  text-align: center;
  border-top: 0.02rem solid rgb(206, 206, 206);
  border-bottom: 0.16rem solid rgb(245, 245, 245);
}
i{
   color: rgba(0,0,0,.6);
   font-style: normal;
}
.info{
  padding:0 .12rem 0 .3rem;
  margin-bottom: .5rem;
}

</style>
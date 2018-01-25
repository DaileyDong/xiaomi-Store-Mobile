<template>
  <div>
   <header>
     <div class="top">
      <div class="logo">
         <img class="img-logo" src="../assets/images/logo.png" alt="logo">
      </div>
      <div class="search">
        <router-link to="search">
        <img src="../../static/images/search.png" class="ixon" alt="">
        <span  class="fonts" >搜索商品名称</span>
        </router-link>
      </div>
      <div class="user">
      <router-link to="/user">  <img class="img-user" src="../assets/icon/ybb_user.png" alt="user" ></router-link>
      </div>
     </div>
      <div class="bottom">
         <scroller lock-y :scrollbar-x=false>
         <div>
        <div class="title" v-for="(nav,index) in navs" :key="index"><span>{{nav}}</span></div>
      </div>
    </scroller>
      </div>
   </header>
  </div>
</template>
<script>
import {Search,Scroller} from 'vux'
export default {
  name:'MHeader',
  components:{
    Search,
    Scroller
  },

  data(){
    return{
      navs:['推荐','手机','智能','电视','电脑','全面屏','生活周边','盒子','艺术']
    }
  }
}
</script>
<style scoped>
header{
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 99;
  background: #EFEFF4;
  box-shadow: 0 2px 4px -1px rgba(0,0, 0,.2);
}
.top{
  display: flex;
 -webkit-box-align: center;
 align-items:center;
 justify-content:space-around;
 color: #666;
 background: #EFEFF4;
 height: 50px;
 box-sizing: inherit;
}
.logo{
  width: 1.6rem;
  margin: 0 .2rem;
  margin-left: .5rem;
}
.img-logo{
  display: block;
  width: 80%;
  border-style: none;
}
.weui-search-bar{
  border-bottom: none!important;

}
.search{
  flex:0.9;
  position: relative;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  height:1.7rem;
  line-height: 1.7rem;
  font-size: .85rem;
}
.search a{
  width: 100%;
  height:1.7rem;
  display: inline-block;
}
.ixon{
 display: inline-block;
 width:1.7rem;
 line-height: 1.7rem;
 height:1.7rem;
}
.fonts{
position: relative;
top:-.5rem;
height:1.7rem;
line-height: 1.7rem;
color:rgba(0,0,0,.3);
display:inline-block;
}
.user{
width: 1.6rem;
margin: 0 .2rem;
}
.img-user{
display: block;
width: 80%;
border-style: none;
}
.bottom{
  background: #EFEFF4!important;
  font-size: .75rem;
  white-space:nowrap;
  z-index: 2;
}

.title{
  display: inline-block;
  padding: 0 .5rem;
  color: rgb(116, 116, 116);
  line-height: 32px;
  border-bottom: 2px solid rgba(237,91,0,0)
}
</style>

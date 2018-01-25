<template>
  <div>
    <t-header>
        <input type="text" class="main" placeholder="搜索商品名称">
    </t-header>
    <div class="container">
       <div class="title">热门搜索</div>
       <div class="tt"><img src="/static/images/searchp.jpg" alt=""></div>
       <div class="ww">
         <span v-for="(w,i) in words" :key="i">{{w}}</span>
       </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import THeader from '../components/THeader'
export default {
  name:'Search',
  data(){
    return{
      words:['红米5 新品','电视32英寸','净水器厨下','小米MIX 2','小米笔记本Pro']
    }
  },
  components:{
      THeader
  }
}
</script>
<style scoped>
.main{
  height:1.4rem;
  font-size: .8rem;
  width: 100%;
  border: 1px solid #e5e5e5;
  padding-left:.5rem;
}
.container{
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
}
.title{
  line-height:2rem;
  font-size: .7rem;
  color: #3c3c3c;
  padding-left: .8rem;
}
.tt{
  height:6rem;
  overflow: hidden;
}
.tt img{
  height: 6rem;
  width: 100%;
  display: inline-block;
}
.ww{
 padding:0 .8rem;
}
.ww span{
  margin-right: .5rem;
  margin-top: .8rem;
  font-size: .7rem;
  padding: .25rem;
  display: inline-block;
  border: 1px solid #e4e4e4;
  color: #484848;
  background: hsla(12,99%,71%,.05);
}
</style>

<template>

  <header>
   <div class="one"><img class="left" src="/static/images/left.png"  alt="back" @click="goBack"></div>
   <div class="two"><slot></slot></div>
   <div class="three"><router-link to="search"><img class="right" src="/static/images/search.png" alt="search" ></router-link></div>
  </header>

</template>
<script>
export default {
  name:'THeader',
   methods:{
     goBack(){
       window.history.back();
     },
   },
   data(){
     return{
       kk:false,
       donghua:'slide-up'
     }
   }
}
</script>
<style scoped>
 header{
   position: fixed;
   margin-top: -1px;
   box-sizing: border-box;
   z-index:2;
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 2.5rem;
   width: 100%;
   background: #f2f2f2;
 }
 .one{
   width:15%;
    display:flex;
    justify-content: center;
 }
 .two{
 width: 70%;
 display: flex;
font-size:.9rem;
color: #666;
 justify-content: center;
 }
 .three{
  width:15%;
  display:flex;
  justify-content: center;
 }
 .left{
   display: inline-block;
   height: 1.5rem;
 }

 .right{
  height: 1.5rem;
  width: 1.5rem;
 }

</style>

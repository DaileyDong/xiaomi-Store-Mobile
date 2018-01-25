<template>
  <div id="me">
    <m-header></m-header>
    <m-main></m-main>
  </div>
</template>
<script>
import $ from 'jquery'
import MHeader from '../components/MHeader'
import MMain from '../components/MMain'
export default {
  name:'Home',
  mounted(){
    (function(toPath,scope){
       if(toPath=='/home'){
         scope.init();
       }
    })(this.$route.path,this)
  },
  watch:{
    $route(to,from){
      let light = to.path;
      if('/home'==light){
        this.init();
      }
    }
  },
  methods:{
    init(){
      $(`footer a`).removeClass('textActive');
      $('footer a').eq(0).addClass('textActive');
      $('footer a img').eq(0).attr('src',require('../assets/icon/homeb.png'));
      $('footer a img').eq(1).attr('src',require('../assets/icon/icon-category.png'));
      $('footer a img').eq(2).attr('src',require('../assets/icon/cart.png'));
      $('footer a img').eq(3).attr('src',require('../assets/icon/ybb_user.png'));

    }
  },
  components:{
    'm-header':MHeader,
    'm-main':MMain
  }
}
</script>
<style scoped>

</style>

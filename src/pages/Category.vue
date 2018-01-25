<template>
  <div >
    <t-header>分类</t-header>
    <nav>
      <ul>
        <li v-for="(t,index) in titles" :key="index">
          <a :href="'#'+index" class="tt">{{t}}</a>
        </li>
      </ul>
    </nav>
    <div class="clearfix">
      <div class="container">
        <div id="0">
            <div>
          <img class="cs" src="/static/images/cs1.jpg" alt="">
        </div>
        <load-more :show-loading="false" tip="手机" background-color="#fbf9fe"></load-more>
         <div>
          <flexbox>
            <flexbox-item :span="1/3">
              <img class="left" src="/static/images/cs2.png" alt="">
              <span class="fleft">红米5</span>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <img class="middle" src="/static/images/cs3.png" alt="">
              <span class="fmiddle">红米5 Plus</span>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <img class="right" src="/static/images/cs4.png" alt="">
              <span class="fright">小米MIX 2</span>
            </flexbox-item>
          </flexbox>
         </div>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs5.png" alt="">
            <span class="fleft">小米Note 3</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs6.png" alt="">
            <span class="fmiddle">小米6</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/cs7.png" alt="">
            <span class="fright">小米5X</span>
          </flexbox-item>
        </flexbox>
        <load-more :show-loading="false" tip="电视" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs8.png" alt="">
            <span class="fleft">32英寸</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs9.png" alt="">
            <span class="fmiddle">43英寸</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/cs10.png" alt="">
            <span class="fright">55英寸</span>
          </flexbox-item>
        </flexbox>
        <load-more :show-loading="false" tip="电脑" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs11.png" alt="">
            <span class="fleft">笔记本Pro 15.6"</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs12.png" alt="">
            <span class="fmiddle">笔记本13.3" i7</span>
          </flexbox-item>
        </flexbox>
        </div>
        <div style="height:1rem;"></div>
        <div id="1"> 
          <img class="cs" src="/static/images/cs13.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="小米手机" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs4.png" alt="">
            <span class="fleft">小米MIX 2</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs5.png" alt="">
            <span class="fmiddle">小米Note 3</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/cs6.png" alt="">
            <span class="fright">小米6</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs7.png" alt="">
            <span class="fleft">小米5X</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/mi1.png" alt="">
            <span class="fmiddle">小米Max 2</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/mi2.png" alt="">
            <span class="fright">小米MIX</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="红米手机" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs2.png" alt="">
            <span class="fleft">红米5</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs3.png" alt="">
            <span class="fmiddle">红米5 Plus</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/hm1.png" alt="">
            <span class="fright">红米5A</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/hm2.png" alt="">
            <span class="fleft">红米Note 5A</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/hm3.png" alt="">
            <span class="fmiddle">红米Note 4X</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/hm4.png" alt="">
            <span class="fright">红米4X</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/hm5.png" alt="">
            <span class="fleft">红米4A</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="移动4G+专区" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs6.png" alt="">
            <span class="fleft">小米6</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/hm3.png" alt="">
            <span class="fmiddle">红米Note 4X</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/hm4.png" alt="">
            <span class="fright">红米4X</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs7.png" alt="">
            <span class="fleft">小米5X</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>

        <div>
          <img class="css" src="/static/images/p0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="手机配件" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/p1.png" alt="">
            <span class="fleft">以旧换新</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/p2.png" alt="">
            <span class="fmiddle">定位电话</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/p3.png" alt="">
            <span class="fright">贴膜</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/p4.png" alt="">
            <span class="fleft">保护壳</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/p5.png" alt="">
            <span class="fmiddle">充电器</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/p6.jpg" alt="">
            <span class="fright">数据线</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/p7.jpg" alt="">
            <span class="fleft">存储卡</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/p8.jpg" alt="">
            <span class="fmiddle">自拍杆</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/p9.png" alt="">
            <span class="fright">手机支架</span>
          </flexbox-item>
        </flexbox>

        <div style="height:1rem;"></div>

        <div id="2">
          <img class="cs" src="/static/images/t0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="电视" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/t1.png" alt="">
            <span class="fleft">32英寸</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/t2.jpg" alt="">
            <span class="fmiddle">43英寸</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/t3.png" alt="">
            <span class="fright">49-50英寸</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/t4.png" alt="">
            <span class="fleft">55英寸</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/t5.png" alt="">
            <span class="fmiddle">65英寸</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="css" src="/static/images/h0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="盒子" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/h1.jpg" alt="">
            <span class="fleft">盒子3s</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/h1.jpg" alt="">
            <span class="fmiddle">盒子3c</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/h2.jpg" alt="">
            <span class="fright">盒子3增强版</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="音箱" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/y1.png" alt="">
            <span class="fleft">家庭音箱</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/y2.png" alt="">
            <span class="fmiddle">蓝牙音箱</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="电视配件与会员" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/tvp1.png" alt="">
            <span class="fleft">会员卡</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/tvp2.jpg" alt="">
            <span class="fmiddle">遥控器</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/tvp3.jpg" alt="">
            <span class="fright">线材转接器</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/tvp4.png" alt="">
            <span class="fleft">安装服务</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/tvp5.png" alt="">
            <span class="fmiddle">麦克风</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="3">
          <img class="cs" src="/static/images/pc0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="电脑" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/cs12.png" alt="">
            <span class="fleft">笔记本12.5"</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/cs12.png" alt="">
            <span class="fmiddle">笔记本13.3"</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/cs11.png" alt="">
            <span class="fright">笔记本15.6"</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="css" src="/static/images/bp0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="电脑配件" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/bp1.jpg" alt="">
            <span class="fleft">鼠标/鼠标垫</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/bp2.png" alt="">
            <span class="fmiddle">机械键盘</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/bp3.png" alt="">
            <span class="fright">平板保护类</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/bp5.png" alt="">
            <span class="fleft">转接线/电源</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/bp4.png" alt="">
            <span class="fmiddle">随身WiFi</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="4">
          <img class="cs" src="/static/images/jd0.jpg" alt="">
        </div>
        <load-more :show-loading="false" tip="家电" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jd1.png" alt="">
            <span class="fleft">电饭煲</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/jd2.png" alt="">
            <span class="fmiddle">净水器</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/jd3.png" alt="">
            <span class="fright">净化器</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jd4.png" alt="">
            <span class="fleft">扫地机器人</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/jd5.jpg" alt="">
            <span class="fmiddle">米家投影仪</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/jd6.png" alt="">
            <span class="fright">电水壶</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jd7.png" alt="">
            <span class="fleft">灯具</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/jd8.jpg" alt="">
            <span class="fmiddle">空调</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/jd9.jpg" alt="">
            <span class="fright">电磁炉</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="5">
          <img class="cs" src="/static/images/ly0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="路由" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/ly1.jpg" alt="">
            <span class="fleft">路由器3A</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/ly2.jpg" alt="">
            <span class="fmiddle">路由器3G</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/ly3.jpg" alt="">
            <span class="fright">路由器3</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/ly4.png" alt="">
            <span class="fleft">路由器3c</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/ly5.png" alt="">
            <span class="fmiddle">路由器HD</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/ly5.png" alt="">
            <span class="fright">路由器Pro</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/ly6.jpg" alt="">
            <span class="fleft">WiFi放大器</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/ly7.png" alt="">
            <span class="fmiddle">电力猫</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/ly8.png" alt="">
            <span class="fright">线材</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="6">
          <img class="cs" src="/static/images/z0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="智能" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/z1.jpg" alt="">
            <span class="fleft">剃须刀</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/z2.png" alt="">
            <span class="fmiddle">智能家庭</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/z3.png" alt="">
            <span class="fright">VR眼镜</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/z4.jpg" alt="">
            <span class="fleft">摄像机</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/zs5.jpg" alt="">
            <span class="fmiddle">智能插座</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="css" src="/static/images/j0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="健康" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/j1.png" alt="">
            <span class="fleft">手环</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/j2.png" alt="">
            <span class="fmiddle">血压计</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/j3.png" alt="">
            <span class="fright">秤</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/j4.png" alt="">
            <span class="fleft">体温计</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="户外" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/hw1.png" alt="">
            <span class="fleft">出行</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/hw2.png" alt="">
            <span class="fmiddle">无人机</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/hw3.png" alt="">
            <span class="fright">对讲机</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/hw4.png" alt="">
            <span class="fleft">车载用品</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/hw5.png" alt="">
            <span class="fmiddle">摄影摄像</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/hw6.png" alt="">
            <span class="fright">智能硬件套装</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="cs" src="/static/images/e0.jpg" alt="">
        </div>
        <load-more :show-loading="false" tip="儿童" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/e1.jpg" alt="">
            <span class="fleft">米兔智能积木</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/e2.jpg" alt="">
            <span class="fmiddle">故事机mini</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/e3.jpg" alt="">
            <span class="fright">70粒益智积木</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/e4.jpg" alt="">
            <span class="fleft">儿童手表2</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/e5.jpg" alt="">
            <span class="fmiddle">积木机器人</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/e6.jpg" alt="">
            <span class="fright">米兔儿童书包</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="7">
          <img class="cs" src="/static/images/d1.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="电源" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/d2.png" alt="">
            <span class="fleft">插线板</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/d3.jpg" alt="">
            <span class="fmiddle">移动电源</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/d4.jpg" alt="">
            <span class="fright">智能插座</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/d5.png" alt="">
            <span class="fleft">电池</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/d6.png" alt="">
            <span class="fmiddle">电源配件</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/d7.png" alt="">
            <span class="fright">充电器</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/d8.png" alt="">
            <span class="fleft">品牌移动电源</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="8">
          <img class="cs" src="/static/images/r0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="耳机" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/r1.png" alt="">
            <span class="fleft">线控耳机</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/r2.jpg" alt="">
            <span class="fmiddle">蓝牙耳机</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/r3.jpg" alt="">
            <span class="fright">头戴式耳机</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/r4.png" alt="">
            <span class="fleft">品牌耳机</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="9">
          <img class="cs" src="/static/images/a0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="音箱" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/a1.png" alt="">
            <span class="fleft">AI音箱</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/a2.png" alt="">
            <span class="fmiddle">蓝牙音箱</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/a3.jpg" alt="">
            <span class="fright">电视音响</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/a4.jpg" alt="">
            <span class="fleft">音乐闹钟</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/a5.png" alt="">
            <span class="fmiddle">网络音响</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/a6.png" alt="">
            <span class="fright">配件</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div id="10">
          <img class="cs" src="/static/images/lp0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="礼品" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/lp1.png" alt="">
            <span class="fleft">送长辈</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/lp.png" alt="">
            <span class="fmiddle">送孩子</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/lp2.png" alt="">
            <span class="fright">送男生</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/lp3.png" alt="">
            <span class="fleft">送女生</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/lp4.png" alt="">
            <span class="fmiddle">优惠套装</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/lp5.png" alt="">
            <span class="fright">新品</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="cs" src="/static/images/s0.jpg" alt="">
        </div>
        <load-more :show-loading="false" tip="生活" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/s1.png" alt="">
            <span class="fleft">运动鞋</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/s2.jpg" alt="">
            <span class="fmiddle">服饰</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/s3.png" alt="">
            <span class="fright">旅行箱</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/s4.png" alt="">
            <span class="fleft">背包/收纳</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/s45.png" alt="">
            <span class="fmiddle">眼镜</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/s6.jpg" alt="">
            <span class="fright">口罩</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/s7.jpg" alt="">
            <span class="fleft">雨伞</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/s8.png" alt="">
            <span class="fmiddle">保温杯</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="css" src="/static/images/jj0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="居家" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jj1.png" alt="">
            <span class="fleft">牙刷</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/jj2.png" alt="">
            <span class="fmiddle">床垫</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/jj3.jpg" alt="">
            <span class="fright">毛巾</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jj4.png" alt="">
            <span class="fleft">枕头</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/jj5.jpg" alt="">
            <span class="fmiddle">工具</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/jj6.png" alt="">
            <span class="fright">沙发</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/jj7.png" alt="">
            <span class="fleft">被子</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <load-more :show-loading="false" tip="文具" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/w1.jpg" alt="">
            <span class="fleft">笔</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/w2.jpg" alt="">
            <span class="fmiddle">米兔</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/w3.png" alt="">
            <span class="fright">印刷品</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="cs" src="/static/images/k0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="电话卡" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/k1.png" alt="">
            <span class="fleft">日租卡</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/k2.png" alt="">
            <span class="fmiddle">月租卡</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/k3.jpg" alt="">
            <span class="fright">吃到饱</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/k4.jpg" alt="">
            <span class="fleft">任我行</span>
          </flexbox-item>
        </flexbox>
        <div style="height:1rem;"></div>
        <div>
          <img class="cs" src="/static/images/0.webp" alt="">
        </div>
        <load-more :show-loading="false" tip="零售店" background-color="#fbf9fe"></load-more>
        <flexbox>
          <flexbox-item :span="1/3">
            <img class="left" src="/static/images/l1.png" alt="">
            <span class="fleft">小米之家</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="middle" src="/static/images/l2.png" alt="">
            <span class="fmiddle">服务网点</span>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <img class="right" src="/static/images/l3.png" alt="">
            <span class="fright">零售网点</span>
          </flexbox-item>
        </flexbox>
        <div style="height:7rem"></div>
      </div>
    </div>

  </div>
</template>
<script>
  import $ from "jquery";
  import THeader from "../components/THeader";
  import {
    LoadMore,
    Flexbox,
    FlexboxItem
  } from "vux";
  export default {
    name: "Category",

    data() {
      return {
        titles: [
          "新品",
          "手机",
          "电视",
          "电脑",
          "家电",
          "路由",
          "智能",
          "电源",
          "耳机",
          "音箱",
          "礼品",
          "生活",
          "米粉卡",
          "零售店"
        ]
      };
    },
    mounted() {
      (function (toPath, scope) {
        if (toPath == "/category") {
          scope.init();
        }
      })(this.$route.path, this);
 
    },

    watch: {
      $route(to, from) {
        let light = to.path;
        if ("/category" == light) {
          this.init();
        }
      }
    },
    methods: {
      init() {
        $(`footer a`).removeClass("textActive");
        $("footer a")
          .eq(1)
          .addClass("textActive");
        $("footer a img")
          .eq(0)
          .attr("src", require("../assets/icon/home.png"));
        $("footer a img")
          .eq(1)
          .attr("src", require("../assets/icon/icon-categoryb.png"));
        $("footer a img")
          .eq(2)
          .attr("src", require("../assets/icon/cart.png"));
        $("footer a img")
          .eq(3)
          .attr("src", require("../assets/icon/ybb_user.png"));
      },
  
    },
    components: {
      THeader,
      LoadMore,
      Flexbox,
      FlexboxItem
    }
  };

</script>
<style scoped>
  nav {
    position: fixed;
    box-sizing: border-box;
    float: left;
    width: 20%;
    top: 2.5rem;
    text-align: center;
    line-height: 2.8rem;
    background-color: #fefefe;
    border-right: 1px solid #efefef;
  }

  .container {
    float: right;
    box-sizing: border-box;
    margin-top: 2.5rem;
    width: 80%;
    height: 9.5rem;
    padding: 0 1rem;
    background-color: #fff;
  }

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    height: 0;
  }

  .clearfix {
    zoom: 1;
  }

  .cs {
    position: relative;
    display: inline-block;
    height: 5.5rem;
    width: 100%;
  }

  .css {
    position: relative;
    display: inline-block;
    height: 2.2rem;
    width: 100%;
  }

  .vux-flexbox .vux-flexbox-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  li a {
    color: #3c3c3c;
  }

  .weui-grids::before,
  .weui-grid::before,
  .weui-grid::after {
    border: none !important;
  }

  .left,
  .middle,
  .right {
    height: 3rem;
  }

  .fleft,
  .fmiddle,
  .fright {
    display: block;
    font-size: .6rem;
    margin-top:.6rem;
    color: rgba(0, 0, 0, 0.54);
  }

</style>

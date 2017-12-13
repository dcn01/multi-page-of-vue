<template xmlns="http://www.w3.org/1999/html">
  <div class="page-svg">
    <div class="svg-main scroll">
      <Paper title="svg-path" class="blog">
        <p class="title">SVG《Path》 命令详解</p>
        <p class="desc">
          w3school有的就不复制了，本文主要针对w3school上不详细的部分进行补充，有疑问的话，&nbsp;<a href="Mailto:15921589007@qq.com">给我发邮件</a>&nbsp;。</br>
          本文所有的实例展示都是使用svg实现，不太明白的同学可以直接查看源代码，当然你也可以在Github上下载我的网站建站的源代码
          <a href="https://github.com/guxuelong/multi-page-of-vue">multi-page-of-vue</a>&nbsp;&nbsp;对你有用的话，给我打个call，star、watch或fork什么的，O(∩_∩)O哈哈~
        </p>
        <p class="sub-title">M</p>
        <p class="text">M x y 移动到指定坐标，xy分别为x轴和y轴的坐标点，类似画笔的起点。</br>path中的起点，必须存在（文档中虽然没有提到过，但是path的其他命令都需要依赖一个初始位置，而实际操作过程中也没有需要到可以不使用M的情况，后面发现有例外我再过来补充。）</p>
        <p class="sub-title">L</p>
        <p class="text">
          L x y 在初始位置（M 画的起点）和xy确定的坐标画一条线。</br>
          两点一线，直线，绘图中很常见的方式。</br>
          直接上例子: d="M 80,20 L 150,20"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50">
            <path fill="none" stroke="black" stroke-width="1" d="M 80,20 L 150,20"/>
            <text x="40" y="20" fill="blue">80,20</text>
            <text x="160" y="20" fill="blue">150,20</text>
          </svg>
        </p>
        <p class="sub-title">H</p>
        <p class="text">
          H x 沿着x轴移动一段位置</br>
          直接上例子: d="M 80,20 H 150"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50">
            <path fill="none" stroke="black" stroke-width="1" d="M 80,20 H 150 "/>
            <text x="40" y="20" fill="blue">80,20</text>
            <text x="160" y="20" fill="blue">150,20</text>
          </svg>
        </p>
        <p class="sub-title">V</p>
        <p class="text">
          V y 沿着y轴移动一段位置</br>
          直接上例子: d="M 50,20 V 100"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="120">
            <path fill="none" stroke="black" stroke-width="1" d="M 50,20 V 100 "/>
            <text x="50" y="20" fill="blue">50,20</text>
            <text x="50" y="100" fill="blue">50,100</text>
          </svg>
        </p>
        <p class="sub-title">C</p>
        <p class="text">
          C x1 y1 x2 y2 x y</br>
          三次贝塞尔曲线
          当前点为起点，xy为终点，起点和x1y1控制曲线起始的斜率，终点和x2y2控制结束的斜率。</br>
          直接上例子: d="M 50,20 C 80,80 120,90 150,20"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="120">
            <path fill="none" stroke="red" stroke-width="1" d="M 50,20 L 80,80 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 120,90 L 150,20 "/>
            <path fill="none" stroke="black" stroke-width="1" d="M 50,20 C 80,80 120,90 150,20"/>
            <text x="50" y="20" fill="blue">起点</text>
            <text x="80" y="80" fill="blue">x1,y1</text>
            <text x="120" y="90" fill="blue">x2,y2</text>
            <text x="150" y="20" fill="blue">终点</text>
          </svg>
        </p>
        <p class="sub-title">S</p>
        <p class="text">
          S x2 y2 x y</br>
          简化的贝塞尔曲线</br>
          1.如果S命令跟在一个C命令或者另一个S命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。</br>
          直接上例子: d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="150">
            <path fill="none" stroke="red" stroke-width="1" d="M 10,80 L 40,10 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 65,10 L 95,80 "/>
            <path fill="none" stroke="blue" stroke-width="1" d="M 95,80 L 125,150 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 150,150 L 180,80 "/>
            <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
            <text x="5" y="90" fill="blue">10,80</text>
            <text x="10" y="10" fill="blue">40,10</text>
            <text x="68" y="10" fill="blue">65,10</text>
            <text x="95" y="80" fill="blue">95,80</text>
            <text x="75" y="150" fill="blue">125,150</text>
            <text x="155" y="150" fill="blue">150,150</text>
            <text x="180" y="80" fill="blue">180,80</text>
          </svg>
          [125,150]就是假设出来的第一个控制点</br></br>
          2.如果S命令单独使用，前面没有C命令或者另一个S命令，那么它的两个控制点就会被假设为同一个点。</br>
          直接上例子: d="M10 20 S 150 150, 180 20"
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="150">
            <path fill="none" stroke="red" stroke-width="1" d="M 10,20 L 120,120 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 120,120 L 180,20 "/>
            <path d="M10 20 S 120 120, 180 20" stroke="black" fill="transparent"/>
            <text x="10" y="20" fill="blue">10,20</text>
            <text x="120" y="120" fill="blue">150,150</text>
            <text x="180" y="20" fill="blue">180,20</text>
          </svg>
        </p>
        <p class="sub-title">Q</p>
        <p class="text">
          Q x1 y1 x y</br>
          二次贝塞尔曲线Q</br>
          只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。</br>
          直接上例子: d="M 10,80 Q 150,150 180,80"</br>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="150">
            <path fill="none" stroke="red" stroke-width="1" d="M 10,20 L 120,120 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 120,120 L 180,20 "/>
            <path d="M 10,20 Q 120,120 180,20" stroke="black" fill="transparent"/>
            <text x="10" y="20" fill="blue">10,20</text>
            <text x="120" y="120" fill="blue">120,120</text>
            <text x="180" y="20" fill="blue">180,20</text>
          </svg>
        </p>
        <p class="sub-title">T</p>
        <p class="text">
          T x y</br>
          Q命令的简写命令。</br>
          与S命令相似，T也会通过前一个控制点，推断出一个新的控制点。</br>
          1.T命令前面必须是一个Q命令，或者是另一个T命令，</br>
          直接上例子: d="M 10,80 Q 52.5,10 95,80 T 180,80" </br>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="160">
            <path fill="none" stroke="red" stroke-width="1" d="M 10,80 L 52.5,10 "/>
            <path fill="none" stroke="red" stroke-width="1" d="M 52.5,10 L 95,80 "/>
            <path fill="none" stroke="blue" stroke-width="1" d="M 95,80  L 137.5,150 "/>
            <path fill="none" stroke="blue" stroke-width="1" d="M 137.5,150 L 180,80 "/>
            <path d="M 10,80 Q 52.5,10 95,80 T 180,80" stroke="black" fill="transparent"/>
            <text x="10" y="80" fill="blue">10,80</text>
            <text x="52.5" y="10" fill="blue">52.5,10</text>
            <text x="95" y="80" fill="blue">95,80</text>
            <text x="137.5" y="150" fill="blue">137.5,150</text>
            <text x="180" y="80" fill="blue">180,80</text>
          </svg>
          2.如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线</br>
          直接上例子: d="M 50,80 T 180,80" </br>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="160">
            <path d="M 50,80 T 180,80" stroke="black" fill="transparent"/>
            <text x="20" y="80" fill="blue">50,80</text>
            <text x="180" y="80" fill="blue">180,80</text>
          </svg>
        </p>
        <p class="sub-title">A</p>
        <p class="text">
          A rx,ry x-axis-rotation large-arc-flag sweep-flag x,y</br>
          rx 弧的半长轴长度</br>
          ry 弧的半短轴长度</br>
          x-axis-rotation 是此段弧所在的x轴与水平方向的夹角，即x轴的逆时针旋转角度，负数代表顺时针旋转角度。</br>
          large-arc-flag 为1表示大角度弧线，0表示小角度弧线</br>
          sweep-flag 为1表示从起点到终点弧线绕中心顺时针方向，0表示逆时针方向。</br>
          xy 是终点坐标。</br>
          先看下x-axis-rotation 的效果:</br>
          d="M 10,315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10"</br>
          圆弧其实就是椭圆的一部分，下图中黄色填充部分为效果图，灰色填充部分为虚拟出来的椭圆的剩余部分，先不要关注。
          黄色填充的两个圆弧，他们的x-axis-rotation分别为0 和 45度,第一个圆弧所在椭圆的x轴其实就是水平方向，而第二个正好是图中的黑直线，顺时针旋转45度刚好是水平线。
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="320">
            <path d="M 60,265 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10" stroke="black" fill="yellow"/>
            <path d="M 110 215 A 30 50 0 0 0 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 0 215.1 109.9 L 315 10" stroke="black" fill="#eee"/>
          </svg>
          接下来再看灰色部分：
          A 30 50 0 0 0 162.55 162.45 A 30 50 -45 0 0 215.1 109.9 L 315 10"
          属于同一个椭圆的进行对比：A 30 50 0 0 1 162.55 162.45 和 A 30 50 0 0 0 162.55 162.45
          与黄色部分相比唯一变动的是sweep-flag，一目了然。顺时针和逆时针方向弧线的选择</br>
          
          我再来看看large-arc-flag
          1:A 45 45, 0, 1, 0, 125 55 2:A 45 45, 0, 0, 0, 125 55
          参数唯一区别在于large-arc-flag,也是一目了然
          <svg width="100%" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 10
                     A 45 45, 0, 1, 0, 125 55
                     " fill="green"/>
          </svg>
          <svg width="100%" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">>
            <path d="M80 10
                     A 45 45, 0, 0, 0, 125 55
                     " fill="red"/>
          </svg>

        </p>
        <p class="sub-title">Z</p>
        <p class="text">从当前位置到起点画一条直线闭合。</p>
        <p class="sub-title"></br>以上的例子均使用了大写的命令，其实使用小写的命令更加方便，大写的是绝对位置，而小写的则是相对位置，由于绘制的过程是一个坐标一个坐标往下传递的，因此使用相对位置可以减少计算量，推荐使用小写命令。</p>
      </Paper>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import Paper from 'src/components/Paper/Index.vue';
  import util from 'src/common/js/util.js';

  export default {
    name: 'Index',
    data() {
      return {
        init: false,
        percent: 0,
        active: 2,
        isLoading: true,
        barClose: false,
      };
    },
    created() {
      util.init();
    },
    components: { Paper },
    methods: {
      loaded(isLoading) {
        this.isLoading = isLoading;
      },
      showBar(barClose) {
        this.barClose = barClose;
      },
      gotoUrl(url) {
        location.href = url;
      },
    },
  };
</script>
<style>
  /* stylelint-disable */
  .page-svg {
    padding-bottom: 10px;
    max-width: 950Px;
    margin: auto;
    .svg-main {
      margin: 15px;
      background: gra;
    }
    
    .circle {
      display: inline-block;
      border-radius: 50px;
      vertical-align: middle;
      margin: 0 5px;
      stroke-dasharray: 33 290;
      stroke-dashoffset: 0;
      transition: all 750ms ease;
    }
    .close {
      .circle {
        stroke-dasharray: 191;
        stroke-dashoffset: -55;
      }
    }
    .animation { 
      transform:rotate(-90deg); 
    } 
  }
  @keyframes rt {
    to{
        stroke-dashoffset: 62.8px;
    } 
  }
  /* stylelint-enable */
</style>

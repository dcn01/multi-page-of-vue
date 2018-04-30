<template>
  <div>
    <transition name="fade">
      <div class="context" v-if="originWindowWidth > 900">
        <img src="./images/planet.png" alt="" id="planetImg">
        <canvas id="canvas">您的浏览器不支持canvas</canvas>
        <div class="title-banner">
          <img class="title" src="./images/dream.png" alt="">
          <img class="button" src="./images/start.png" alt="" @click="gotoUrl('/list/index.html')">
          <img class="logo" src="./images/logo.png" alt="">
        </div>
      </div>
      <div class="context" v-else>
        <img src="./images/planet-m.png" alt="" id="planetImg">
        <canvas id="canvas">您的浏览器不支持canvas</canvas>
        <div class="title-banner">
          <img class="title" src="./images/dream-m.png" alt="">
          <img class="button" src="./images/start-m.png" alt="" @click="gotoUrl('/list/index.html')">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import 'src/common/css/blog.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';

  export default {
    name: 'Index',
    data() {
      return {
        stars: [],
        originWindowWidth: document.body.offsetWidth,
        originWindowHeight: document.body.offsetHeight,
        windowWidth: document.body.offsetWidth,
        windowHeight: document.body.offsetHeight,
        startCount: 500,
      };
    },
    watch: {
      page() {
        scrollTo(0, 0);
      },
    },
    created() {
      setTimeout(() => {
        this.init = false;
      }, 100);
      util.init();
    },
    components: { slider },
    mounted() {
      this.starsSky(this.startCount);
    },
    methods: {
      gotoUrl(url) {
        location.href = url;
      },
      starsSky(num) {
        this.num = num;
        if (this.originWindowWidth <= 900) {
          this.windowWidth = this.originWindowWidth * 2;
          this.windowHeight = this.originWindowHeight * 2;
        }
        const canvas = document.getElementById('canvas');
        canvas.width = this.windowWidth;
        canvas.height = this.windowHeight;
        this.ctx = canvas.getContext('2d');
        // 生成星星
        this.addStar();
        // 渲染至画布上
        this.render();
        // 增加流星
        this.meteor();
      },
      addStar() {
        for (let i = 0; i < this.num; i += 1) {
          const aStar = {
            // x轴坐标
            x: Math.round(Math.random() * this.windowWidth),
            // y轴坐标
            y: Math.round(Math.random() * this.windowHeight),
            // 圆半径
            r: Math.random() * 3,
            ra: Math.random() * 0.05,
            // 透明度
            alpha: Math.random(),
            // 横向移动偏移量
            vx: (Math.random() * 0.2) - 0.1,
            // 纵向移动偏移量
            vy: (Math.random() * 0.2) - 0.1,
          };
          this.stars.push(aStar);
        }
      },
      render() {
        requestAnimationFrame(() => {
          // 画布背景色(渐变色)
          const clg = this.ctx.createLinearGradient(0, 0, 0, this.windowHeight);
          clg.addColorStop(0, 'rgba(41,31,42,0.7)');
          clg.addColorStop(0.5, 'rgba(65,50,81,0.7)');
          clg.addColorStop(1, 'rgba(100,59,57,0.7)');
          this.ctx.fillStyle = clg;
          // 画布位置
          this.ctx.fillRect(0, 0, this.windowWidth, this.windowHeight);
          for (let i = 0; i < this.num; i += 1) {
            const star = this.stars[i];
            // 画流星
            if (i === this.rnd) {
              star.vx = -5;
              star.vy = 20;
              this.ctx.beginPath();
              this.ctx.strokeStyle = `rgba(255,255,255,${star.alpha})`;
              this.ctx.lineWidth = star.r;
              this.ctx.moveTo(star.x, star.y);
              this.ctx.lineTo(star.x + star.vx, star.y + star.vy);
              this.ctx.stroke();
              this.ctx.closePath();
            }
            star.alpha += star.ra;
            // 透明度判断，从0到1
            if (star.alpha <= 0) {
              star.alpha = 0;
              star.ra = -star.ra;
              star.vx = (Math.random() * 0.2) - 0.1;
              star.vy = (Math.random() * 0.2) - 0.1;
            } else if (star.alpha > 1) {
              star.alpha = 1;
              star.ra = -star.ra;
            }
            star.x += star.vx;
            // x轴坐标判断
            if (star.x >= this.windowWidth) {
              star.x = 0;
            } else if (star.x < 0) {
              star.x = this.windowWidth;
              star.vx = (Math.random() * 0.2) - 0.1;
              star.vy = (Math.random() * 0.2) - 0.1;
            }
            star.y += star.vy;
            // y轴坐标判断
            if (star.y >= this.windowHeight) {
              star.y = 0;
              star.vy = (Math.random() * 0.2) - 0.1;
              star.vx = (Math.random() * 0.2) - 0.1;
            } else if (star.y < 0) {
              star.y = this.windowHeight;
            }
            // 开始绘制
            this.ctx.beginPath();
            const bg = this.ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
            bg.addColorStop(0, `rgba(255,255,255,${star.alpha})`);
            bg.addColorStop(1, 'rgba(255,255,255,0)');
            this.ctx.fillStyle = bg;
            // 画圆
            this.ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
            // 实际绘制
            this.ctx.fill();
            this.ctx.closePath();
          }
          this.render();
        });
      },
      meteor() {
        setTimeout(() => {
          this.rnd = Math.ceil(Math.random() * this.stars.length);
          this.meteor();
        }, Math.round((Math.random() * 1000) + 33));
      },
    },
  };
</script>
<style>
  html, body {
    height: 100%;
    width: 100%;
    background-color: rgba(100,59,57, 1)!important;
    overflow: hidden;
    transform:translateZ(0);
  }

  #planetImg {
    position: absolute;
    size: 450px 450px;
    left: 300px;
    top: 100px;
  }
  @media screen and (max-width: 900px) {
    #planetImg {
      size: 231px 413px;
      right: 0;
      left: auto;
      top: 115px;
    }
  }
  .context {
    position: relative;
    size: 100% 100%;
    text-align: center;
    .title-banner {
      size: 600px 150px;
      background: #2a2231;
      position: absolute;
      top: 260px;
      transform: translateX(-40%);
      display: inline-block;
      border-radius: 10px;
      box-shadow: 5px 3px 15px #281f30;
      .title {
        position: absolute;
        width: 35%;
        left: 10%;
        top: 28%;
      }
      .button {
        position: absolute;
        width: 18%;
        left: 50%;
        top: 15%;
        cursor: pointer;
        animation: zoom 1.5s linear infinite;
      }
      .logo {
        position: absolute;
        width: 30%;
        right: 0%;
        top: 0%;
      }
    }
  }
  #canvas {
    height: 100%;
    width: 100%;
    background: linear-gradient(#291f2a, #643b4d);
  }
  @keyframes zoom
  {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.2) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
</style>

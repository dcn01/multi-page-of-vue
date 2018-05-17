<template>
  <div>
    <transition name="fade">
      <div class="context">
        <div class="star-red">
          <div class="title" @click="gotoUrl('/javaScript/index.html')">JavaScript</div>
        </div>
        <div class="star-yellow">
          <div class="title" @click="gotoUrl('/list/index.html')">Css</div>
        </div>
        <div class="star-blue">
          <div class="title" @click="gotoUrl('/list/index.html')">Java</div>
        </div>
        <div class="star-orange">
          <div class="title" @click="gotoUrl('/list/index.html')">Nodejs</div>
        </div>
        <canvas id="canvas">您的浏览器不支持canvas</canvas>
      </div>
    </transition>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import 'src/common/css/blog.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';
  import red from './images/star-red.png';
  import orange from './images/star-orange.png';
  import blue from './images/star-blue.png';
  import yellow from './images/star-yellow.png';
  import redM from './images/star-red-m.png';
  import orangeM from './images/star-orange-m.png';
  import blueM from './images/star-blue-m.png';
  import yellowM from './images/star-yellow-m.png';

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
      if (this.originWindowWidth > 900) {
        this.red = red;
        this.orange = orange;
        this.blue = blue;
        this.yellow = yellow;
      } else {
        this.red = redM;
        this.orange = orangeM;
        this.blue = blueM;
        this.yellow = yellowM;
      }
      this.loadImage([
        {
          key: 'red',
          parent: 'star-red',
        },
        {
          key: 'orange',
          parent: 'star-orange',
        },
        {
          key: 'blue',
          parent: 'star-blue',
        },
        {
          key: 'yellow',
          parent: 'star-yellow',
        },
      ]);
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
      loadImage(array) {
        const asyncTasks = [];
        array.forEach(item => {
          const asyncTask = keyTmp => new Promise(resolve => {
            const img = new Image();
            img.src = this[`${keyTmp}`];
            img.className = keyTmp;
            img.parent = item.parent;
            img.onload = () => {
              resolve(img);
            };
          });
          asyncTasks.push(asyncTask(item.key));
        });
        Promise.all(asyncTasks).then(imgs => {
          imgs.forEach(img => {
            document.querySelector(`.${img.parent}`).appendChild(img);
          });
          this.showBanner = true;
        });
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
      gotoUrl(url) {
        console.log(123);
        location.href = url;
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
  .star-red, .star-blue, .star-yellow, .star-orange {
    position: absolute;
    size: 160px 160px;
    border: 1px dashed #f8f8f8;
    border-radius: 999px;
    cursor: pointer;
    img {
      position: absolute;
      size: 280px 280px;
      left: -60px;
      top: -60px;
      z-index: 1;
    }
    .title {
      color: rgb(100,59,57);
      position: absolute;
      top: 60px;
      left: 34px;
      size: 95px 25px;
      line-height: 25px;
      z-index: 2;
      background: rgba(255,255,255, 0.7);
      border-radius: 5px;
    }
  }
  .star-red {
    position: absolute;
    left: 500px;
    top: 200px;
    border: 1px dashed #f8f8f8;
    border-radius: 999px;
  }
  .star-blue {
    position: absolute;
    left: 700px;
    top: 400px;
    border: 1px dashed #f8f8f8;
    border-radius: 999px;
  }
  .star-yellow {
    position: absolute;
    left: 300px;
    top: 400px;
    border: 1px dashed #f8f8f8;
    border-radius: 999px;
  }
  .star-orange {
    size: 110px 110px;
    position: absolute;
    left: 850px;
    top: 100px;
    border: 1px dashed #f8f8f8;
    border-radius: 999px;
    img {
      size: 170px 170px;
      left: -30px;
      top: -30px;
    }
    .title {
      top: 40px;
      left: 30px;
      size: 55px 20px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 900px) {
    .star-red, .star-blue, .star-yellow, .star-orange {
      font-size: 10px;
      position: absolute;
      size: 80px 80px;
      border: 1px dashed #f8f8f8;
      border-radius: 999px;
      cursor: pointer;
      img {
        position: absolute;
        size: 140px 140px;
        left: -30px;
        top: -30px;
        z-index: 1;
      }
      .title {
        color: rgb(100,59,57);
        position: absolute;
        top: 30px;
        left: 17px;
        size: 47.5px 12.5px;
        line-height: 12.5px;
        z-index: 2;
        background: rgba(255,255,255, 0.7);
        border-radius: 5px;
      }
    }
    .star-red {
      position: absolute;
      left: 150px;
      top: 150px;
      border: 1px dashed #f8f8f8;
      border-radius: 999px;
    }
    .star-blue {
      position: absolute;
      left: 250px;
      top: 250px;
      border: 1px dashed #f8f8f8;
      border-radius: 999px;
    }
    .star-yellow {
      position: absolute;
      left: 50px;
      top: 250px;
      border: 1px dashed #f8f8f8;
      border-radius: 999px;
    }
    .star-orange {
      size: 55px 55px;
      position: absolute;
      left: 300px;
      top: 100px;
      border: 1px dashed #f8f8f8;
      border-radius: 999px;
      img {
        size: 85px 85px;
        left: -15px;
        top: -15px;
      }
      .title {
        top: 20px;
        left: 15px;
        size: 27.5px 10px;
        line-height: 10px;
      }
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

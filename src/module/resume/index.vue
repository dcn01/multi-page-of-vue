<template>
  <transition name="fade">
    <div class="page-index">
      <img id="tuxingImg" src="./images/tuxing.png" alt="">
      <img id="huoxingImg" src="./images/huoxing.png" alt="">
      <img id="shuixingImg" src="./images/shuixing.png" alt="">
      <img id="muxingImg" src="./images/muxing.png" alt="">
      <img id="tianwangxingImg" src="./images/tianwangxing.png" alt="">
      <img id="haiwangxingImg" src="./images/haiwangxing.png" alt="">
      <img id="mingwangxingImg" src="./images/mingwangxing.png" alt="">
      <img id="jinxingImg" src="./images/jinxing.png" alt="">
      <img id="diqiuImg" src="./images/diqiu.png" alt="">
      <canvas id="starts" width="500" height="500" style="border:1px solid #d3d3d3;background:#ffffff;">该浏览器不支持canvas</canvas>
    </div>
  </transition>
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
        history: [],
        init: true,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        page: util.getURLParam('page') || 'index',
        type: 'all',
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
      // canvas的id名，星星颜色(hsla的hue色调)，星星数量，星星半径比，星星移动范围(值越大范围越小)，
      // 星星移动速度(值越大速度越慢),星星拖尾效果(0~1值越小拖尾越明显)
      this.canvas('starts', 230, 1000, 60, 2, 500000, 0.5);
    },
    methods: {
      canvas(id, starscolor, starsamount, starsradius, movrange, speed, trailing) {
        /* eslint-disable */
        var canvas = document.getElementById(id),  
          ctx = canvas.getContext('2d'),  
          w = canvas.width = window.innerWidth,  
          h = canvas.height = window.innerHeight,  
          
          hue = starscolor,//230  
          stars = [],  
          count = 0,  
          maxStars = starsamount;//星星数量  
          
        var canvas2 = document.createElement('canvas'),  
          ctx2 = canvas2.getContext('2d');  
        canvas2.width = 100;  
        canvas2.height = 100;  
        var half = canvas2.width / 2,  
          gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);  
        gradient2.addColorStop(0.025, '#CCC');  
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');  
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');  
        gradient2.addColorStop(1, 'transparent');  
          
        ctx2.fillStyle = gradient2;  
        ctx2.beginPath();  
        ctx2.arc(half, half, half, 0, Math.PI * 2);  
        ctx2.fill();

          
        // End cache  
          
        function random(min, max) {  
          if (arguments.length < 2) {  
            max = min;  
            min = 0;  
          }  
          
          if (min > max) {  
            var hold = max;  
            max = min;  
            min = hold;  
          }  
          
          return Math.floor(Math.random() * (max - min + 1)) + min;  
        }  
          
        function maxOrbit(x, y) {  
          var max = Math.max(x, y),  
            diameter = Math.round(Math.sqrt(max * max + max * max));  
          return diameter / movrange;  
          //星星移动范围，值越大范围越小，  
        }  
          
        var Star = function() {  
          
          this.orbitRadius = random(maxOrbit(w, h));  
          this.radius = random(starsradius, this.orbitRadius) / 8;   
          //星星半径大小  
          this.orbitX = w / 2;  
          this.orbitY = h / 2;  
          this.timePassed = random(0, maxStars);  
          this.speed = random(this.orbitRadius) / speed;   
          //星星移动速度  
          this.alpha = random(2, 10) / 10;  
          
          count++;  
          stars[count] = this;  
        }  
          
        Star.prototype.draw = function() {  
          var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,  
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,  
            twinkle = random(10);  
          if (twinkle === 1 && this.alpha > 0) {  
            this.alpha -= 0.05;  
          } else if (twinkle === 2 && this.alpha < 1) {  
            this.alpha += 0.05;  
          }
          
          ctx.globalAlpha = this.alpha;
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius); 
          this.timePassed += this.speed;
        }  
          
        for (var i = 0; i < maxStars; i++) {  
          new Star();  
        }
          
        function animation() {
          
          ctx.globalCompositeOperation = 'source-over';  
          ctx.globalAlpha = trailing; //尾巴  
          ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';  
          ctx.fillRect(0, 0, w, h)  
          ctx.globalCompositeOperation = 'lighter';
          ctx.drawImage(document.getElementById('huoxingImg'), 101*window.innerWidth/1366, 350, 30, 30);
          ctx.drawImage(document.getElementById('tuxingImg'), 321*window.innerWidth/1366, 450, 50, 20);
          ctx.drawImage(document.getElementById('tianwangxingImg'), 700*window.innerWidth/1366, 450, 20, 20);
          ctx.drawImage(document.getElementById('shuixingImg'), 341*window.innerWidth/1366, 250, 25, 25);
          ctx.drawImage(document.getElementById('muxingImg'), 683*window.innerWidth/1366, 200, 20, 20);
          ctx.drawImage(document.getElementById('jinxingImg'), 1024*window.innerWidth/1366, 300, 30, 30);
          ctx.drawImage(document.getElementById('haiwangxingImg'), 900*window.innerWidth/1366, 400, 25, 25);
          ctx.drawImage(document.getElementById('mingwangxingImg'), 500*window.innerWidth/1366, 450, 30, 30);
          ctx.drawImage(document.getElementById('diqiuImg'), 600*window.innerWidth/1366, 350, 30, 30);
          for (var i = 1, l = stars.length; i < l; i++) {  
            stars[i].draw();  
          };
          window.requestAnimationFrame(animation);
        }
        animation();
      },
    },
  };
</script>
<style>
  html, body {
    overflow: hidden;
  }
  .page-index {
    #jinxingImg, #muxingImg, #shuixingImg, #huoxingImg, #tuxingImg, #tianwangxingImg, #haiwangxingImg, #mingwangxingImg, #diqiuImg   {
      display: none;
    }
  }
</style>

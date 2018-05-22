<template>
  <div>
    <transition name="fade">
      <div class="page">
        <div class="hudie">
          <svg  v-if="showBanner"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace" class="svg-defs">
            <defs>
              <pattern id='image' width="1" height="1" viewBox="0 0 100 100" preserveAspectRatio="none">
                <image xlink:href="./images/pattern.png" width="100" height="100" preserveAspectRatio="none"></image>
              </pattern>
              <g id="shape-butterfly-1">
                <path class="path" fill="" clip-rule="evenodd" d="M8.65,2.85c0.934-0.2,2.15-0.333,3.65-0.4c1.534-0.1,2.667-0.083,3.4,0.05
              c1.533,0.267,3.45,0.767,5.75,1.5c2.466,0.8,4.35,1.617,5.65,2.45c2.066,1.2,3.883,2.383,5.45,3.55c2.567,2.1,4.35,3.8,5.35,5.1
              l2.1,2.5c0.933,1.167,1.517,1.983,1.75,2.45c0.333,0.767,1.083,2.117,2.25,4.05c0.233,0.467,0.717,1.683,1.45,3.65
              c0.733,2.067,1.2,3.45,1.4,4.15c0.467,1.733,0.917,3.767,1.35,6.1l0.4,3.85l-0.25-3.4c-0.6-5.967-1.267-10.25-2-12.85
              c-0.733-2.434-2.167-5.467-4.3-9.1c-0.966-1.667-1.566-3-1.8-4c-0.233-0.933-0.1-1.267,0.4-1c1.3,0.733,2.917,3.867,4.85,9.4
              c1.667,4.7,2.85,11.2,3.55,19.5c0.567,6.934,0.667,11.917,0.3,14.95l0.2,0.05c0.231,0,0.348-0.05,0.35-0.15v0.05l0.1,0.05v27.4
              c-0.032-0.018-0.065-0.035-0.1-0.05v-0.05c-0.7,0.267-0.983,0.117-0.85-0.45c0.067-0.333,0.017-0.817-0.15-1.45
              c-0.2-0.6-0.316-0.983-0.35-1.15l-0.5-1.65c-0.533-2.967-0.833-5.034-0.9-6.2c-0.1-1.533-0.133-2.4-0.1-2.6
              c0-0.933,0.167-1.667,0.5-2.2c0.567-0.9,0.684-1.75,0.35-2.55c-0.167-0.367-0.367-0.6-0.6-0.7c-0.333-0.133-0.517,0.283-0.55,1.25
              c-0.033,1.533-0.167,2.9-0.4,4.1c-0.1,2.3-0.267,3.684-0.5,4.15c-0.333,0.667-1.25,2.95-2.75,6.85c-1.167,2.8-2.233,4.817-3.2,6.05
              c-0.9,1.2-1.583,2.1-2.05,2.7c-0.8,1-1.434,1.667-1.9,2c-2.067,1.333-3.633,2.067-4.7,2.2c-3.033,0.267-4.95,0.317-5.75,0.15
              c-0.8-0.167-1.383-0.217-1.75-0.15c-0.533,0.1-1.033,0.45-1.5,1.05c-0.5,0.667-1.217,1.284-2.15,1.85
              c-0.934,0.567-1.85,0.934-2.75,1.1c-2.467,0.433-4.45,0.25-5.95-0.55c-0.7-0.4-1.467-1.15-2.3-2.25c-0.6-0.867-1.033-1.567-1.3-2.1
              c-0.267-0.667-0.483-1.483-0.65-2.45c-0.3-1.467-0.383-2.717-0.25-3.75c0.267-1.9,0.45-3.05,0.55-3.45
              c0.233-1.233,0.566-2.333,1-3.3C9.25,77.45,9.767,76.4,10,76c0.667-1.233,1.55-2.583,2.65-4.05c1.1-1.434,2.184-2.583,3.25-3.45
              c0.367-0.3,1.15-0.867,2.35-1.7c0.767-0.566,1.917-1.25,3.45-2.05c1.733-0.933,3.267-1.633,4.6-2.1
              c2.133-0.733,4.534-1.467,7.2-2.2c0.467-0.1,1.517-0.3,3.15-0.6c0.967-0.233,0.4-0.4-1.7-0.5c-2.434-0.1-4.534-0.3-6.3-0.6
              c-1.566-0.267-3.383-0.7-5.45-1.3c-2.8-0.8-4.467-1.317-5-1.55c-1.567-0.667-3.2-1.75-4.9-3.25c-1.733-1.533-3-3.1-3.8-4.7
              c-0.533-1.067-0.967-2.434-1.3-4.1c-0.233-1.067-0.3-2.133-0.2-3.2c0.133-0.833,0.183-1.3,0.15-1.4v-0.6
              c-2.467-3.233-3.983-5.433-4.55-6.6c-0.533-1.033-0.883-1.833-1.05-2.4c-0.3-0.867-0.466-1.85-0.5-2.95
              c-0.033-2.367,0.034-4.117,0.2-5.25c0.3-1.034,0.483-1.8,0.55-2.3c0.167-0.867,0.034-1.533-0.4-2c-0.6-0.7-1.133-1.517-1.6-2.45
              c-0.566-1.133-0.833-2.117-0.8-2.95c0.033-1.333,0.167-2.367,0.4-3.1c0.367-1.267,1.05-2.267,2.05-3
              C4.417,4.25,6.483,3.317,8.65,2.85z"/>
              </g>
            </defs>
          </svg>
          <section v-if="showBanner" class="scene3d">
            <div class="butterfly_container first">
              <var class="rotate3d">
                <var class="scale">
                  <var class="translate3d">
                    <var class="translate3d-1">
                      <figure class="butterfly">
                        <svg class="wing left icon shape-codepen" viewBox="0 0 50 100">
                          <use class="left" xlink:href="#shape-butterfly-1"></use>
                        </svg> 
                        <svg class="wing right icon shape-codepen" viewBox="0 0 50 100">
                          <use class="left" xlink:href="#shape-butterfly-1"></use>
                        </svg> 
                      </figure>
                    </var>
                  </var>
                </var>
              </var>
            </div>
            <div class="butterfly_container scale_half">
              <var class="rotate3d">
                <var class="scale">
                  <var class="translate3d">
                    <var class="translate3d-1">
                      <figure class="butterfly">
                        <svg class="wing left" viewBox="0 0 50 100"
                             style="-webkit-animation-duration: .75s;
                                    -moz-animation-duration: .75s;
                                    -ms-animation-duration: .75s;
                                    -o-animation-duration: .75s;
                                    animation-duration: .75s;">
                          <use class="left" xlink:href="#shape-butterfly-1"></use>
                        </svg> 
                        <svg class="wing right" viewBox="0 0 50 100"
                             style="-webkit-animation-duration: .75s;
                                    -moz-animation-duration: .75s;
                                    -ms-animation-duration: .75s;
                                    -o-animation-duration: .75s;
                                    animation-duration: .75s;">
                          <use class="left" xlink:href="#shape-butterfly-1"></use>
                        </svg> 
                      </figure>
                    </var>
                  </var>
                </var>
              </var>
              </div>
          </section>
        </div>
        <div :class="`banner ${showLoading ? 'loading' : ''} ${showBanner ? 'transition' : ''}`">
          <img class="loading-img" v-if="showLoading" src="./images/load.gif" alt="">
          <div v-if="showBanner" class="sub-title">墨趣人生.人生充满乐趣</div>
        </div>
        <div class="life">
          <h1>随性的生活方式</h1>
          <p>
            人都有自己的选择。她或许热爱科学，甘愿为此青灯苦烛寂寞一生；她或许热爱繁华，潇洒度日恣意享受人生；无论哪种选择都没有高低贵贱。
          </p>
          <img src="./images/suixing.png" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import util from 'src/common/js/util.js';
  import b1 from './images/b1.png';
  import b2 from './images/b2.png';
  import b3 from './images/b3.png';
  import b4 from './images/b4.png';
  import b5 from './images/b5.png';
  import b6 from './images/b6.png';
  import b7 from './images/b7.png';
  import b8 from './images/b8.png';
  import b9 from './images/b9.png';
  import title from './images/title.png';

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
        showBanner: false,
        showLoading: true,
        imgArrry: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        img: Math.ceil(Math.random() * 9),
      };
    },
    watch: {
      page() {
        scrollTo(0, 0);
      },
    },
    created() {
      this.b1 = b1;
      this.b2 = b2;
      this.b3 = b3;
      this.b4 = b4;
      this.b5 = b5;
      this.b6 = b6;
      this.b7 = b7;
      this.b8 = b8;
      this.b9 = b9;
      this.title = title;
      this.loadImage([
        {
          key: `b${this.imgArrry[this.img - 1]}`,
          parent: 'banner',
        },
        {
          key: 'title',
          parent: 'banner',
        },
      ]);
      util.init();
    },
    mounted() {
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
          this.showLoading = false;
          setTimeout(() => {
            this.showBanner = true;
          }, 500);
        });
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
    transform:translateZ(0);
  }
  .page {
    position: relative;
    background: #fff;
  }
  @media screen and (max-width: 900px) {
  }
  .banner {
    size: 1366px 600px;
    position: relative;
    background: #1c1c1c;
    &.loading {
      text-align: center;
      line-height: 600px;
      .loading-img {
        display: inline-block;
      }
    }
    .title {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 250px;
    }
    .sub-title {
      position: absolute;
      top: 60px;
      left: 30px;
      font-size: 20px;
      letter-spacing: 10px;
      color: #262626;
      z-index: 3;
    }
    .b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9 {
      width: 100%;
      transition: opacity 0.5s;
      opacity: 0;
      height: 600px;
    }
    &.transition {
      .b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9 {
        opacity: 1;
      }
    }
  }
  .life {
    text-align: center;
    h1 {
      padding: 72px 0 16px;
      font-size: 46px;
      font-weight: normal;
      letter-spacing: 2px;
      line-height: 56px;
    }
    p {
      padding: 0 0 55px;
      font-size: 18px;
      line-height: 36px;
    }
  }
  @keyframes rotating {
    0% {
      transform: rotate3d(0, 0, 0, 0deg);
    }

    100% {
      transform: rotate3d(0, 1, 0, 720deg);
    }
  }
  @keyframes rotatingY {
    100% {
      transform: rotateY(-360deg);
    }
  }
  /**/
  @keyframes fluttering {
    0%, 25%, 50%, 75%, 100% {
      transform: translate3d(0, 0, 0);
    }

    10%, 60% {
      transform: translate3d(0, 150px, 0);
    }

    30%, 80% {
      transform: translate3d(0, 50px, 0);
    }
  }
  /**/
  @keyframes left-wing-flap {
    0% {
      transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg);
    }

    50% {
      transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, -70deg);
    }

    100% {
      transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg);
    }
  }
  @keyframes right-wing-flap {
    0% {
      transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg);
    }

    50% {
      transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, -70deg);
    }

    100% {
      transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg);
    }
  }
  .hudie {
    position: absolute;
    size: 100% 1400px;
    z-index: 999;
  }
  .scene3d {
    cursor: pointer;
  }
  .butterfly_container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    animation: rotatingY 10s linear infinite;
    &.first {
      margin-top: -350px;
      margin-left: 0px;
      animation-duration: 5s;
    }
  }
  .butterfly_container var {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
    transform-style: preserve-3d;
  }
  .butterfly_container var.rotate3d {
    transform: rotate3d(1, 0.5, 0, 70deg);
  }
  .butterfly_container var.translate3d {
    transform: translate3d(-300px, 0px, 0px);
  }
  .butterfly_container var.translate3d-1 {
    animation: fluttering 10s ease-in-out infinite;
  }
  .butterfly_container.scale_half var.scale {
    transform: scale3d(0.5, 0.5, 0.5);
  }
  .butterfly_container.scale_third var.scale {
    transform: scale3d(0.333, 0.333, 0.333);
  }
  .butterfly_container.scale_quarter var.scale {
    transform: scale3d(0.25, 0.25, 0.25);
  }
  .butterfly_container figure.butterfly {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    margin-top: -50px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
  }
  .butterfly_container figure.butterfly .wing {
    position: absolute;
    width: 50px;
    height: 100px;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    transform: translate3d(0, 0, 0) rotate3d(1, 0.5, 0, 45deg);
  }
  .butterfly_container figure.butterfly .wing.right {
    transform-origin: 50px 50px;
    transform: translate3d(0px, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 45deg);
    animation: right-wing-flap 0.5s ease-in-out infinite;
    filter: FlipH;
    -ms-filter: "FlipH";
  }
  .butterfly_container figure.butterfly .wing.left {
    transform-origin: 50px 50px;
    animation: left-wing-flap 0.5s ease-in-out infinite;
  }
  .butterfly_container figure.butterfly .wing use {
    display: block;
    transform-style: preserve-3d;
    fill: url(#image);
    stroke: white;
  }
  
  .svg-defs {
    position: absolute;
    height: 0;
    width: 0;
    z-index: 5;
  }
</style>

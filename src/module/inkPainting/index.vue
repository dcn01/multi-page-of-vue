<template>
  <div>
    <transition name="fade">
      <div class="page">
        <div :class="`banner ${showLoading ? 'loading' : ''} ${showBanner ? 'transition' : ''}`">
          <img class="loading-img" v-if="showLoading" src="./images/load.gif" alt="">
          <div v-if="showBanner" class="sub-title">墨趣人生.人生充满乐趣</div>
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
    background: #fff;
  }
  @media screen and (max-width: 900px) {
  }
  .banner {
    size: 1366px 650px;
    position: relative;
    &.loading {
      background: #1c1c1c;
      text-align: center;
      line-height: 650px;
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
    }
    .b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9 {
      width: 100%;
      transition: opacity 0.5s;
      opacity: 0;
    }
    &.transition {
      .b1,.b2,.b3,.b4,.b5,.b6,.b7,.b8,.b9 {
        opacity: 1;
      }
    }
  }
</style>

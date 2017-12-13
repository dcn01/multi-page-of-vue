<template xmlns="http://www.w3.org/1999/html">
  <div>
    <transition name="fade">
    <div class="page-index" v-show="!isLoading">
      <transition name="zoom">
        <div class="body scroll" v-show="navSelected == 'index'">
          <div class="background" :style="`background: #aa0525 url(${background}) no-repeat;`"></div>
          <slider v-if="sliders.length" class="banner" :autoplay="true" :dataSource="sliders"/>
          <svg class="arc" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 375 10" preserveAspectRatio="xMinYMin meet">
            <path fill="#ec1e70" d="M 0,0 Q 187.5,15 375,0 v80 h -375 Z"></path>
          </svg>
          <div class="categorys">
            <div v-for="category in categorys" class="category-box" @click="gotoUrl(category.href)">
              <img :src="category.image" class="category">
              </img>
              <div class="title">{{category.title}}</div>
            </div>
          </div>
          <div v-for="hotProduct in hotProducts" class="category-cards">
            <div class="title">{{hotProduct.title}}</div>
            <div class="cards">
              <div v-if="index < 4" v-for="(item,index) in hotProduct.list" class="card" @click="gotoProduct(item)">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                  <defs>
                    <linearGradient :id="`gradientColor${index}`" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop offset="0%" :style="`stop-color:#${colors[index].start};
                    stop-opacity:1`"/>
                    <stop offset="100%" :style="`stop-color:#${colors[index].end};
                    stop-opacity:1`"/>
                    </linearGradient>
                  </defs>
                  <path :fill="`url(#gradientColor${index})`" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
                </svg>
                <img :src="item.image" alt=""/>
                <div class="card-title">{{item.title}}</div>
                <div class="card-desc">{{item.subTitle}}</div>
              </div>
            </div>
            <div class="cards">
              <div class="card" v-if="index > 3" v-for="(item,index) in hotProduct.list" @click="gotoProduct(item)">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                  <defs>
                    <linearGradient :id="`gradientColor${index}`" x1="0%" y1="100%" x2="100%" y2="100%">
                    <stop offset="0%" :style="`stop-color:#${colors[index].start};
                    stop-opacity:1`"/>
                    <stop offset="100%" :style="`stop-color:#${colors[index].end};
                    stop-opacity:1`"/>
                    </linearGradient>
                  </defs>
                  <path :fill="`url(#gradientColor${index})`" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
                </svg>
                <img :src="item.image" alt=""/>
                <div class="card-title">{{item.title}}</div>
                <div class="card-desc">{{item.subTitle}}</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="body scroll" style="min-height: 1000px;" v-show="navSelected == 'like'">
          <div class="cells">
            <div :class="`cell ${index%2 == 1 ? 'mid' : ''}`" v-for="product,index in history">
              <img :src="product.image" alt=""/>
              <div class="title">{{product.title}}</div>
              <div class="subtitle">{{product.subTitle}}</div>
            </div>
            <div v-if="history.length%3 > 0 && history.length%3 < 3" :class="`cell ${history.length%2 == 0 ? '' : 'mid' }`">
            </div>
            <div v-if="history.length%3 > 0 && history.length%3 < 2" :class="`cell ${history.length%2 !== 0 ? '' : 'mid' }`">
            </div>
          </div>
        </div>
      </transition>
      <footer>
        <svg class="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="30">
          <defs>
            <radialGradient id="pink_white" cx="50%" cy="100%" r="99%"
            fx="50%" fy="100%">
              <stop offset="0%" style="stop-color:#ff1858;
              stop-opacity:0"/>
              <stop offset="100%" style="stop-color:#fff;
              stop-opacity:1"/>
            </radialGradient>
          </defs>
          <path fill="url(#pink_white)"  d="M 0,30 C 10,0 50,0 60,30 "></path>
        </svg>
        <div class="wave" @click="gotoUrl(active.href)">
          <div class="w1"></div>
          <div class="title">{{active.title}}<br/>{{active.subTitle}}</div>
        </div>
        <div v-for="nav in navigation" :class="`iconfont icon-${nav.icon}${nav.icon == navSelected ? '-fill' : ''}`" @click="() => { 
          if(nav.href) { gotoUrl(nav.href);} window.scrollTo(0, 0); navSelected = nav.icon }">
          <div class="title">{{nav.desc}}</div>
        </div>
      </footer>
    </div>
    </transition>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import 'src/common/css/mall.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';
  import Fingerprint from 'fingerprintjs';// eslint-disabled-line

  export default {
    name: 'Index',
    data() {
      return {
        navSelected: 'index',
        history: [],
        background: '',
        init: false,
        percent: 0,
        fingerprint: new Fingerprint().get(),
        active: 2,
        isLoading: true,
        barClose: false,
        sliders: [],
        categorys: [],
        hotProducts: [],
        navigation: [],
        colors: [
          {
            start: 'ff718c',
            end: 'fe47d7',
          },
          {
            start: '2ebfee',
            end: '27dbb4',
          },
          {
            start: 'ff4dc5',
            end: 'ff688b',
          },
          {
            start: '8e79f8',
            end: '47b5f2',
          },
          {
            start: '8e79f8',
            end: '47b5f2',
          },
          {
            start: 'fc8d3c',
            end: 'feb034',
          },
          {
            start: '998bfd',
            end: 'c09cfe',
          },
          {
            start: '2ebfee',
            end: '27dbb4',
          },
        ],
      };
    },
    created() {
      util.init();
      window.wilddog.initializeApp({
        syncURL: 'https://ws2016.wilddogio.com',
      });
      const queryIndex = window.wilddog.sync().ref('index');
      queryIndex.on('value', snapshot => {
        this.isLoading = false;
        const indexData = snapshot.val();
        this.sliders = indexData.sliders;
        this.categorys = indexData.categorys;
        this.hotProducts = indexData.hotProducts;
        this.navigation = indexData.navigation;
        this.active = indexData.active;
        this.background = indexData.background;
      });
      const queryUser = window.wilddog.sync().ref(`users/${this.fingerprint}`);
      queryUser.on('value', snapshot => {
        this.history = snapshot.val() || [];
      });
    },
    components: { slider },
    mounted() {
      // const array = [];
      // array[0] = 'a';
      // array[1] = 'b';
      // window.wilddog.sync().ref('users').child(this.fingerprint).set(array);// eslint-disabled-line
    },
    methods: {
      loaded(isLoading) {
        this.isLoading = isLoading;
      },
      showBar(barClose) {
        this.barClose = barClose;
      },
      gotoProduct(product) {
        this.history = this.history.filter(item => item.title !== product.title);
        console.log(this.history);
        this.history.push(product);
        window.wilddog.sync().ref('users').child(this.fingerprint).set(this.history);
        location.href = product.href || '';
      },
      gotoUrl(url) {
        location.href = url;
      },
    },
  };
</script>
<style>
  /* stylelint-disable */
  .page-index {
    .body {
      background: #ec1e70;
      position: absolute;
      width: 100%;
      top: 0;
      font-size: 10px;
      z-index: 3;
      .background {
        background-size: cover!important;
        height: 300px;
        width: 375px;
      }
      .banner {
        position: absolute;
        top: 176px;
        z-index: 2;
      }
      .arc {
        position: relative;
        z-index: 3;
        top: -20px;
      }
      .categorys {
        position: relative;
        padding: 0 10px;
        width: 100%;
        top: -90px;
        display: flex;
        z-index: 3;
        .category-box {
          position: relative;
          flex: 1;
          text-align: center;
          .title {
            color: #fff;
            position: absolute;
            top: 50px;
            text-align: center;
            left: 0;
            right: 0;
            font-size: 9px;
          }
          .category {
            display: inline-block;
            size: 40px 40px;
            background: #fff;
            border-radius: 50%;
            .title {
              color: #fff;
              position: absolute;
              top: 50px;
              text-align: center;
              width: 40px;
              font-size: 9px;
            }
            &.red {
              background: red;
            }
            &.green {
              background: green;
            }
            &.yellow {
              background: yellow;
            }
            &.purple {
              background: purple;
            }
            &.blue {
              background: #06e6e6;
            }
          }
        }
      }
      .category-cards {
        position: relative;
        padding: 0 10px;
        width: 100%;
        top: -40px;
        z-index: 3;
        padding: 30px 10px;
        margin: auto;
        .title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 14px;
          height: 20px;
        }
        .cards {
          width: 100%;
          display: flex;
          .card {
            flex: 1;
            margin: 2px;
            background: #fff;
            height: 120px;
            box-shadow: 0px 3px 3px #c11142;
            position: relative;
            overflow: hidden;
            svg {
              position: absolute;
              top: 70px;
              left: 0;
            }
            img {
              width: 70px;
              height: 70px;
              position: absolute;
              margin: auto;
              left: 0;
              right: 0;
              top: 0;
              z-index: 3;
            }
            .card-title, .card-desc {
              position: absolute;
              color: #fff;
              bottom: 18px;
              left: 0;
              right: 0;
              text-align: center;
              font-size: 8px;
            }
            .card-desc {
              bottom: 5px;
              font-size: 7px;
            }
          }
        }
      }
      .cells {
        .cell {
          height: 125px;
          background: #fff;
          position: relative;
          float: left;
          width: 125px;
          &.mid {
            background: #f5f9f8;
          }
          img {
            size: 80px 80px;
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
          }
          .title, .subtitle {
            position: absolute;
            width: 100%;
            text-align: center;
            top: 85px;
            color: #ec1e70;
          }
          .subtitle {
            position: absolute;
            top: 100px;
          }
        }
      }
    }
    footer {
      position: fixed;
      bottom: 0;
      height: 40px;
      width: 100%;
      text-align: center;
      background: repeating-linear-gradient(to right, #ff02a0 , #fe0a62 20%, #fe0a62 100%);
      &:before {
        display: block;
        content: ' ';
        height: 1Px;
        width: 100%;
        border-top: 1Px solid #c11142;
        transform: scaleY(.5);
      }
      .circle {
        display: inline-block;
        position: relative;
        top: -20px;
      }
      z-index:3;
      .wave {
        size: 80px 80px;
        position: absolute;
        top: -20px;
        left: 147.5px;
        text-align: center;
        .title {
          position: absolute;
          color: #fff;
          size: 60px 20px;
          left: 10px;
          top: 25px;
          font-size: 10px;
          -webkit-animation:maxc 2s infinite;
        }
        * {
          position:absolute;
          border-radius:50%;
        }
        .w1 {
          -webkit-animation:opac 2s infinite;
          opacity: 1;
          size: 0 0;
          top:50%;
          left:50%;
          border: 5px solid #fff;
        }
      }
      .iconfont {
        color: #fff;
        position: absolute;
        top: 8px;
        .title {
          font-size: 9px;
        }
      }
      .icon-index, .icon-index-fill {
        left: 30px;
      }
      .icon-like, .icon-like-fill {
        left: 100px;
      }
      .icon-cart, .icon-cart-fill {
        right: 100px;
      }
      .icon-mine, .icon-mine-fill {
        right: 30px;
      }
    }
  }
  @keyframes opac{
    0% {
      opacity: 1;
      size: 0 0;
      top:50%;
      left:50%;
      border: 5px solid #fff;
    }
    50% {
      opacity : 0;
      size: 100% 100%;
      top:0;
      left:0;
      border: 2px solid #fff;
    }
    100% {
      opacity: 0;
      size: 0 0;
      top:50%;
      left:50%;
      border: 5px solid #fff;
    }
  }
  @keyframes maxc{
    0% {
      transform: scale(1);
    }
    40% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
  /* stylelint-enable */
</style>

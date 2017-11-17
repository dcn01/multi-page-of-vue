<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="page-index">
      <div class="body scroll">
        <div class="background"></div>

        <slider class="banner" :dataSource="imgData"/>
        <svg class="arc" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 375 10" preserveAspectRatio="xMinYMin meet">
          <path fill="#ec1e70" d="M 0,0 Q 187.5,15 375,0 v80 h -375 Z"></path>
        </svg>
        <div class="categorys">
          <div class="category-box">
            <img src="./images/hees.jpg" class="category yellow">
            </img>
            <div class="title">HKES</div>
          </div>
          <div class="category-box">
            <img src="./images/ball.jpg" class="category yellow">
            </img>
            <div class="title">BALL</div>
          </div>
          <div class="category-box">
            <img src="./images/start.jpg" class="category yellow">
            </img>
            <div class="title">START</div>
          </div>
          <div class="category-box">
            <img src="./images/flower.jpg" class="category yellow">
            </img>
            <div class="title">FLOWER</div>
          </div>
          <div class="category-box">
            <img src="./images/tree.jpg" class="category yellow">
            </img>
            <div class="title">TREE</div>
          </div>
        </div>
        <div class="category-cards">
          <div class="title">双11专属会场</div>
          <div class="cards">
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor1" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#ff718c;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#fe47d7;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor1)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">酷玩3C</div>
              <div class="card-desc">智能生活</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor2" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#2ebfee;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#27dbb4;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor2)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">运动鞋服</div>
              <div class="card-desc">疯抢百元券</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor3" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#ff4dc5;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#ff688b;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor3)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">电脑办公</div>
              <div class="card-desc">分期免息</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor4" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#8e79f8;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#47b5f2;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor4)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">手机周边</div>
              <div class="card-desc">跨品类满减</div>
            </div>
          </div>
          <div class="cards">
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <path fill="url(#gradientColor4)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">家居百货</div>
              <div class="card-desc">抢券减百元</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor5" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#fc8d3c;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#feb034;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor5)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">精品家具</div>
              <div class="card-desc">买1赠1</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <defs>
                  <linearGradient id="gradientColor6" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#998bfd;
                  stop-opacity:1"/>
                  <stop offset="100%" style="stop-color:#c09cfe;
                  stop-opacity:1"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradientColor6)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">童装会场</div>
              <div class="card-desc">抢大牌券</div>
            </div>
            <div class="card">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="80"version="1.1" viewBox="0 0 82.25 10" preserveAspectRatio="xMinYMin meet">
                <path fill="url(#gradientColor2)" d="M 0,0 q 10,15 20,15  l 42.25,0 q 10,0 20,-15 v 50 h -82.25 z  "></path>
              </svg>
              <img src="./images/3c.jpg" alt=""/>
              <div class="card-title">运动健身</div>
              <div class="card-desc">大牌29元起</div>
            </div>
          </div>
        </div>
      </div>
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
        <div class="wave">
          <div class="w1"></div>
          <div class="title">11.11<br/>全球狂欢节</div>
        </div>
        <div class="iconfont icon-index">
          <div class="title">精选</div>
        </div>
        <div class="iconfont icon-like">
          <div class="title">喜欢</div>
        </div>
        <div class="iconfont icon-cart">
          <div class="title">购物车</div>
        </div>
        <div class="iconfont icon-mine">
          <div class="title">我</div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import 'src/common/css/mall.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';

  export default {
    name: 'Index',
    data() {
      return {
        init: false,
        percent: 0,
        active: 2,
        isLoading: false,
        barClose: false,
        imgData: [
          {
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510664434198&di=2d0793ceb9fdfb3b0286259009898994&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0199b35785d16e0000018c1b27c982.jpg%40900w_1l_2o_100sh.jpg',
            onClick: () => {
              alert(1);
            },
          },
          {
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510664883028&di=96c7f63fa948333e2ff145d8083923ca&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2FoNfV0itGTbiLV6IRDhtcDw%3D%3D%2F7917040072873497106.jpg',
            onClick: () => {
              alert(2);
            },
          },
          {
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510664627288&di=4239b5744fd5715001f8efc9a216fe0c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F99%2F84%2F27k58PIC7eg_1024.jpg',
            onClick: () => {
              alert(3);
            },
            url: '',
          },
          {
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510664627288&di=4239b5744fd5715001f8efc9a216fe0c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F99%2F84%2F27k58PIC7eg_1024.jpg',
            onClick: () => {
              alert(3);
            },
            url: '',
          },
          {
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510664627288&di=4239b5744fd5715001f8efc9a216fe0c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F99%2F84%2F27k58PIC7eg_1024.jpg',
            onClick: () => {
              alert(3);
            },
            url: '',
          },
        ],
      };
    },
    created() {
      util.init();
    },
    components: { slider },
    mounted() {
    },
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
  .page-index {
    .body {
      height: 1000px;
      background: #ec1e70;
      position: absolute;
      width: 100%;
      top: 0;
      font-size: 10px;
      z-index: 3;
      .background {
        background: #aa0525 url(./images/background.jpg) no-repeat;
        background-size: cover;
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
        position: absolute;
        padding: 0 10px;
        width: 100%;
        top: 310px;
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
        position: absolute;
        padding: 0 10px;
        width: 100%;
        top: 390px;
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
              font-size: 10px;
            }
            .card-desc {
              bottom: 5px;
              font-size: 9px;
            }
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
      }
      .icon-index, .icon-like, .icon-cart, .icon-mine {
        position: absolute;
        top: 8px;
        .title {
          font-size: 9px;
        }
      }
      .icon-index {
        left: 30px;
      }
      .icon-like {
        left: 100px;
      }
      .icon-cart {
        right: 100px;
      }
      .icon-mine {
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
</style>

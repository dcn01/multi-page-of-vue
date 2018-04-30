<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div id="wrapper" v-show="percent != 100">
      <div :class="`loader-container ${percent > 0 ? 'run' : ''}  ${percent === 100 ? 'done' : ''}`">
        <div class="meter">{{percent}}</div>
        <span class="runner"></span>
      </div>
    </div>
    <div class="page-index scroll allow-touchmove" v-show="percent === 100">
      <div class="header">
        <div class="sort"></div>
        <div class="iconfont icon-fangxinfei Shake"></div>
        <div class="iconfont icon-youji"></div>
        <div class="iconfont icon-fenxiang"></div>
        <transition name="moveRight">
          <div v-show="init">
            <div class="iconfont icon-sousuo nav"></div>
            <div class="nav active">首页</div>
            <div class="nav">关于</div>
            <div class="nav">生活</div>
            <div class="nav">学习</div>
            <div class="nav">工作</div>
          </div>
        </transition>
      </div>
      <div class="header-bottom">
        <transition name="moveDown">
          <div v-show="init">
            <div class="title">梦想就在前方</div>
            <div class="description">
              <label></label>
              <span>&nbsp;&nbsp;&nbsp;失败总会输给坚强&nbsp;&nbsp;&nbsp;</span>
              <label></label>
            </div>
          </div>
        </transition>
      </div>
      <div class="banner">
        <div class="dream">
          <div class="title">梦想起航</div>
          生活有时是一座巍峨的大山，披荆斩棘越过它，风光无限；生活有时像干枯的荒漠，心之所向，走过它，绿洲逼眼。闪光不息的生命，常常在艰涩中执着，永久弥香。
        </div>
      </div>
      <div class="container">
        <ul>
          <li :class="active === 1 ? 'active' : ''" @click="active = 1">生活</li>
          <li :class="active === 2 ? 'active' : ''" @click="active = 2">学习</li>
          <li :class="active === 3 ? 'active' : ''" @click="active = 3">工作</li>
        </ul>
        <transition name="fade">
          <div  v-show="active === 1" class="tabpanel">
            <div class="image">
              <div class="img hanshansi"></div>
            </div>
            <div class="image">
              <div class="img huqiu"></div>
            </div>
            <div class="image">
              <div class="img qilishantang"></div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div  v-show="active === 2" class="tabpanel">
            <div class="image">
              <div class="img javaScript"></div>
            </div>
            <div class="image">
              <div class="img css"></div>
            </div>
            <div class="image">
              <div class="img html"></div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div  v-show="active === 3" class="tabpanel">
            <div class="image">
              <div class="img hanshansi"></div>
            </div>
            <div class="image">
              <div class="img huqiu"></div>
            </div>
            <div class="image">
              <div class="img qilishantang"></div>
            </div>
          </div>
        </transition>
        <div class="card">
          <img src="./images/qianduancainiao.jpg" alt="">
          <div class="title">从零开始，如何成为一个前端工程师？</div>
          <div class="description">BY&nbsp;<i>carry</i>&nbsp;&nbsp;Oct 10 2017</div>
          <p>切图仔？对的，有很多人称呼前端工程师为切图仔。切图仔的来源其实也是有据可查，早期的前端从设计师手里拿到PSD文件，也就是通常的设计图，然后根据需要把psd切成一个个小的的图片，再把这些图片组合成一个Html网页，对的，早期的前端的工作就是这么多。这也是名副其实的切图仔。当然作为一个菜鸟前端，切图仔就是我们第一个身份，也是必须经历的身份，而且是很重要的身份。为什么这样说呢？通常切图仔针对于前端工程师来说不是菜鸟的象征吗？其实不然，无论你在前端领域的造诣有多高，但是只要你还是一个开发的话，你的工作中最重要的事情不还是把设计图转化为网页吗？只有有了跟设计图匹配的网页布局，后面才能做更多的事情。</p>
          <p>前端第一课：如何做好一个切图仔？</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1.严格按照设计图完成开发任务</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;2.控制好后台动态数据的展示</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;3.在前两条完成的前提下提高代码的健壮性、扩展性、复用性</p>
          <p>核心职能很简单：PSD TO HTML</p>
          <p>具体的话其实可以从切图仔的日常工作来考量，首先作为一个切图仔，我们的工作相对比较简单，因此使用到的工具也相对较少，一个文本编辑器，一个photoshop软件，一个chrome浏览器，大概就够用了。首先photoshop要用的溜，切图切的好，码code可以少很多。网页布局也会变得简单。所以切图的时候不要忙着切，要先思考如何切，能达到最好的效果。使用好图层功能，避免出现大量的裁剪工作。对于一组多个同类型的图片要保持裁剪尺寸的一致性，为后面的布局打好基础。网页一般都是需要跟后台服务交互的，而网页上的显示的数据一般也是动态变化的，而动态的数据是后台服务及时给出的，很难控制数据的长度类型等，所以对于数据可能出现的临界值需要提前考虑进去，保证在各种极端的情况下网页能够很好的展示。而代码的健壮性、扩展性、复用性，其实本质上就是一个开发者的自我修养问题。无论是前端还是后端，都会有相同的问题出现，比如在做网页开发的时候我们通常使用chrome作为开发浏览器，但是开发出来的网页会在IE、Firefox等其他浏览器上展示，这个时候就要去考虑一些兼容性问题。当然实际的情况还需要根据实际的要求去考虑。假如设计师设计我们的首页导航上有五个类目图标，而这类目图标是从后台读取过来动态生成的，数量不可控，这个时候我们就要考虑其可能出现的各种数量的情况下的展示。复用性的话就更容易理解了，相同的布局结构样式上有少许的差异可以使用同一个样式并且加以覆盖，尽可能的复用已有的代码。</p>
          <p>以上做到了，我们工作基本上可以应付自如了，接下来我们需要一些实际的东西，我会一一列举出来就不一一详细介绍了：</p>
          <div class="ganhuo"><a href="https://www.w3cschool.cn/html/">HTML</a>/<a href="https://www.w3cschool.cn/html5/">HTML5</a></div>
          <div class="ganhuo"><a href="https://www.w3cschool.cn/css/">CSS</a>/<a href="https://www.w3cschool.cn/css3/">CSS3</a></div>
          <div class="ganhuo">
            <a href="http://www.photoshop.com/products/photoshop">PhotoShop</a>/
            <a href="http://www.getpaint.net/">Paint.net</a>/
            <a href="http://www.adobe.com/cn/products/fireworks.html">Fireworks</a>/
            <a href="http://www.gimp.org/">GIMP</a>/
            <a href="http://bohemiancoding.com/sketch/">Sketch</a>
          </div>
          <p>当然，这才是前端的开始。想要了解更多可以关注博主其他博文。去点下那个风骚的放心飞Button吧，博主带你飞哦！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/cobra.css';

  export default {
    name: 'Index',
    data() {
      return {
        init: false,
        percent: 0,
        active: 2,
        isLoading: true,
      };
    },
    created() {
      /* Rem 核心实现 */
      (function (doc, win) {
        const docEl = doc.documentElement;
        const clientWidth = docEl.clientWidth;
        const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
        const recalc = function () {
          if (clientWidth === undefined) return;
          if (clientWidth >= 414) {
            docEl.style.fontSize = '20px';
            return;
          }
          docEl.style.fontSize = `${20 * (clientWidth / 375)}px`;
        };
        if (doc.addEventListener === undefined) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        document.body.addEventListener('touchmove', (evt) => {
          // In this case, the default behavior is scrolling the body, which
          // would result in an overflow.  Since we don't want that, we preventDefault.
          document.querySelectorAll('.allow-touchmove').forEach(item => {
            if (item.contains(evt.target)) {
              evt.isScroller = true;
            }
          });
          if (!evt.isScroller) {
            evt.preventDefault();
          }
        });
      }(document, window));
    },
    updated() {
      let startY = 0;
      const touchSatrtFunc = function (evt) {
        try {
          // evt.preventDefault(); // 阻止触摸时浏览器的缩放、滚动条滚动等
          const touch = evt.touches[0]; // 获取第一个触点
          const y = Number(touch.pageY); // 页面触点Y坐标
          // 记录触点初始位置
          startY = y;
        } catch (e) {
          // (`touchSatrtFunc：${e.message}`);
        }
      };
      if (!this.ontouchmove) {
        // touchstart事件
        document.addEventListener('touchstart', touchSatrtFunc, false);
        this.ontouchmove = function (ev) {
          const ss = document.querySelector('.scroll');
          const point = ev.touches[0];
          const top = ss.scrollTop;
          // 什么时候到底部
          const bottomFaVal = ss.scrollHeight - ss.offsetHeight;
          // 到达顶端
          if (top <= 0) {
            // 阻止向下滑动
            if (point.clientY > startY) {
              ev.preventDefault();
            } else {
              // 阻止冒泡
              // 正常执行
              ev.stopPropagation();
            }
          } else if (top === bottomFaVal) {
            // 到达底部
            // 阻止向上滑动
            if (point.clientY < startY) {
              ev.preventDefault();
            } else {
              // 阻止冒泡
              // 正常执行
              ev.stopPropagation();
            }
          } else if (top > 0 && top < bottomFaVal) {
            ev.stopPropagation();
          } else {
            ev.preventDefault();
          }
        };
      } else {
        document.querySelector('.allow-touchmove') && document.querySelector('.allow-touchmove').removeEventListener('touchmove', this.ontouchmove);
      }
      document.querySelector('.allow-touchmove') && document.querySelector('.allow-touchmove').addEventListener('touchmove', this.ontouchmove);
    },
    mounted() {
      const interval = setInterval(() => {
        if (this.percent === 100) {
          setTimeout(() => {
            this.init = true;
          }, 10);
          clearInterval(interval);
          return;
        }
        this.percent += 1;
      }, 30);
    },
    methods: {
      checkClick(txt) {
        /* eslint-disable no-alert */
        alert(txt);
        /* eslint-enable no-alert */
      },
    },
  };
</script>
<style>
  /* stylelint-disable */
  #wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    background: transparent url('images/loading-bg.png') repeat;
  }
  .loader-container {
    height: 6px;
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -3px;
    margin-left: -100px;
    background-color: transparent;
    background-image: -webkit-linear-gradient(left, #5bd8ff, #ff0000);
    box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 3px 0 0 3px;
  }
  .loader-container:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin-top: -0.5em;
    margin-right: -1em;
    background-image: -webkit-linear-gradient(top, #000000, #212121);
  }
  .loader-container.done:after {
    background: Red;
  }
  .run .runner {
    content: "";
    position: absolute;
    right: 0;
    height: 100%;
    width: 0%;
    background-color: transparent;
    background-image: -webkit-linear-gradient(top, #000000, #212121);
    animation: loader 3s linear;
  }
  .meter {
    position: absolute;
    top: 0;
    left: 80px;
    width: 40px;
    font-size: 20px;
    margin-top: .3em;
    color: #ff0000;
    animation: meter 3s linear;
    text-shadow: 0 -1px 0 #333333;
  }
  .meter:after {
    content: "%";
  }
  @keyframes loader {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
  @keyframes meter {
    0% {
      color: #5bd8ff;
    }
    100% {
      color: #ff0000;
    }
  }
  .page-index {
    .header {
      height: 60px;
      background: #FFF;
      padding: 20px 10px;
      box-shadow: 0px 1px 9px 1px #cfcfcf;
      border-top: 2px solid #9E9E9E;
      position: relative;
      .sort {
        border-top: 2px solid #666;
        border-bottom: 2px solid #666;
        size: 20px 16px;
        position: relative;
        &:before {
          content: ' ';
          position: absolute;
          top: 3px;
          size: 20px 2px;
          border-bottom: 2px solid #666;
        }
      }
      .iconfont {
        position: absolute;
        top: 20px;
        right: 10px;
        cursor: pointer;
        font-size: 25px;
        &.icon-fangxinfei {
          right: 100px;
        }
        &.icon-youji {
          right: 50px;
        }
      }
      .nav {
        float: left;
        size: 90px 40px;
        font-size: 15px;
        display: none;
      }
    }
    .header-bottom {
      height: 100px;
      visibility: visible;
      animation-duration: 0.8s;
      animation-delay: 0.2s;
      animation-name: fadeInDown;
      .title {
        font-size: 20px;
        text-align: center;
        padding: 15px 0;
      }
      .description {
        height: 25px;
        font-size: 14px;
        text-align: center;
        color: #9E9E9E;
        label {
          display: inline-block;
          width: 75px;
          height: 2px;
          margin-top: -26px;
          top: 37px;
          left: 366px;
          background: #303030;
        }
      }
    }
    .banner {
      width: 100%;
      min-height: 300px;
      background: url('images/bg-min.jpg') no-repeat center center;
      background-size: cover;
      .dream {
        padding: 100px 35px 0;
        text-align: center;
        color: #9E9E9E;
        font-size: 12px;
        line-height: 30px;
      }
    }
    .container {
      padding: 0 15px;
      ul {
        display: flex;
        border-bottom: 1px solid #ddd;
        li {
          flex: 1;
          height: 40px;
          display: flex;
          align-items: center;
          font-size: 14px;
          border: 1px solid transparent;
          border-radius: 4px 4px 0 0;
          color: #016773;
          font-weight: 600;
          justify-content: center;
          &.active {
            color: #555;
            cursor: default;
            border: 1px solid #ddd;
            text-decoration: none;
            background-color: #FFF;
            border-bottom: 3px solid #9E9E9E;
          }
        }
      }
      .tabpanel {
        margin-top: 30px;
        display: flex;
        .image {
          width: 33%;
          padding: 0 7px;
          flex: 1;
          .img {
            width: 100%;
            height: 75px;
            &.hanshansi {
              background: url('images/hanshansi-min.jpeg') no-repeat center center;
              background-size: cover;
            }
            &.huqiu {
              background: url('images/huqiu-min.jpeg') no-repeat center center;
              background-size: cover;
            }
            &.qilishantang {
              background: url('images/qilishantang-min.jpeg') no-repeat center center;
              background-size: cover;
            }
            &.javaScript {
              background: url('images/javaScript.jpg') no-repeat center center;
              background-size: cover;
            }
            &.css {
              background: url('images/css.jpg') no-repeat center center;
              background-size: cover;
            }
            &.html {
              background: url('images/html.jpg') no-repeat center center;
              background-size: cover;
            }
          }
        }
      }
      .card {
        width: 100%;
        margin-top: 20px;
        background: #fff;
        min-height: 500px;
        padding: 24px;
        img {
          width: 100%;
        }
        .title {
          margin-top: 6px;
          font-size: 12px;
          color: #9e9e9e;
        }
        .description {
          margin-top: 10px;
          font-size: 12px;
          i {
            font-size: 13px;
            color: #9e9e9e;
          }
        }
        p {
          margin-top: 10px;
          color: #9e9e9e;
          font-size: 11px;
        }
        .ganhuo {
          font-size: 11px;
          color: #00BCD4;
          a {
            font-size: 11px;
            color: #00BCD4;
          }
        }
      }
    }
  }
  @media screen and (min-width: 415px) {
    .loader-container {
      height: 6px;
      width: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -3px;
      margin-left: -300px;
      background-color: transparent;
      background-image: -webkit-linear-gradient(left, #5bd8ff, #ff0000);
      box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.4);
      border-radius: 3px 0 0 3px;
    }
    .meter {
      position: absolute;
      top: 0;
      left: auto;
      right: 0;
      width: auto;
      font-size: 2em;
      margin-top: .3em;
      color: #ff0000;
      animation: meter 3s linear;
      text-shadow: 0 -1px 0 #333333;
    }
    .page-index{
      min-width: 1200px;
      .header {
        height: 80px;
        padding: 20px 160px;
        .nav {
          display: block;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
          &.active {
            font-weight: bold;
          }
        }
      }
      .header-bottom {
        height: 120px;
        padding-top: 10px;
        .title {
          font-size: 30px;
        }
      }
      .container {
        .tabpanel {
          .image {
            .img {
              height: 200px;
              &.hanshansi {
                background: url('images/hanshansi.jpeg') no-repeat center center;
                background-size: cover;
              }
              &.huqiu {
                background: url('images/huqiu.jpeg') no-repeat center center;
                background-size: cover;
              }
              &.qilishantang {
                background: url('images/qilishantang.jpeg') no-repeat center center;
                background-size: cover;
              }
              &.javaScript {
                background: url('images/javaScript.jpg') no-repeat center center;
                background-size: cover;
              }
              &.css {
                background: url('images/css.jpg') no-repeat center center;
                background-size: cover;
              }
              &.html {
                background: url('images/html.jpg') no-repeat center center;
                background-size: cover;
              }
            }
          }
        }
      }
      .banner {
        background: url('images/bg.jpg') no-repeat center center;
        background-size: cover;
        min-height: 600px;
        .dream {
          padding-top: 120px;
          text-align: center;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 36px;
          .title {
            font-size: 20px;
            color: white;
          }
        }
      }
      .sort {
        display: none;
      }
      .iconfont {
        display: none;
        &.nav {
          right: auto;
          left: 100px;
          position: static;
        }
      }
      .container {
        max-width: 1200Px;
        margin: auto;
        .tabpanel {
          .image {
            width: 33%;
            padding: 0 7px;
            flex: 1;
            img {
              width: 100%;
              height: 200px;
            }
          }
        }
      }    
    }
  }
  /* stylelint-enable */
</style>

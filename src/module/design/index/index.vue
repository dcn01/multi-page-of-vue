<template xmlns="http://www.w3.org/1999/html">
  <div>
    <Loading :loaded="loaded"/>
    <div class="page-index scroll allow-touchmove">
      <transition name="fade">
        <div id="logo" v-show="!isLoading"></div>
      </transition>
      <transition name="moveRight">
        <div id="motto" v-show="!isLoading"></div>
      </transition>
      <transition name="fade">
        <div id="signature" v-show="!isLoading"></div>
      </transition>
      <transition name="moveUp">
        <div id="entry" v-show="!isLoading">
          <div class="btn" @click="gotoUrl('https://github.com/guxuelong')">My Projects →</div>
          <div class="btn">Experience →</div>
        </div>
      </transition>
      <BarCircle id="nav-bar-btn" :onTouch="showBar"/>
      <transition name="moveLeft">
        <div id="nav-bar" v-show="barClose">
          <div class="bar-title">Intro</div>
          <div class="bar-title" @click="gotoUrl('https://github.com/guxuelong')">Projects</div>
          <div class="bar-title">About</div>
          <div class="bar-title">Photo</div>
          <div class="bar-title">Contact</div>
          <footer>this web site is open sourced on <a href="">github</a></footer>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import BarCircle from 'src/components/BarCircle/Index.vue';
  import Loading from 'src/components/Loading/Index.vue';

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
    components: { BarCircle, Loading },
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
    background: transparent url('images/loading-bg.png') repeat;
    position: fixed;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    #logo {
      background: url('images/logo.png') no-repeat;
      background-size: cover;
      position: absolute;
      top: 20px;
      left: 20px;
      width: 150px;
      height: 75px;
    }
    #name {
      background: url('images/name.png') no-repeat;
      background-size: cover;
      position: absolute;
      top: 200px;
      left: 20px;
      width: 220px;
      height: 100px;
    }
    #motto {
      background: url('images/motto.png') no-repeat;
      background-size: cover;
      position: absolute;
      top: 120px;
      left: 50px;
      width: 200px;
      height: 280px;
    }
    #signature {
      background: url('images/signature.gif') no-repeat;
      background-size: cover;
      position: absolute;
      top: 400px;
      left: 250px;
      width: 100px;
      height: 40px;
    }
    #entry {
      color: #fff;
      width: 300px;
      font-style: italic;
      position: absolute;
      bottom: 10px;
      height: 27px;
      left: 50px;
      font-size: 15px;
      text-align: center;
      .btn {
        float: left;
        width: 120px;
        text-align: center;
        border-radius: 2px;
        border: 1px solid #fff;
        line-height: 25px;
        height: 27px;
        margin-left: 10px;
      }
    }
    #nav-bar-btn {
      position: absolute;
      z-index: 3;
      top: 1em;
      right: 1.5em;
    }
    #nav-bar {
      background: #fff;
      position: absolute;
      z-index: 2;
      width: 300px;
      height: 100%;
      right: 0;
      top: 0;
      overflow: visible;
      &:before {
        content: ' ';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        z-index: 1;
        left: -150px;
        border-top: 1000px solid transparent;
        border-bottom: 150px solid transparent;
        border-right: 150px solid #fff;
      }
      .bar-title {
        color: #999;
        font-weight: 200;
        font-size: 20px;
        padding: 2px 20px;
        transition: color .3s ease;
        &:first-child {
          margin-top: 30px;
          color: #4caf50;
        }
      }
      footer {
        position: absolute;
        bottom: 50px;
        color: #999;
        a {
          color: #ff6b38;
        }
      }
    }
  }
</style>

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
          <footer>this web site is open sourced on <a href="https://github.com/guxuelong/multi-page-of-vue">github</a></footer>
        </div>
      </transition>
      <transition name="fade">
        <svg  v-show="!isLoading" id="long" xmlns="http://www.w3.org/2000/svg" version="1.1" width="350" height="450">
          <path :class="`long1 ${isLoading ? '' : 'done'}`" stroke="none" stroke-width="10" fill="none"
            d="M40,120 l5,0 l5,-1 l5,0 l5,1 l5,-1 l5,-3 l3,3 l3,-4 l3,-3 l3,-4 l3,-3 l0,-10 l3,-3 l3,-2 l8,0 l3,2 l3,3 l3,3 l3,2 l3,2 l8,0 l5,-3 l5,-4 l2,-5 l5,2 l10,-10 l1,-5 l4,2 l30,-24 l-3,-4 l7,0 l5,-5 l10,-8 l10,-10 l10,-8 l5,-3 l5,-2 
            l5,0 l2,2 l2,4 l-3,4 l-10,2 l-4,2 l-10,5 l-25,20 l 10,-2 l 10,2 l10,3 l10,6 l5,6 l2,6 l0,6 l10,-6 l10,-7 l10,-6 l5,-3 l5,-4 l 5,-2 l5,0 l3,4 l0,3 l-2,1 l-2,0 l-10,0 l-38,24 l0,10 l1,3 l4,2 l0,8 l-5,8 l-15,15 l-5,2 l-10 ,1 l-10,0 l-10,-1 l-20,2 l-10,0 l-10,-1 l-10,-2 l-10,0 l-10,1 l-20,4 l-40,20 l-5,-3 l-10,-10 l2,-5 l2,5 l5,0 l10,1 l5,-1 l10,-5 l20,-10 l10,-2 l-20,-1 l-2,-5 l-2,5 l-10,2 l-10,0 l-10,-1 l-10,0 l-10,1 l-2,-2 l0,-2 l-1,-5 l5,-2 l5,1 z"/>
          <path :class="`long2 ${isLoading ? '' : 'done'}`" stroke="none" stroke-width="10" fill="none"
            d="M 180,135 q -80,60, -60,90  q 60,30 30,90 c -120,180 -90,-90 100,-100 c 90,-10 -60,-60 10,10 c 30,30  120,60  0,190
            c 100,-90 100,-150  10,-190 c -60,-50 30,-30 0,-10 c -120,30  -120,30    -175,140 c -30,110 150,-90 80,-120 c -30,-30 -60,-30  37,-100 z"/>
        </svg>
      </transition>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import BarCircle from 'src/components/BarCircle/Index.vue';
  import Loading from 'src/components/Loading/Index.vue';
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
      z-index: 2;
    }
    #signature {
      background: url('images/signature.gif') no-repeat;
      background-size: cover;
      position: absolute;
      z-index: 2;
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
    #long {
      position: absolute;
      left: 0px;
      top: 50px;
      z-index: 1;
      .long1 {
        stroke-dasharray: 1225;
        stroke-dashoffset: -1225;
        fill: none;
        stroke: black;
        opacity: 0.1;
        &.done {
          stroke-dashoffset: 0;
          fill: black;
        }
      }
      .long2 {
        stroke-dasharray: 1911;
        stroke-dashoffset: -1911;
        fill: none;
        stroke: black;
        opacity: 0.1;
        &.done {
          stroke-dashoffset: 0;
          fill: black;
        }
      }
    }

    @media screen and (min-width: 415px) {
      #long {
        position: absolute;
        left: auto;
        right: 400px;
        top: 100px;
        z-index: 1;
        .long1, .long2 {
          opacity: 1;
        }
        .long1{
          animation: alive3 10s infinite;
          opacity: 1;
        }
        .long2 {
          animation: alive4 10s infinite;
          opacity: 1;
        }
      }
    }
  }
  @keyframes alive3 {
    0% {
      stroke-dasharray: 1225;
      fill: none;
      stroke: #FFF;
      stroke-dashoffset: -1225;
    }
    65% {
      fill: none;
    }
    70% {
      stroke-dasharray: 1225;
      stroke-dashoffset: 0;
      fill: #FFF;
      stroke: #FFF;
    }
    100% {
      stroke-dasharray: 1225;
      stroke-dashoffset: 0;
      fill: #FFF;
      stroke: #FFF;
    }
  }
  @keyframes alive4 {
    0% {
      stroke-dasharray: 1911;
      fill: none;
      stroke: #FFF;
      stroke-dashoffset: -1911;
    }
    65% {
      fill: none;
    }
    70% {
      stroke-dasharray: 1911;
      fill: #FFF;
      stroke: #FFF;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 1911;
      fill: #FFF;
      stroke: #FFF;
      stroke-dashoffset: 0;
    }
  }
</style>

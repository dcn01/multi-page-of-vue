<template xmlns="http://www.w3.org/1999/html">
  <transition name="fade">
    <div class="page-index">
      <div class="logo"></div>
      <transition v-for="key in count" name="roateRight">
        <img v-show="!init" class="text init" :src="images[key - 1]" :style="`left: ${100 + 110 * (key- 1)}px`"></img>
      </transition>
    </div>
  </transition>
</template>
<script>
  import 'src/common/css/index.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';
  // import Fingerprint from 'fingerprintjs';// eslint-disabled-line

  export default {
    name: 'Index',
    data() {
      return {
        navSelected: 'index',
        history: [],
        init: true,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        images: [
          require('./images/text01.png'), // eslint-disable-line
          require('./images/text02.png'), // eslint-disable-line
          require('./images/text03.png'), // eslint-disable-line
          require('./images/text04.png'), // eslint-disable-line
          require('./images/text05.png'), // eslint-disable-line
          require('./images/text06.png'), // eslint-disable-line
          require('./images/text07.png'), // eslint-disable-line
          require('./images/text08.png'), // eslint-disable-line
          require('./images/text09.png'), // eslint-disable-line
        ],
      };
    },
    created() {
      setTimeout(() => {
        this.init = false;
      }, 100);
      util.init();
      // window.wilddog.initializeApp({
      //   syncURL: 'https://ws2016.wilddogio.com',
      // });
      // const queryIndex = window.wilddog.sync().ref('index');
      // queryIndex.on('value', snapshot => {
      //   this.isLoading = false;
      //   const indexData = snapshot.val();
      //   this.sliders = indexData.sliders;
      //   this.categorys = indexData.categorys;
      //   this.hotProducts = indexData.hotProducts;
      //   this.navigation = indexData.navigation;
      //   this.active = indexData.active;
      //   this.background = indexData.background;
      // });
      // const queryUser = window.wilddog.sync().ref(`users/${this.fingerprint}`);
      // queryUser.on('value', snapshot => {
      //   this.history = snapshot.val() || [];
      // });
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
      gotoProduct() {
        // this.history = this.history.filter(item => item.title !== product.title);
        // console.log(this.history);
        // this.history.push(product);
        // window.wilddog.sync().ref('users').child(this.fingerprint).set(this.history);
        // location.href = product.href || '';
      },
      gotoUrl(url) {
        location.href = url;
      },
    },
  };
</script>
<style>
  html,body {
    background: #fff!important;
  }
  .page-index {
    width: 1200px;
    min-height: 800px;
    position: absolute 0 0 0 0;
    margin: auto;
    .logo {
       position: absolute;
       background: url('images/logo.png') no-repeat;
       size: 234px 122px;
    }
    .text {
      position: absolute;
      size: 100px 100px;
      background-size: cover;
      top: 400px;
      left: 150px;
      border: 0;
      border-radius: 9999px;
    }

  }
  /* roateRight */
  @keyframes roateRight-enter {
    from {
      transform: translate3d(-900%, 0, 0) rotate(0);
      border: 1Px solid #02abe9;
    }
    to {
      transform: translate3d(0, 0, 0) rotate(360deg);
      border: 1Px solid #02abe9;
    }
  }
  .roateRight-enter-active {
    animation: roateRight-enter 1s ease-in;
  }

  @keyframes roateRight-leave {
    from {
      transform: translate3d(0, 0, 0) rotate(0);
      border: 1Px solid #02abe9;
    }
    to {
      transform: translate3d(-900%, 0, 0) rotate(360deg);
      border: 1Px solid #02abe9;
    }
  }
  .roateRight-leave-active {
    animation: roateRight-leave 1s ease-out;
  }
</style>

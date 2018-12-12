<template>
  <div class="css-shape">
    <transition name="fade">
      <div class="shape"></div>
    </transition>
  </div>
</template>
<script>
  import 'src/common/css/index.css';
  import util from 'src/common/js/util.js';

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
      setTimeout(() => {
        this.init = false;
      }, 100);
      util.init();
    },
    mounted() {
      this.starsSky(this.startCount);
    },
    methods: {
    },
  };
</script>
<style>
</style>

<template>
  <div id="wrapper" v-show="percent != 100">
    <div :class="`loader-container ${percent > 0 ? 'run' : ''}  ${percent === 100 ? 'done' : ''}`">
      <div class="meter">{{percent}}</div>
      <span class="runner"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loaded'],
  data() {
    return {
      loading: false,
      percent: 0,
    };
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.percent === 100) {
        setTimeout(() => {
          this.init = true;
        }, 10);
        clearInterval(interval);
        this.loaded(false);
        return;
      }
      this.percent += 1;
    }, 20);
  },
  methods: {
  },
};
</script>
<style>
  #wrapper {
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    background: transparent url('images/loading-bg.png') repeat;
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
      animation: loader 2s linear;
    }
    .meter {
      position: absolute;
      top: 0;
      left: 80px;
      width: 40px;
      font-size: 20px;
      margin-top: .3em;
      color: #ff0000;
      animation: meter 2s linear;
      text-shadow: 0 -1px 0 #333333;
    }
    .meter:after {
      content: "%";
    }
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
</style>

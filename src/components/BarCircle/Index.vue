<template>
  <div :class="`barcircle ${barClose ? 'close dark' : ''}`" @click="handle()">
    <div class="top"></div>
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">              
        <path class="circle" fill="none" stroke-width="2" stroke-miterlimit="10" d="M16,32h32c0,0,11.723-0.306,10.75-11c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"></path>
      </svg>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'BarCircle',
  props: ['onTouch'],
  data() {
    return {
      barClose: false,
    };
  },
  methods: {
    handle() {
      this.barClose = !this.barClose;
      this.onTouch(this.barClose);
    },
  },
};
</script>
<style>
  .barcircle {
    float: left;
    cursor: pointer;
    position: relative;
    display: block;
    width: 68px;
    height: 68px;
    user-select: none;
    margin: 10px;
    transform: scale(0.8);
    .bottom,.top {
      background: #fff;
      position: absolute;
      display: block;
      height: 2px;
      width: 36px;
      border-radius: 1px;
      transform-origin: 34px 2px;
      transform: rotate(0deg);
      transition: all 500ms cubic-bezier(0.8,-1.1,.5,1.9);
    }
    .top {
      top: 20px;
      left: 14px;
    }
    .bottom {
      top: 43px;
      left: 14px;
    }
    line, path {
      stroke: #fff;
      stroke-linecap: round;
    }
    .circle {
      display: inline-block;
      border-radius: 50px;
      vertical-align: middle;
      margin: 0 5px;
      stroke-dasharray: 1 100 32 300;
      stroke-dashoffset: 101;
      transition: all 750ms ease;
    }

    &.close {
      .top {
        transform: translateX(-4.5px) rotate(-45deg);
      }
      .bottom {
        transform: translateX(-4.5px) rotate(45deg);
      }
      .circle {
        stroke-dasharray: 1 100 190 300;
        stroke-dashoffset: 1;
      }
    }

    &.dark {
      .bottom, .top {
        background: #333;
      }
      line, path {
        stroke: #333;
      }
    }
  }
</style>

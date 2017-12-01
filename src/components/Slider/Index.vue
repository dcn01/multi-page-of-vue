<template>
  <div class="swiper">
    <div ref="swiper" class="swiper-wapper" :style="{height: height ? (height*window.screen.width/375 + 'px') : ''}">
      <div 
        :style="{height: height ? (height*window.screen.width/375 + 'px') : ''}"
        v-for="item,idx in data" 
        v-if="idx < 3"  
        class="swiper-item">
        <img :src="item.image"></img>
      </div>
    </div>
    <div class="swiper-dots">
      <div v-for="item,idx in dataSource" :class="`swiper-dot ${index == idx ? 'active' : ''}`"></div>
    </div>
  </div>
</template>

<script>
/*
 * swiper based on Vue2.0
 *   props:
 *     dataSource: [
 *       { image: 'xxxx.jpg', onClick: () => { // do someting }},
 *       { image: 'xxxx.jpg', onClick: () => { // do someting }}
 *     ]
 *     autoplay: true or false(default)
 *     duration: 3000 (default)
 */
export default {
  name: 'swiper',
  props: ['dataSource', 'autoplay', 'duration', 'height'],
  data() {
    return {
      loading: false,
      percent: 0,
      index: 0,
      data: [],
    };
  },
  mounted() {
    const swiper = this.$refs.swiper;
    let olderX;
    let startX;
    let moveEndX;
    let X;
    this.screenWidth = window.screen.width;
    let startTime;
    let endTime;
    let rate;
    const data = [...this.dataSource];
    this.data = data;
    if (this.autoplay) {
      this.autorun();
    }
    if (data.length === 1) {
      data.push(data[0]);
      data.push(data[0]);
    } else if (data.length === 2) {
      data.splice(0, 0, data[1]);
      data.push(data[1]);
    } else {
      data.splice(0, 0, data.pop());
    }
    swiper.addEventListener('touchstart', e => {
      clearInterval(this.interval);
      e.preventDefault();
      startTime = new Date().getTime();
      startX = e.touches[0].pageX;
      olderX = swiper.style.transform ? swiper.style.transform.replace(/translateX\((-?\w+)px\)/, '$1') : 0;
    }, false);

    swiper.addEventListener('touchmove', e => {
      e.preventDefault();
      moveEndX = e.changedTouches[0].pageX;
      X = moveEndX - startX;
      swiper.style.transform = `translateX(${(X) + parseFloat(olderX)}px)`;
    }, false);

    swiper.addEventListener('touchend', e => {
      e.preventDefault();
      endTime = new Date().getTime();
      moveEndX = e.changedTouches[0].pageX;
      X = moveEndX - startX;
      if (X === 0) {
        this.dataSource[this.index].onClick && this.dataSource[this.index].onClick();
        if (this.dataSource[this.index].href) {
          window.location.href = this.dataSource[this.index].href;
        }
        return;
      }
      rate = 8;
      const time = endTime - startTime;
      if (time > 400) {
        rate = 3;
      }
      if (Math.abs(X) > (this.screenWidth / rate)) {
        if (X > 0) {
          this.leftHandle(swiper, olderX, time);
        } else {
          this.rightHandle(swiper, olderX, time);
        }
      } else {
        swiper.style.transform = `translateX(${parseFloat(olderX)}px)`;
        swiper.style.transition = 'all .2s ease';
      }
    }, false);
  },
  updated() {
  },
  methods: {
    leftHandle(swiper, olderX, time) {
      if (this.index === 0) {
        this.index = this.dataSource.length - 1;
      } else {
        this.index -= 1;
      }
      swiper.style.transform = `translateX(${this.screenWidth + parseFloat(olderX)}px)`;
      swiper.style.transition = 'all .3s linear';
      setTimeout(() => {
        this.data.splice(0, 0, this.data.pop());
        swiper.style.transform = 'translateX(0px)';
        swiper.style.transition = '';
        if (this.autoplay) {
          clearInterval(this.interval);
          if (this.autoplay) {
            this.autorun();
          }
        }
      }, time < 200 ? time : 200);
    },
    rightHandle(swiper, olderX, time) {
      if (this.index === this.dataSource.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
      swiper.style.transform = `translateX(${parseFloat(olderX) - this.screenWidth}px)`;
      swiper.style.transition = 'all .3s ease';
      setTimeout(() => {
        this.data.push(this.data.shift());
        swiper.style.transform = 'translateX(0px)';
        swiper.style.transition = '';
        if (this.autoplay) {
          clearInterval(this.interval);
          if (this.autoplay) {
            this.autorun();
          }
        }
      }, time < 200 ? time : 200);
    },
    autorun() {
      this.interval = setInterval(() => {
        const orgX = this.$refs.swiper.style.transform ? this.$refs.swiper.style.transform.replace(/translateX\((-?\w+)px\)/, '$1') : 0;
        this.rightHandle(this.$refs.swiper, orgX, 0);
      }, this.duration || 3000);
    },
  },
};
</script>
<style>
.swiper {
  position: relative;
  overflow: hidden;
  width: 100%;
  .swiper-wapper {
    min-height: 110px;
    .swiper-item {
      position: absolute;
      width: 100%;
      height: 110px;
      padding: 0 10px;
      text-align: center;
      img {
        background: repeating-linear-gradient(to right, blue , #ff1848 50%, blue 100%);
        size: 100% 100%;
      }
      &:first-child {
        transform: translateX(-100%);
      }
      &:last-child {
        transform: translateX(100%);
      }
    }
  }
  .swiper-dots {
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    bottom: 0;
    text-align: center;
    .swiper-dot {
      width: 10px;
      height: 2px;
      background: #fff;
      opacity: .5;
      display: inline-block;
      margin-right: 3px;
      &:first-child {
        margin-left: 3px;
      }
      &.active {
        opacity: 1;
      }
    }
  }
}
</style>

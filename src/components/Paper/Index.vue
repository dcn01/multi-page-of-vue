<template>
  <div class="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
    <a href="javaScript:;">{{title}}</a>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['title'],
  data() {
    return {
      loading: false,
      percent: 0,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style>
  .wrapper{
    font-size: 14px;
    margin:0 auto;
    width:100%;
    min-height:300px;
    background-color: #36b11d;
    border-radius: 10px;
    font-family: monoca,"微软雅黑",sans-serif;
    text-align: center;
    /*父包含块*/
    position: relative;
    .content {
      padding: 60px 30px;
      min-height:200px;
      color:#f5f5f5;
      font-size:13px;
      line-height: 20px;
      /*文字换行*/
      word-wrap: break-word;
      word-break: break-all;
      text-align: left;
      /*内容块绝对居中*/
      
      /*文字增加阴影稍微有立体感一些*/
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }
    &:after{
      /*设置折角实现的位置;*/
      position: absolute;
      right:0;
      top: 0;
      width:0;
      content:"";
      display: block;
      /*通过调整大小来控制折角的大小*/
      border: 40px solid #7201aa;
      border-color: transparent transparent rgba(0, 255, 0, 0.2) rgba(0, 220, 0, 0.2)  ;
      background-color: #fff;
      /*设置元素的阴影效果*/
      box-shadow:-2px 3px 1px rgba(0, 0, 0, 0.5) ;
    }

    & > a {
      display: block;
      width:100px;
      line-height: 20px;
      text-align: center;
      font-size:14px;
      color:#2b2b2b;
      text-decoration: none;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
      transform: rotate(45deg);
      position: absolute;
      right: 0px;
      top: 38px;
      z-index: 50;
    }
  }
</style>

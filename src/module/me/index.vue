<template>
  <div id="page-me">
    <div id="header">
      <div id="header-inner">
        <img id="logo" v-lazy="require('./images/long01.png')"/>
        <div id="title">
          <img src="./images/title-index.png" class="title-logo"/>
          <img src="./images/title-archive.png" class="title-logo"/>
          <img src="./images/title-album.png" class="title-logo"/>
          <img src="./images/title-friendchain.png" class="title-logo"/>
          <img src="./images/title-works.png" class="title-logo"/>
          <img src="./images/title-about.png" class="title-logo"/>
        </div>
      </div>
    </div>
    <div id="body">
      <div id="body-left">
        <img v-lazy="require('./images/qrcode.png')" id="qrcode" border="1">
        <img src="./images/menu.png" id="menu">
        <div class="menu-id">ID：浮云惊龙 - CarryGu</div>
        <div class="menu-hobby">画画、游戏、上网、旅游</div>
        <div class="menu-email">Email：carry8712@163.com</div>
        <div class="menu-rule">免责：本站文章内容原创，素材资源来自网络，如有侵权请通知修改，将不负任何法律责任。</div>
      </div>
      <div id="body-right">
        <div class="row">
          <div class="row-title">快乐人生</div>
          <div class="split"></div>
          <div class="update-time">二零零九年十一月七日;农历九月二十一,立冬,六点五十一分</div>
          <img class="illustration" v-lazy="require('./images/mlbsfd.jpg')"></img>
          <div class="summary">
            <span class="fword">
              快
            </span>
            乐人生的十个要点: 1、脾气小一点。2、心情好一点。3、嘴巴甜一点。4、脑袋活一点。5、行动快一点。6、效率高一点。7、胆子大一点。8、理由少一点。9、运动多一点。10、身体好一点。
          </div>
          <div class="flag-wrapper">
            <div class="flag">
              Post By: CarryGu  In: 猿份.随笔
            </div>
            <div class="flag-shadow-left"></div>
            <div class="flag-shadow-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'src/common/css/index.css';

  export default {
    name: 'Index',
    data() {
      return {
        history: [],
        init: true,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        type: 'all',
      };
    },
  };
</script>
<style>
  #page-me {
    text-align: center;
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
  #header {
    background: #fff;
  }
  #header-inner {
    size: 100% 280px;
    position: relative;
    border-bottom: 1px solid #eee;
    box-shadow: 0 3px 5px 5px #f3f3f3;
  }
  .title-logo {
    size: 100px;
    display: inline-block;
    margin-right: 80px;
    cursor: url(./images/favicon.ico), auto;
    &:nth-child(4) {
      margin-left: 160px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  #logo, #title {
    size: 150px auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  #title {
    size: 1200px 100px;
    top: 100px;
    text-align: left;
  }
  #body {
    background: #eee;
    width: 1600px;
    min-height: 3080px;
    border-radius: 25px;
    display: inline-block;
    margin: 100px 0;
    box-shadow: 0 0 5px 6px #eee;
    background: linear-gradient(to right, #d6d6d6 0%, #fff 100%);
    position: relative;
    &:before {
      content: ' ';
      display: block;
      width: 2px;
      box-shadow: 0 2px 2px #d6d6d6;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 500px;
    }
  }
  #body-left {
    box-shadow: 0 0 10px #fff inset;
    position: absolute 2px 2px;
    width: 496px;
    text-align: left;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-image: linear-gradient(45deg, #fff 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 10px 10px;
    .menu-id, .menu-hobby, .menu-email, .menu-rule {
      padding: 0 50px;
      text-align: left;
      font-size: 16px;
      line-height: 32px;
      color: #fff;
      font-weight: bolder;
      text-shadow: 2px 2px 2px #483d24;
    }
  }
  #body-right {
    position: absolute 2px 2px 2px 502px;
    width: 1096px;
    background-image: linear-gradient(45deg, #fff 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 10px 10px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 0 0 10px 5px #fff inset;
    .row {
      padding: 50px 30px;
      .row-title {
        color: #fff;
        margin-top: 10px;
        font-size: 36px;
        text-shadow: 2px 2px 2px #483d24;
        font-weight: bolder;
        margin-bottom: 50px;
      }
      .split {
        margin-top: 20px;
        size: 100% 1px;
        background-image: linear-gradient(to right,
          transparent 0%, transparent 20%,
          #d6d6d6 30%, #d6d6d6 40%,
          transparent 41%,
          transparent 59%,
          #d6d6d6 60%, #d6d6d6 70%, 
          transparent 80%, transparent 100%);
        &:before {
          content: '';
          background: url('./images/split.png') no-repeat;
          display: inline-block;
          size: 75px 19.9px;
          background-size: cover;
          transform: translateY(-10px);
        }
        &:after {
          content: '';
          background: url('./images/split.png') no-repeat;
          display: inline-block;
          size: 75px 19.9px;
          background-size: cover;
          transform: translateY(-10px) rotateY(180deg);
        }
      }
      .update-time {
        font-weight: bolder;
        font-size: 18px;
        color: #ea6b7f;
        margin: 50px 0;
      }
      .flag-wrapper {
        display: inline-block;
        size: 600px 60px;
        position: relative;
        .flag {
          size: 100%;
          background: #fff;
          border-radius: 30px;
          border: 1px solid #ddd;
          position: relative;
          z-index: 2;
          line-height: 60px;
          color: #caa2a2;
        }
        .flag-shadow-left, .flag-shadow-right {
          size: 300px 20px;
          background: #848484;
          position: absolute;
          top: 33px;
          left: 20px;
          box-shadow: 1px 1px 5px 10px #848484;
          border-radius: 2px;
          transform: rotate(-4deg);
          z-index: 1;
        }
        .flag-shadow-right {
          left: auto;
          right: 20px;
          transform: rotate(4deg);
        }
      }
      .illustration {
        border: 10px solid #fff;
        size: 100% auto;
        min-height: 635px;
      }
      .summary {
        text-align: left;
        margin-bottom: 50px;
        .fword {
          font-family: "Droid Serif", Georgia, "Times New Roman", Times, serif;
          color: #980d01;
          font-size: 80px;
          font-weight: 600;
          margin-right: 0.2em;
          float: left;
        }
      }
    }
  }
  #qrcode {
    size: 200px;
    margin-top: 50px;
    border-style: solid;
    border-color: #c6d5de;
    margin-left: 50px;
  }
  #menu {
    size: 200px 70px;
    margin-left: 50px;
  }
</style>

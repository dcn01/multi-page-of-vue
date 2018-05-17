const Util = {};
(function (util) {
  const ua = window && window.navigator && window.navigator.userAgent.toLowerCase();
  const inWeChat = ua && ua.indexOf('micromessenger') > 0;
  const inFireFox = ua && ua.indexOf('firefox') > 0;
  const inIOS = ua && /(iphone|ipad|ipod|ios)/i.test(ua);
  const getCookie = name => {
    const cookieStr = document.cookie;
    if (cookieStr.length > 0) {
      const cookieArr = cookieStr.split('; '); // 将cookie信息转换成数组
      for (let i = 0; i < cookieArr.length; i += 1) {
        const cookieVal = cookieArr[i].split('='); // 将每一组cookie(cookie名和值)也转换成数组
        if (cookieVal[0] === name) {
          if (cookieVal[1]) {
            return cookieVal[1].replace(/"/g, ''); // 返回需要提取的cookie值
          }
          return '';
        }
      }
    }
  };
  const setCookie = (name, value, days) => {
    let newCookieStr;
    if (days) {
      const exp = new Date();
      exp.setTime(exp.getTime() + (days * 24 * 60 * 60 * 1000));
      newCookieStr = `${name}=${escape(value)}; path=/; domain=.hdfax.com; expires=${exp.toUTCString()}`;
    } else {
      newCookieStr = `${name}=${escape(value)}; path=/; domain=.hdfax.com`;
    }
    document.cookie = newCookieStr;
  };
  const getURLParam = name => {
    const search = window.document.location.search;
    const pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g"); // eslint-disable-line
    const matcher = pattern.exec(search);
    let items = null;
    if (matcher != null) {
      try {
        items = decodeURIComponent(decodeURIComponent(matcher[1]));
      } catch (e) { // eslint-disable-line
        try {
          items = decodeURIComponent(matcher[1]);
        } catch (e) { // eslint-disable-line
          items = matcher[1];
        }
      }
    }
    return items;
  };
  const transferRem = () => {
    /* this is the foundation of the rem layout */
    const docEl = document.documentElement;
    const clientWidth = docEl.clientWidth;
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const recalc = function () {
      if (clientWidth === undefined) return;
      if (clientWidth > 414) {
        docEl.style.fontSize = `${20 * (clientWidth / 1366)}px`;
        // docEl.style.fontSize = '20px';
        return;
      }
      docEl.style.fontSize = `${20 * (clientWidth / 375)}px`;
    };
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
  };
  const tongji = () => {
    /* baidu tongji */
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?e069502f0b254a7b12cc3daefd9d70f0';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  };

  /* cookie setting */
  util.getCookie = getCookie;
  util.setCookie = setCookie;
  /* useragint */
  util.ua = {
    inWeChat,
    inFireFox,
    inIOS,
  };
  /* iscroll 跳转指定位置 */
  util.scrollTo = (x) => {
    document.querySelector('.scroll').scrollTop = x;
  };
  util.getURLParam = getURLParam;
  util.transferRem = transferRem;
  util.tongji = tongji;
  util.init = () => {
    transferRem();
    tongji();
  };
}(Util));

export default Util;

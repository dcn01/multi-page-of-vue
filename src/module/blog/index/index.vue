<template>
  <transition name="fade">
    <div class="page-index">
      <transition name="moveDown">
        <div v-show="!init" id="nav">
          <div id="logo" class="logo" @click="page = 'index'"></div>
          <div id="header" class="header">
            <div :class="`href STEPS ${page == 'steps' ? 'active' : ''}`" @click="page = 'steps'"></div>
            <div :class="`href BRANDS ${page == 'brands' ? 'active' : ''}`" @click="page = 'brands'"></div>
            <div :class="`href RESOURCE ${page == 'resource' ? 'active' : ''}`" @click="page = 'resource'"></div>
            <div :class="`href CAREERS ${page == 'careers' ? 'active' : ''}`" @click="page = 'careers'"></div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div id="index" class="index" v-show="!init && page == 'index'">
          <div class="row">
            <div class="content1">
              <img class="hidden" src="./images/steps.jpg" alt="">
              <img class="show" src="./images/steps-gray.jpg" alt="">
              <div class="title">STEPS</div>
            </div>
            <div class="content2">
              <div class="brands-entry"></div>
            </div>
          </div>
          <div class="row">
            <div class="content3">
              <img class="hidden" src="./images/border.jpg" alt="">
              <img class="show" src="./images/border2.jpg" alt="">
              <div class="title">表格边框你知道多少</div>
            </div>
            <div class="column content456">
              <div class="row content45">
                <div class="content4">
                  <img class="hidden" src="./images/artificialIntelligence.jpg" alt="">
                  <img class="show" src="./images/artificialIntelligence-gray.jpg" alt="">
                  <div class="title">人工智能路在何方</div>
                </div>
                <div class="content5">
                  <img class="hidden" src="./images/justdoit.jpg" alt="">
                  <img class="show" src="./images/justdoit-gray.jpg" alt="">
                </div>
              </div>
              <div class="content6">
                <img class="hidden" src="./images/timg.jpg" alt="">
                <img class="show" src="./images/timg-gray.jpg" alt="">
                <div class="title">未来究竟会怎样</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="content7">
              <img class="hidden" src="./images/resources.jpg" alt="">
              <img class="show" src="./images/resources-gray.jpg" alt="">
              <div class="title">What did we do?</div>
            </div>
            <div class="column content89">
              <div class="content8">
                <img class="hidden" src="./images/movement.jpg" alt="">
                <img class="show" src="./images/movement-gray.jpg" alt="">
                <div class="title">生命不息</div>
              </div>
              <div class="content9">
                <img class="hidden" src="./images/joinus1.jpg" alt="">
                <img class="show" src="./images/joinus.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div id="steps" class="steps" v-show="!init && page == 'steps'">
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
        </div>
      </transition>
      <transition name="fade">
        <div class="resource" v-show="!init && page == 'resource'">
          <div class="name" id="resourceName">
            <div :class="`cell ${type == 'all' ? 'active' : ''}`" @click="type = 'all'">组件</div>
            <div :class="`cell ${type == 'button' ? 'active' : ''}`" @click="type = 'button'">Button</div>
            <div :class="`cell ${type == 'cell' ? 'active' : ''}`" @click="type = 'cell'">Cell</div>
            <div :class="`cell ${type == 'toast' ? 'active' : ''}`" @click="type = 'toast'">Toast</div>
            <div :class="`cell ${type == 'messageBox' ? 'active' : ''}`" @click="type = 'messageBox'">MessageBox</div>
            <div :class="`cell ${type == 'infiniteScroll' ? 'active' : ''}`" @click="type = 'infiniteScroll'">InfiniteScroll</div>
            <div :class="`cell ${type == 'swiper' ? 'active' : ''}`" @click="type = 'swiper'">Swiper</div>
          </div>
          <div class="desc">
            <div v-if="type == 'all'">
              <div class="title">eif-mobile-ui</div>
              <div class="subtitle">mobile ui based on vue2.0.</div>
              <div class="example">
                <div class="description">Install</div>
                <div class="subtitle">It is so easy to install.</div>
                <div class="example-content">
                  <p>npm install eif-mobile-ui</p>
                  <p>import Vue from 'vue';</p>
                  <p>import install from 'eif-mobile-ui';</p>
                  <p>Vue.use(install);</p>
                </div>
              </div>
            </div>
            <div v-if="type == 'button'">
              <div class="title">Button</div>
              <div class="subtitle">Buttons with configurable type, size and customized icons.</div>
              <div class="example">
                <div class="description">Example</div>
                <div class="example-title">Configure color</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">type</span>=
                    <span class="hdjs-string">"default"</span>&gt;
                  </span>default
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">type</span>=
                    <span class="hdjs-string">"primary"</span>&gt;
                  </span>primary
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span> 
                    <span class="hdjs-attr">type</span>=
                    <span class="hdjs-string">"danger"</span>&gt;
                  </span>danger
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span>
                </div>
                <div class="example-title">Configure size</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">size</span>=
                    <span class="hdjs-string">"small"</span>&gt;
                  </span>small
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">size</span>=
                    <span class="hdjs-string">"large"</span>&gt;
                  </span>large
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span> 
                    <span class="hdjs-attr">size</span>=
                    <span class="hdjs-string">"normal"</span>&gt;
                  </span>normal
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span>
                </div>
                <div class="example-title">Disabled</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">disabled</span>&gt;
                  </span>disabled
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span>
                </div>
                <div class="example-title">Ghost button</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-button</span>
                    <span class="hdjs-attr">plain</span>&gt;
                  </span>plain
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-button</span>&gt;
                  </span>
                </div>
              </div>
            </div>
            <div v-if="type == 'cell'">
              <div class="title">Cell</div>
              <div class="subtitle">A cell to display list, link or form.</div>
              <div class="example">
                <div class="description">Example</div>
                <div class="example-title">Basic usage</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span>&gt;
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span>
                    <span class="hdjs-attr">value</span>=
                    <span class="hdjs-string">"我是说明文字"</span>&gt;
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
                <div class="example-title">Clickable link</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span></br>&nbsp;&nbsp;
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span></br>&nbsp;&nbsp;
                    <span class="hdjs-attr">to</span>=
                    <span class="hdjs-string">"xxx.com"</span></br>&nbsp;&nbsp;
                    <span class="hdjs-attr">is-link</span></br>&nbsp;&nbsp;
                    <span class="hdjs-attr">value</span>=
                    <span class="hdjs-string">"我是说明文字"</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
                <div class="example-title">With icon</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span>
                    <span class="hdjs-attr">icon</span>=
                    <span class="hdjs-string">"more"</span>
                    <span class="hdjs-attr">value</span>=
                    <span class="hdjs-string">"我是说明文字"</span>&gt;
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
                <div class="example-title">With custom icon</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span>
                    <span class="hdjs-attr">value</span>=
                    <span class="hdjs-string">"自定义图片"</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&nbsp;&nbsp;&lt;
                    <span class="hdjs-name">img</span>
                    <span class="hdjs-attr">slot</span>=
                    <span class="hdjs-string">"icon"</span>
                    <span class="hdjs-attr">src</span>=
                    <span class="hdjs-string">"xx.png"</span>
                    <span class="hdjs-attr">width</span>=
                    <span class="hdjs-string">"24"</span>
                    <span class="hdjs-attr">height</span>=
                    <span class="hdjs-string">"24"</span>&gt;</br>
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
                <div class="example-title">Custom content</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"title"</span>&gt;
                  </span></br>
                  <span class="hdjs-tag">&nbsp;&nbsp;&lt;
                    <span class="hdjs-name">span</span>
                    <span class="hdjs-attr">style</span>=
                    <span class="hdjs-string">"color: green"</span>&gt;
                    这里是元素
                    <span class="hdjs-tag">&lt;/
                      <span class="hdjs-name">span</span>&gt;
                    </span>
                    </br>
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
                <div class="example-title">With description</div>
                <div class="example-content">
                  <span class="hdjs-tag">&lt;
                    <span class="hdjs-name">h-cell</span>
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是标题"</span>&gt;
                    <span class="hdjs-attr">title</span>=
                    <span class="hdjs-string">"我是描述文字"</span>&gt;
                  </span>
                  <span class="hdjs-tag">&lt;/
                    <span class="hdjs-name">h-cell</span>&gt;
                  </span>
                </div>
              </div>
            </div>
            <div v-if="type == 'toast'">
              <div class="title">Toast</div>
              <div class="subtitle">A brief toast box. Custom location, duration and style supported.</div>
              <div class="example">
                <div class="description">Example</div>
                <div class="example-title">Basic usage</div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-string">$toast</span>
                    <span class="hdjs-attr">('弹出Toast成功!');</span>
                  </span>
                </div>
                <div class="example-title">set icon class</div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-string">$toast</span>
                    <span class="hdjs-attr">({</span><br>
                    &nbsp;&nbsp;<span class="hdjs-string">message</span><span class="hdjs-attr">:'又弹出Toast成功!',</span><br>
                    &nbsp;&nbsp;<span class="hdjs-string">iconClass</span><span class="hdjs-attr">:'icon icon-success',</span><br>
                    <span class="hdjs-attr">});</span>
                  </span>
                </div>
              </div>
            </div>
            <div v-if="type == 'messageBox'">
              <div class="title">Toast</div>
              <div class="subtitle">A popup message box with multiple interacting forms.</div>
              <div class="example">
                <div class="description">Example</div>
                <div class="example-title">Alert</div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-attr">$messageBox</span>
                    <span class="hdjs-attr">.</span>
                    <span class="hdjs-attr">alert</span>
                    <span class="hdjs-attr">(</span>
                    <span class="hdjs-string">message</span>
                    <span class="hdjs-attr">, </span>
                    <span class="hdjs-string">title</span>
                    <span class="hdjs-attr">)</span><br>
                  </span>
                </div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-attr">$messageBox</span>
                    <span class="hdjs-attr">.</span>
                    <span class="hdjs-attr">alert</span>
                    <span class="hdjs-attr">(</span>
                    <span class="hdjs-string">message</span>
                    <span class="hdjs-attr">, </span>
                    <span class="hdjs-string">title</span>
                    <span class="hdjs-attr">).then( action=> {</span><br>
                    &nbsp;&nbsp;<span class="hdjs-string">// do something...</span><br>
                    <span class="hdjs-attr">)};</span>
                  </span>
                </div>
                <div class="example-title">Confirm</div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-attr">$messageBox</span>
                    <span class="hdjs-attr">.</span>
                    <span class="hdjs-attr">confirm</span>
                    <span class="hdjs-attr">(</span>
                    <span class="hdjs-string">message</span>
                    <span class="hdjs-attr">, </span>
                    <span class="hdjs-string">title</span>
                    <span class="hdjs-attr">)</span><br>
                  </span>
                </div>
                <div class="example-content">
                  <span class="hdjs-tag">
                    <span class="hdjs-name">this.</span>
                    <span class="hdjs-attr">$messageBox</span>
                    <span class="hdjs-attr">.</span>
                    <span class="hdjs-attr">confirm</span>
                    <span class="hdjs-attr">(</span>
                    <span class="hdjs-string">message</span>
                    <span class="hdjs-attr">, </span>
                    <span class="hdjs-string">title</span>
                    <span class="hdjs-attr">).then( action=> {</span><br>
                    &nbsp;&nbsp;<span class="hdjs-string">// do something...</span><br>
                    <span class="hdjs-attr">)};</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="sample" id="resourceSample">
            <iframe v-if="type == 'all'" src="/blog/ui.html?type=all" frameborder="0" scrolling="no" class="demo-page"></iframe>
            <iframe v-if="type == 'button'" src="/blog/ui.html?type=button" frameborder="0" scrolling="yes" class="demo-page"></iframe>
            <iframe v-if="type == 'cell'" src="/blog/ui.html?type=cell" frameborder="0" scrolling="yes" class="demo-page"></iframe>
            <iframe v-if="type == 'toast'" src="/blog/ui.html?type=toast" frameborder="0" scrolling="yes" class="demo-page"></iframe>
            <iframe v-if="type == 'messageBox'" src="/blog/ui.html?type=messageBox" frameborder="0" scrolling="no" class="demo-page"></iframe>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  import 'src/common/css/index.css';
  import 'src/common/css/blog.css';
  import util from 'src/common/js/util.js';
  import slider from 'src/components/Slider/Index.vue';
  // import Fingerprint from 'fingerprintjs';// eslint-disabled-line

  export default {
    name: 'Index',
    data() {
      return {
        history: [],
        init: true,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        page: util.getURLParam('page') || 'index',
        type: 'all',
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
      setTimeout(() => {
        const height = document.getElementById('nav').offsetHeight - 2;
        document.addEventListener('scroll', () => {
          const scrollTop = document.documentElement.scrollTop;
          const nav = document.getElementById('nav');
          const logoHeight = document.getElementById('logo').offsetHeight;
          if (scrollTop >= 0 && scrollTop <= (height - logoHeight)) {
            nav.style.height = `${height - scrollTop}px`;
            document.getElementById('logo').style.height = null;
            document.getElementById('header').style.height = null;
          } else if (scrollTop > (height - logoHeight) && scrollTop <= height) {
            nav.style.height = `${logoHeight}px`;
            document.getElementById('logo').style.height = null;
            document.getElementById('header').style.height = null;
          } else if (scrollTop > height) {
            nav.style.height = '0px';
            document.getElementById('logo').style.height = '0px';
            document.getElementById('header').style.height = '0px';
          } else {
            document.getElementById('logo').style.height = null;
            document.getElementById('header').style.height = null;
            nav.style.height = `${height + 2}px`;
          }
          if (this.page === 'resource') {
            if (scrollTop > height) {
              document.getElementById('resourceName').style.transform = `translateY(${scrollTop - height}px)`;
              document.getElementById('resourceSample').style.transform = `translateY(${scrollTop - height}px)`;
            } else {
              document.getElementById('resourceName').style.transform = '';
              document.getElementById('resourceSample').style.transform = '';
            }
          }
        });
      }, 200);
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
  .page-index {
    width: 1200px;
    min-height: 600px;
    position: absolute 0 0 0 0;
    margin: auto;
    #nav {
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      height: 182px;
      width: 100%;
      transition: all .8s ease-out, opacity .8s ease-out;
      z-index: 3;
      .logo {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        background: url('images/logo.png') no-repeat;
        background-size: cover;
        size: 234px 122px;
        cursor: pointer;
      }
      .header {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        size: 1105px 122px;
        padding: 0 252.5px;
        left: 234px;
        line-height: 122px;
        display: flex;
        .href {
          position: relative;
          flex: 1;
          cursor: pointer;
          color: #747474;
          &:hover:after, &.active:after {
            transform: scaleX(1);
            opacity: 1;
          }
          &:after {
            content: '';
            position: absolute;
            left: 35px;
            width: 80px;
            bottom: 40px;
            background: currentColor;
            height: 2px;
            display: block;
            opacity: 0;
            transform: scaleX(0);
            transition: all .2s cubic-bezier(0.18, 0.89, 0.17, 0.88), opacity .15s ease;
          }
          &.STEPS {
            background: url(images/STEPS.png) no-repeat;
            background-size: cover;
          }
          &.BRANDS {
            background: url(images/BRANDS.png) no-repeat;
            background-size: cover;
            &:after {
              left: 25px;
              width: 100px;
            }
          }
          &.RESOURCE {
            background: url(images/RESOURCE.png) no-repeat;
            background-size: cover;
            &:after {
              left: 10px;
              width: 130px;
            }
          }
          &.CAREERS {
            background: url(images/CAREERS.png) no-repeat;
            background-size: cover;
            &:after {
              left: 20px;
              width: 110px;
            }
          }
        }
      }
    }
    .text {
      position: absolute;
      size: 100px 100px;
      background-size: cover;
      top: 400px;
      left: 150px;
      border: 0;
      border-radius: 9999px;
      opacity: 0;
    }
    .index {
      position: relative;
      z-index: 2;
      width: 100%;
      margin-top: 180px;
      .row {
        display: flex;
      }
      .column {
        display: flex;
        flex-direction: column;
      }
      .content1, .content3, .content4, .content5, .content6, .content7, .content8, .content9 {
        flex: 1;
        height: 800px;
        overflow: hidden;
        cursor: pointer;
        position: relative;
        &:hover {
          .show {
            opacity: 0;
          }
          .hidden {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .hidden {
          opacity: 0;
        }
        .show {
          position: absolute;
          top: 0;
        }
        img {
          size: 100% 100%;
          transition: clip 1.1s cubic-bezier(.19, 1, .22, 1), transform 0.8s ease 167ms, opacity 0.8s ease 167ms, -webkit-clip 1.1s cubic-bezier(.19, 1, .22, 1);
        }
        .title {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
          font-size: 20px;
          color: #fff;
        }
      }
      .content1 {
        flex: 2;
        height: 400px;
        .title {
          color: #fff;
          text-align: right;
          padding: 0 20px;
        }
      }
      .content2 {
        flex: 1;
        height: 400px;
        cursor: pointer;
        position: relative;
        &:hover {
          background: #02abe9;
          .brands-entry {
            background: #02abe9 url('images/brands-white.png') no-repeat center center;
            animation: rock .5s infinite ease-out;
          }
        }
        .brands-entry {
          background: url('images/brands-blue.png') no-repeat center center;
          width: 280px;
          height: 280px;
          position: absolute 0 0 0 0;
          margin: auto;
        }
      }
      .content3 {
        .title {
          color: #333;
        }
      }
      .content456 {
        background: #fff;
        flex: 2;
        height: 800px;
      }
      .content45 {
        background: #fff;
        flex: 1;
        margin-bottom: 1px;
      }
      .content4 {
        flex: 1;
        height: 400px;
      }
      .content5 {
        flex: 1;
        height: 400px;
        margin-left: 1px;
      }
      .content6 {
        background: #fff;
        flex: 1;
        height: 400px;
        margin: 1px 0;
        &:hover {
          .hidden {
            transform: scale(1.5);
          }
        }
      }
      .content7 {
        background: #fff;
        flex: 2;
        height: 800px;
        cursor: pointer;
        .title {
          font-size: 50px;
        }
      }
      .content89 {
        flex: 1;
        height: 800px;
        margin-left: 1px;
      }
      .content8 {
        border-top: 1px;
        background: url('images/movement.jpg') no-repeat;
        background-size: cover;
        flex: 1;
        cursor: pointer;
        position: relative;
        .title {
          position: absolute;
          bottom: 20px;
          width: 100%;
          text-align: center;
          font-size: 20px;
        }
      }
      .content9 {
        margin-top: 1px;
        background: #fff;
        flex: 1;
        cursor: pointer;
      }
    }
    .steps {
      margin-top: 180px;
      .step {
        float: left;
        size: 270px 350px;
        background: #fff;
        margin: 15px;
        border-radius: 3px;
      }
    }
    .resource {
      position: relative;
      z-index: 2;
      width: 100%;
      margin-top: 180px;
      .name {
        position: absolute;
        width: 200px;
        border: 1px solid #e2e2e2;
        border-top: 6px solid #02abe9;
        box-shadow: 2px 2px 2px 1px #f5f6f7;
        .cell {
          size: 200px 40px;
          line-height: 40px;
          text-align: center;
          border-bottom: 1px solid #e2e2e2;
          cursor: pointer;
          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            background-color: #f5f6f6;
          }
          &.active {
            background-color: #f5f6f6;
          }
        }
      }
      .desc {
        position: absolute;
        left: 250px;
        width: 500px;
        margin-bottom: 50px;
        .title {
          font-size: 30px;
          color: #444;
          padding: 20px 0;
        }
        .subtitle {
          font-size: 14px;
          color: #656b79;
          padding: 15px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .example {
          .description {
            padding: 20px 0 5px;
            font-size: 16px;
          }
          .example-title {
            color: #656b79;
            padding: 20px 0;
            font-size: 16px;
          }
          .example-content {
            background-color: #f8f8f8;
            padding: 20px;
            overflow: auto;
          }
        }
      }
      .sample {
        position: absolute;
        left: 800px;
        background-image: url(./images/phone.png);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 792px;
        padding: 100px 16px;
        box-sizing: border-box;
        width: 365px;
        .demo-page {
          width: 100%;
          height: 580px;
          background-color: #fff;
          overflow: hidden;
          margin-right: -15px; 
        }
      }
    }
  }
  .hdjs {
    display: block;
    background: #fff;
    padding: .5em;
    color: #333;
    overflow-x: auto
  }

  .hdjs-comment,.hdjs-meta {
    color: #969896
  }

  .hdjs-emphasis,.hdjs-quote,.hdjs-string,.hdjs-strong,.hdjs-template-variable,.hdjs-variable {
    color: #df5000
  }

  .hdjs-keyword,.hdjs-selector-tag,.hdjs-type {
    color: #a71d5d
  }

  .hdjs-attribute,.hdjs-bullet,.hdjs-literal,.hdjs-symbol {
    color: #0086b3
  }

  .hdjs-name,.hdjs-section {
    color: #63a35c
  }

  .hdjs-tag {
    color: #333
  }

  .hdjs-attr,.hdjs-selector-attr,.hdjs-selector-class,.hdjs-selector-id,.hdjs-selector-pseudo,.hdjs-title {
    color: #795da3
  }

  .hdjs-addition {
    color: #55a532;
    background-color: #eaffea
  }

  .hdjs-deletion {
    color: #bd2c00;
    background-color: #ffecec
  }

  .hdjs-link {
    text-decoration: underline
  }
  /* roateRight */
  @keyframes roateRight-enter {
    10% {
      transform: translate3d(-900%, 0, 0) rotate(0);
      border: 1Px solid #02abe9;
      opacity: 1;
    }
    40% {
      transform: translate3d(0, 0, 0) rotate(360deg);
      border: 1Px solid #02abe9;
      opacity: 1;
    }
    41% {
      transform: translate3d(0, 0, 0) rotate(360deg);
      border: 0;
      opacity: 1;
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(360deg);
      border: 0;
      opacity: 0;
    }
  }
  .roateRight-enter-active {
    animation: roateRight-enter 5s ease-in;
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
    animation: roateRight-leave 3s ease-out;
  }
  /* rock */
  @keyframes rock {
    10% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(360deg);
    }
    31% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(360deg);
    }
    61% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @media screen and (max-width: 414PX) {
    html {
      font-size: 6.30PX!important;
    }
    html, body {
    }
    .page-index {
      #nav {
        height: 250px;
        left: 0;
        .logo {
          size: 412.2px 219.6px; 
        }
        .header {
          display: none;
        }
      }
      .index {
        margin-top: 250px;
        .row, .column, .content456 {
          display: block;
          height: auto;
        }
        .content1, .content2, .content4, .content5, .content6, .content7, .content8, .content9 {
          height: 800px;
          margin-bottom: 1px;
          .title {
            font-size: 80px;
          }
          .hidden {
            opacity: 1;
          }
          .show {
            position: absolute;
            top: 0;
            opacity: 0;
          }
        }
        .content2 {
          background: #02abe9;
          .brands-entry {
            size: 560px 560px;
            background: #02abe9 url('images/brands-white.png') no-repeat center center;
          }
          margin-bottom: 1px;
        }
        .content3 {
          margin-bottom: 1px;
          height:1600px;
          .title {
            font-size: 80px;
          }
          .hidden {
            opacity: 1;
          }
          .show {
            position: absolute;
            top: 0;
            opacity: 0;
          }
        }
      }
    }
  }
</style>

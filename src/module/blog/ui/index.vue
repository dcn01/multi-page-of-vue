<template xmlns="http://www.w3.org/1999/html">
  <div class="ui-toast">
    <div v-if="type == 'button'">
      <div class="title">Button</div>
     <div class="title">Configure color</div>
     <h-button type="default" size="large">default</h-button>
     <h-button type="primary" size="large">primary</h-button>
     <h-button type="danger" size="large">danger</h-button>
     <div class="title">Configure size</div>
     <h-button type="primary" size="small">small</h-button>
     <h-button type="primary" size="large">large</h-button>
     <h-button type="primary" size="normal">nomal</h-button>
     <div class="title">Disabled</div>
     <h-button disabled size="large">disabled</h-button>
     <h-button disabled size="large" plain>disabled</h-button>
     <div class="title">Ghost button</div>
     <h-button type="default" size="large" plain>default</h-button>
     <h-button type="primary" size="large" plain>primary</h-button>
     <h-button type="danger" size="large" plain>danger</h-button>
    </div>
    <div v-if="type == 'cell'">
      <div class="title">Cell</div>
      <h-cell title="我是标题"></h-cell>
      <h-cell title="我是标题" value="我是说明文字"></h-cell>
      <h-cell title="我是标题" to="//www.guxuelong.com" is-link value="我是说明文字"></h-cell>
      <h-cell title="我是标题" icon="more" value="我是说明文字"></h-cell>
      <h-cell title="我是标题" value="自定义图片">
        <img slot="icon" src="./icon.jpg" width="24" height="24">
      </h-cell>
      <h-cell title="我是标题">
        <span style="color: green;">这里是元素</span>
      </h-cell>
      <h-cell title="我是标题" label="我是描述文字"></h-cell>
    </div>
    <div v-if="type == 'messageBox'">
      <div class="title">MessageBox</div>
      <h-button type="primary" size="large" plain @click="openAlert">alert</h-button>
      <h-button type="primary" size="large" plain @click="openConfirm">confirm</h-button>
    </div>
    <div v-if="type == 'toast'">
      <div class="title">Toast</div>
      <h-button type="primary" size="large" plain @click="openToast1">点击弹出Toast</h-button>
      <h-button type="primary" size="large" plain @click="openToast2">再次点击弹出Toast</h-button>
    </div>
  </div>
</template>
<script>
  import util from 'src/common/js/util.js';

  export default {
    name: 'Index',
    data() {
      return {
        type: util.getURLParam('type'),
      };
    },
    methods: {
      openAlert() {
        this.$messagebox.alert('操作成功!', '提示');
      },
      openConfirm() {
        this.$messagebox.confirm('确定执行此操作?', '提示');
      },
      openPrompt() {
        // this.$messagebox.prompt(' ', '请输入姓名').then(({ value }) => {
        //   if (value) {
        //     this.$messagebox.alert(`你的名字是 ${ value }`, '输入成功');
        //   }
        // });
      },
      openToast1() {
        this.$toast('弹出Toast成功!');
      },
      openToast2() {
        this.$toast({
          message: '又弹出Toast成功!',
          iconClass: 'icon icon-success',
        });
      },
    },
  };
</script>
<style>
  .title  {
    text-align: center;
    height: 60px;
    font-size: 20px;
  }
  button {
    margin-bottom: 20px;
  }
</style>

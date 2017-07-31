<template>
  <div id="app">
    <dog-cover icon="paper-plane" info="Loading" :addOn="extend">
      <dog-title icon="comments" info="DOGUI DEMO">
        <dog-search placeholder="搜索框" @change="update"></dog-search>
        <dog-static icon="arrow-right">欢迎浏览 DogUI.
          <br> 这个 demo 是用 Vue.js 的组件构建而成, 包括这段话本身都使用了 dogUI 的组件.
          <br> 随意在这个表单上输入查看 DogUI 的效果吧.
        </dog-static>
        <dog-nav>导航栏</dog-nav>
        <dog-button icon="compass" @click="addNav" size="normal" color="red">添加导航</dog-button>
        <dog-button icon="bell" @click="notification" size="normal" color="blue">调用提醒</dog-button>
        <dog-button icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</dog-button>
        <dog-block icon="pencil" info="输入框">
          <dog-input v-model="name">姓名</dog-input>
          <dog-input v-model="age" type="number">年龄</dog-input>
          <dog-input v-model="email" type="email">邮箱</dog-input>
          <dog-input v-model="tel" type="tel">电话</dog-input>
          <dog-input v-model="password" type="password">密码</dog-input>
          <dog-input v-model="money" type="money">智商的价格</dog-input>
          <dog-input v-model="aDPS" type="date" icon="calendar">有智商的日期</dog-input>
          <dog-textarea v-model="aDDD">测试</dog-textarea>
        </dog-block>
        <dog-info info="INPUT测试">
          这里显示上面输入的信息
          <br> 姓名:{{name}}
          <br> 邮箱: {{email}}
          <br> 密码: {{password}}
          <br> 电话: {{tel}}
          <br> 年龄:{{age}}
          <br> 价格: {{money}}
          <br> 智商:{{aDPS}}
          <br> 大框: {{aDDD}}
        </dog-info>
        <dog-block icon="picture-o" info="图片预览">
          <dog-view :srcs="['http://img.wxcha.com/file/201703/15/af183778a2.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLRZLWsxMIR6_21w9VocPqTRVrI4imZm5TQnnZyXTWXV27HehTxw','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4N_t4snDnVQYkH4-h1_zg5GTMlU9vUcC_ojIC8kPi_sx_MzS6DQ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQyjPmsdY9ozZZBtTdSg_wDDlIMkaVBejDnXPBrhqZOkBA9fPNw','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg','http://img.wxcha.com/file/201703/15/af183778a2.jpg']">长按图片下载</dog-view>
        </dog-block>
        <dog-block icon="camera" info="图片上传">
          <dog-upload icon="bandcamp" quality="40" @change="testf(0, $event)" color="red">没有预览</dog-upload>
          <dog-upload icon="car" quality="40" @change="testf(0, $event)" color="blue" preview="right">有预览</dog-upload>
        </dog-block>
        <dog-block icon="podcast" info="表格框">
          <dog-cell info="Cell">测试Cell</dog-cell>
          <dog-cell info="搜索框:">{{seach}}</dog-cell>
        </dog-block>
        <dog-block icon="rss" info="选择框">
          <dog-select :list="test" v-model="idselect">同步选择1</dog-select>
          <dog-select :list="test" v-model="idselect">同步选择2</dog-select>
          <dog-select :list="test" v-model="idselecttest">预选择1</dog-select>
        </dog-block>
        <dog-info info="SELECT测试">
          这里显示上面选择的内容的ID
          <br> 你选择了:{{idselect}}
          <br> 预选择了:{{idselecttest}}
        </dog-info>
        <dog-button icon="plus" @click="tocheck" size="large" color="red">DOUBLE CHECK</dog-button>
        <dog-credit>放羊</dog-credit>
      </dog-title>
    </dog-cover>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: "一个姓名",
        age: "",
        aDPS: "",
        seach: "",
        email: "",
        money: "",
        tel: "",
        password: "",
        extend: ['qrcode'],
        idselect: "",
        idselecttest: 2,
        aDDD: "123",
        test: [{
            name: "我的ID是1",
            id: 1
          },
          {
            name: "我的ID是2",
            id: 2
          }
        ]
      }
    },
    mounted: function () {
      dog.alert("flask", "test");
      setTimeout(() => {
        dog.unload();
      }, 4500);
    },
    methods: {
      Qrcode: function () {
        // dog.qrcode('http://dogui.adog.io', '这是一个二维码生成测试,生成的二维码是dogUI的DEMO网站',
        //   'https://s.gravatar.com/avatar/ece41b74abb11ffc0188780941bee190?size=50&default=retro',
        //   "https://s.gravatar.com/avatar/ece41b74abb11ffc0188780941bee190?size=50&default=retro"
        // );
        dog.qrcode("123", "123", {
          mode: "text",
          topper: '星星',
          center: '<i class="fa fa-star fa-fw"></i>'
        })
      },
      notification: function () {
        dog.alert("car", "test");
      },
      update: function (info) {
        this.seach = info;
      },
      addNav: function () {
        dog.nav("测试", () => {
          console.log('test');
        })
        dog.nav("测试1", () => {
          console.log('test');
        })
        dog.nav("测试2", () => {
          console.log('test');
        })
        dog.nav("测试3", () => {
          console.log('test');
        })
      },
      tocheck: function () {
        dog.check({
          icon: "buttonIcon", //optional
          message: "message",
          next: "buttonText",
          back: "backButtonText",
          color: "buttonColor",
          bcolor: "backButtonColor", //optional
          top: "topIcon", //optional
          then: function () {
            dog.upload("car", "123");
          },
        })
      },
      testf: function (index, src) {
        this.filesss = src;
      }
    }
  }
</script>
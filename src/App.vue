<template>
  <div id="app">
    <dog-cover :display="cover" icon="paper-plane" info="Loading" :addOn="extend">
      <dog-title icon="comments" title="DOGUI DEMO">
        <dog-search placeholder="搜索框" @change="update"></dog-search>
        <dog-nav-bar>导航栏</dog-nav-bar>
        <dog-button icon="compass" @click="addNav" size="normal" color="red">添加导航</dog-button>
        <dog-button icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</dog-button>
        <dog-block icon="car" info="输入框">
          <dog-input v-model="name">姓名</dog-input>
          <dog-input v-model="age">年龄</dog-input>
          <dog-input v-model="aDPS">智商</dog-input>
          <dog-textarea v-model="aDDD">测试</dog-textarea>
        </dog-block>
        <dog-info info="INPUT测试">
          这里显示上面输入的信息
          <br> 姓名:{{name}}
          <br> 年龄:{{age}}
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
          <dog-cell left="Cell">测试Cell</dog-cell>
          <dog-cell left="搜索框:">{{seach}}</dog-cell>
        </dog-block>
        <dog-block icon="rss" info="选择框">
          <dog-select :list="test" v-model="idselect">是不是Gay</dog-select>
          <dog-select :list="test" v-model="idselect">是不是Gay</dog-select>
        </dog-block>
        <dog-info info="SELECT测试">
          这里显示上面选择的内容的ID
          <br> 你选择了:{{idselect}}
        </dog-info>
        <dog-button icon="user-o" @click="tocheck" size="large" color="red">检查</dog-button>
      </dog-title>
    </dog-cover>
  </div>
</template>

<script>
  import {
    block,
    title,
    cell,
    button,
    search,
    upload,
    input,
    select,
    info,
    view,
    textarea,
    cover,
    navBar
  } from './import';

  export default {
    name: 'app',
    components: {
      "dog-block": block,
      "dog-title": title,
      "dog-cell": cell,
      "dog-button": button,
      "dog-search": search,
      "dog-upload": upload,
      "dog-input": input,
      "dog-select": select,
      "dog-info": info,
      "dog-view": view,
      "dog-textarea": textarea,
      "dog-cover": cover,
      "dog-nav-bar": navBar
    },
    data: function () {
      return {
        name: "",
        age: "",
        aDPS: "不为空时",
        seach: "",
        extend: ['qrcode'],
        idselect: "",
        aDDD: "123",
        cover: 'uploading',
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
      setTimeout(() => {
        this.cover = 'in';
      }, 1);
    },
    methods: {
      Qrcode: function () {
        window.flow('http://dogui.adog.io', '这是一个二维码生成测试,生成的二维码是dogUI的DEMO网站');
      },
      update: function (info) {
        this.seach = info;
      },
      addNav: function () {
        window.nav("测试", () => {
          console.log('test');
        })
        window.nav("测试1", () => {
          console.log('test');
        })
        window.nav("测试2", () => {
          console.log('test');
        })
        window.nav("测试3", () => {
          console.log('test');
        })
      },
      tocheck: function () {
        check({
          icon: "buttonIcon", //optional
          message: "message",
          next: "buttonText",
          back: "backButtonText",
          color: "buttonColor",
          bcolor: "backButtonColor", //optional
          top: "topIcon", //optional
          then: function () {
            window.upload("car", "123");
          },
        })
      },
      testf: function (index, src) {
        this.filesss = src;
      }
    }
  }
</script>
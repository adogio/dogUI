# dogUI

[![npm version](https://badge.fury.io/js/dogui.svg)](https://badge.fury.io/js/dogui)
![downloads](https://img.shields.io/npm/dm/dogui.svg)

adog UI library frame work on Vue  
Every dogui component can work individually without any other dogui component.

## Version

-   Version 4.3.0

## Introduction

dogUI is a Vue based UI library for mobile  
dogUI is required bootstrap and fontAwesome

## Install

### Cdn requirments

Bootstrap  
Buttons.css  
Animate.css  
Font Awesome 4

### npm install

```bash
npm i dogUI
```

### Import

```js
  import {vue} from 'dogui';
  Vue.use(vue, options);
  //or
  import dogui from 'dogui';
  Vue.use(dogui.vue, options);
```

### Options (All options are optional)

```js
  const options = {
    credit: "Your Name"
  }
```

### CDNS and Meta for phone

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi">
<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/Buttons/2.0.0/css/buttons.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```

## Usage

```html
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
        <dog-fold info="折叠框" icon="bars">
          <div slot="half">FULL</div>
          <div slot="full">FULL<br>FULL<br>FULL</div>
        </dog-fold>
        <dog-button icon="compass" @click="addNav" size="normal" color="red">添加导航</dog-button>
        <dog-button icon="bell" @click="notification" size="normal" color="blue">调用提醒</dog-button>
        <dog-button icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</dog-button>
        <dog-block icon="pencil" info="输入框">
          <dog-switch v-model="toxic" true="这个东西有毒" false="这个东西没有毒" null="请选择">有毒?</dog-switch>
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
          <br> 毒性: {{toxic}}
          <br> 姓名: {{name}}
          <br> 邮箱: {{email}}
          <br> 密码: {{password}}
          <br> 电话: {{tel}}
          <br> 年龄: {{age}}
          <br> 价格: {{money}}
          <br> 智商: {{aDPS}}
          <br> 大框: {{aDDD}}
        </dog-info>
        <dog-block icon="picture-o" info="图片预览">
          <dog-view :srcs="['http://img.wxcha.com/file/201703/15/af183778a2.jpg']">长按图片下载</dog-view>
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
        <dog-credit>干架</dog-credit>
      </dog-title>
    </dog-cover>
  </div>
</template>
```

### DoubleCheck

```javascript
  check({
        icon: "buttonIcon", //optional
        message: "message",
        next: "buttonText",
        back: "backButtonText",
        color: "buttonColor",
        bcolor: "backButtonColor", //optional
        top: "topIcon", //optional
        then: function () {},
    })
```

### Qrcode

```javascript
  dog.qrcode('http://dogui.adog.io', '这是一个二维码生成测试,生成的二维码是dogUI的DEMO网站',{
    mode:"image",
    topper: "",
    center: ""}
  );
```

### upload

```javascript
  dog.upload("car", "123");
```

### finishLoading

```javascript
	dog.unload();
```

### navbar

```javascript
  dog.nav("测试", () => {
          console.log('test');
  })
```

### alert

```javascript
  dog.alert('icon', 'info')
```

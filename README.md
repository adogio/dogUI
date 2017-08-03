# dogUI

[![npm version](https://badge.fury.io/js/dogui.svg)](https://badge.fury.io/js/dogui)
[![downloads](https://img.shields.io/npm/dm/dogui.svg)](https://badge.fury.io/js/dogui)

adog UI library frame work on Vue  
Every dogui component can work individually without any other dogui component.

## Version

-   Version 4.4.2

## Introduction

dogUI is a Vue based UI library for mobile  
dogUI is required bootstrap and fontAwesome

## Install

### Cdn requirments

> I'm working on stop dependence on these requirments dogui

Bootstrap  
Buttons.css  
Animate.css  
Font Awesome 4

### npm install

```bash
  npm i dogui --save
```

### Import

```javascript
  import {vue} from 'dogui';
  Vue.use(vue, options);
  // or
  import dogui from 'dogui';
  Vue.use(dogui.vue, options);
  // or
  Vue.use(require('dogui').vue, options);
```

> Make sure Vue.use before ~~new Vue~~

### Extend

```javascript
  // extends you want to use
  let extend = ['qrcode', 'drawMenu'];
  // qrcode -> Qrcode display see dog.qrcode()
  // drawMenu -> Pop drawMenu see dog.draw()
```

### Options (All options are optional)

```javascript
  // All options are optional
  // All options are optional
  const options = {
    credit: "Your Name",
    egg: number, // percentage of NORMAL loading view, 100 for no ester egg
    sample: true, // if true, turn on sample mode (recommand)
    draw: "left", // set draw menu to left, default right
    extends: entend //set extends that you want to use
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

### Sample mode (recommanded)

```html
<template>
  <div id="app">
    <cov icon="paper-plane" info="Loading" :addOn="extend">
      <div slot="draw">
        <sta>在这个区域里可以使用任意的模块组件</sta>
        <but icon="bell" @click="notification" size="normal" color="blue">调用提醒</but>
        <sta>上面的按钮是从本体中复制过来的, 不会有作用域的问题, 点击一下试试看</sta>
        <but icon="bell" @click="notification" size="small" color="blue">调用提醒</but>
        <sta>抽屉菜单也可以用按钮打开关闭</sta>
        <but icon="bars" @click="draw(false)" size="normal" color="purple">开启/关闭 抽屉</but>
        <sma>你看, 调用提醒的时候, 也不会被遮挡<br>你也可以将credits放在这里</sma>
        <cre></cre>
      </div>
      <tit icon="comments" info="DOGUI DEMO">
        <sea placeholder="搜索框" @change="update"></sea>
        <sma>小字版本也可以</sma>
        <sta icon="arrow-right">欢迎浏览 DogUI.
          <br> 这个 demo 是用 Vue.js 的组件构建而成, 包括这段话本身都使用了 dogUI 的组件.
          <br> 随意在这个表单上输入查看 DogUI 的效果吧.
        </sta>
        <nab>导航栏</nab>
        <fol info="折叠框" icon="bars">
          <div slot="half">FULL</div>
          <!-- Update, no more div slot=full -->
          FULL<br>FULL<br>FULL
        </fol>
        <sta>抽屉菜单也可以用按钮打开关闭</sta>
        <but icon="bars" @click="draw(true)" size="normal" color="purple">开启/关闭 抽屉</but>
        <but icon="compass" @click="addNav" size="normal" color="red">添加导航</but>
        <but icon="bell" @click="notification" size="normal" color="blue">调用提醒</but>
        <but icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</but>
        <blo icon="pencil" info="输入框">
          <swi v-model="toxic" true="这个东西有毒" false="这个东西没有毒" null="请选择">有毒?</swi>
          <inp v-model="name">姓名</inp>
          <inp v-model="age" type="number">年龄</inp>
          <inp v-model="email" type="email">邮箱</inp>
          <inp v-model="tel" type="tel">电话</inp>
          <inp v-model="password" type="password">密码</inp>
          <inp v-model="money" type="money">智商的价格</inp>
          <inp v-model="aDPS" type="date" icon="calendar">有智商的日期</inp>
          <tex v-model="aDDD">测试</tex>
        </blo>
        <inf info="INPUT测试">
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
        </inf>
        <blo icon="picture-o" info="图片预览">
          <vie :srcs="['http://img.wxcha.com/file/201703/15/af183778a2.jpg']">长按图片下载</vie>
        </blo>
        <blo icon="camera" info="图片上传">
          <upl icon="bandcamp" quality="40" @change="testf(0, $event)" color="red">没有预览</upl>
          <upl icon="car" quality="40" @change="testf(0, $event)" color="blue" preview="right">有预览</upl>
        </blo>
        <blo icon="podcast" info="表格框">
          <cel info="Cell">测试Cell</cel>
          <cel info="搜索框:">{{seach}}</cel>
        </blo>
        <blo icon="rss" info="选择框">
          <sel :list="test" v-model="idselect">同步选择1</sel>
          <sel :list="test" v-model="idselect">同步选择2</sel>
          <sel :list="test" v-model="idselecttest">预选择1</sel>
        </blo>
        <inf info="SELECT测试">
          这里显示上面选择的内容的ID
          <br> 你选择了:{{idselect}}
          <br> 预选择了:{{idselecttest}}
        </inf>
        <but icon="plus" @click="tocheck" size="large" color="red">DOUBLE CHECK</but>
        <cre>干架</cre>
      </tit>
    </cov>
  </div>
</template>
```

### Regular mode
```html
<template>
  <div id="app">
    <dog-cover icon="paper-plane" info="Loading" :addOn="extend">
      <div slot="draw">
        <dog-static>在这个区域里可以使用任意的模块组件</dog-static>
        <dog-button icon="bell" @click="notification" size="normal" color="blue">调用提醒</dog-button>
        <dog-static>上面的按钮是从本体中复制过来的, 不会有作用域的问题, 点击一下试试看</dog-static>
        <dog-button icon="bell" @click="notification" size="small" color="blue">调用提醒</dog-button>
        <dog-static>抽屉菜单也可以用按钮打开关闭</dog-static>
        <dog-button icon="bars" @click="draw(false)" size="normal" color="purple">开启/关闭 抽屉</dog-button>
        <dog-small>你看, 调用提醒的时候, 也不会被遮挡<br>你也可以将credits放在这里</dog-small>
        <dog-credit></dog-credit>
      </div>
      <dog-title icon="comments" info="DOGUI DEMO">
        <dog-search placeholder="搜索框" @change="update"></dog-search>
        <dog-small>小字版本也可以</dog-small>
        <dog-static icon="arrow-right">欢迎浏览 DogUI.
          <br> 这个 demo 是用 Vue.js 的组件构建而成, 包括这段话本身都使用了 dogUI 的组件.
          <br> 随意在这个表单上输入查看 DogUI 的效果吧.
        </dog-static>
        <dog-nav>导航栏</dog-nav>
        <dog-fold info="折叠框" icon="bars">
          <div slot="half">FULL</div>
          <!-- Update, no more div slot=full -->
          FULL<br>FULL<br>FULL
        </dog-fold>
        <dog-static>抽屉菜单也可以用按钮打开关闭</dog-static>
        <dog-button icon="bars" @click="draw(true)" size="normal" color="purple">开启/关闭 抽屉</dog-button>
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
    then: function () {
      // do something after click next button
    }
  });
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
  dog.alert('icon', 'info');
```

### drawMenu

```javascript
  dog.draw();
  dog.draw(true); //for not trigger when menu is already poped
```

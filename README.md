# dogUI

[![npm version](https://badge.fury.io/js/dogui.svg)](https://badge.fury.io/js/dogui)
![downloads](https://img.shields.io/npm/dm/dogui.svg)

adog UI library frame work on Vue

## Version

-   Version 2.1.2

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
import dogUI from 'dogUI'
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
        <dog-nav>导航栏</dog-nav>
        <dog-button icon="compass" @click="addNav" size="normal" color="red">添加导航</dog-button>
        <dog-button icon="qrcode" @click="Qrcode" size="normal" color="orange">生成二维码</dog-button>
        <dog-block icon="car" info="输入框">
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
  dog.qrcode('http://dogui.adog.io', '这是一个二维码生成测试,生成的二维码是dogUI的DEMO网站');
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
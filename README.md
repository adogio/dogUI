# dogUI
[![npm version](https://badge.fury.io/js/dogui.svg)](https://badge.fury.io/js/dogui)
![downloads](https://img.shields.io/npm/dm/dogui.svg)

adog UI library frame work on Vue

## Version

- Version 1.1.0

## Introduction

dogUI is a Vue based UI library for mobile  
dogUI is required bootstrap and fontAwesome

## Install

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

The Usage below is out of date, please check App.vue for examples

```html
<div id="app">
    <dog-title icon="comments" title="DOGUI DEMO">
      <dog-search placeholder="搜索框" @change="update"></dog-search>
      <dog-block icon="car" info="输入框">
        <dog-input v-model="name">姓名</dog-input>
        <dog-input v-model="age">年龄</dog-input>
        <dog-input v-model="aDPS">智商</dog-input>
      </dog-block>
      <dog-block icon="picture-o" info="图片上传">
        <dog-upload icon="bandcamp" quality="40" @change="testf(0, $event)" color="red">没有预览</dog-upload>
        <dog-upload icon="car" quality="40" @change="testf(0, $event)" color="blue" preview="right">有预览</dog-upload>
      </dog-block>
      <dog-info info="INPUT测试">
        这里显示上面输入的信息
        <br> 姓名:{{name}}
        <br> 年龄:{{age}}
        <br> 智商:{{aDPS}}
      </dog-info>
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
    </dog-title>
</div>
```
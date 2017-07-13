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

```html
<div id="app">
    <dog-title title="测试" icon="rss">
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-button v-on:click="test" icon="car" size="large" color="red">123</dog-button>
    </dog-title>
    <dog-upload icon="car" quality="40" @change="test(0, $event)">123</dog-upload>
    <img :src="filesss">
    <dog-input v-model="inputer">姓名</dog-input>
    <dog-info info="info">sad</dog-info>
    <dog-select :list="test" v-model="qqq"></dog-select>
</div>
```
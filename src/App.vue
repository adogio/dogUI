<template>
  <div id="app">
    <dog-title icon="plus" title="test">
      <dog-search placeholder="test" @change="update"></dog-search>
      <dog-block icon="car" info="Inputs">
        <dog-input v-model="name">姓名</dog-input>
        <dog-input v-model="age">年龄</dog-input>
        <dog-input v-model="aDPS">智商</dog-input>
      </dog-block>
      <dog-info info="Result">
        这里显示上面输入的信息
        <br> {{name}}
        <br> {{age}}
        <br> {{aDPS}}
      </dog-info>
      <dog-block icon="podcast" info="Cells">
        <dog-cell left="Cell">测试Cell</dog-cell>
        <dog-cell left="搜索框内容">{{seach}}</dog-cell>
      </dog-block>
      <dog-block icon="rss" info="Selects">
        <dog-select :list="test" v-model="idselect"></dog-select>
      </dog-block>
      <dog-info info="Result">
        这里显示上面选择的内容的ID
        <br> {{idselect}}
      </dog-info>
      <dog-info info="info">这是一些测试信息，在警告框中</dog-info>
    </dog-title>
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
    info
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
      "dog-info": info
    },
    data: function () {
      return {
        name: "",
        age: "",
        aDPS: "不为空时",
        seach: "",
        idselect: "",
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
    mounted: function () {},
    methods: {
      update: function (info) {
        this.seach = info;
      },
      test: function (index, src) {
        this.filesss = src;
      }
    }
  }
</script>
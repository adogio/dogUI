<template>
  <div id="app">
    <dog-title icon="plus" title="test">
      <dog-block icon="car" info="asd">
        <dog-input v-model="inputer">姓名</dog-input>
        <dog-input>年龄</dog-input>
        <dog-input>智商</dog-input>
      </dog-block>
      <dog-block icon="rss" info="RSS">
        <dog-select :list="test" v-model="qqq"></dog-select>
      </dog-block>
      <dog-info info="info">infonfoinfoinfoinfoinfoinfoinfoinfoinfoinfo</dog-info>
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
        file: null,
        filesss: "",
        inputer: "",
        qqq: "",
        test: [{
            name: "das",
            id: 1
          },
          {
            name: "das",
            id: 2
          }
        ]
      }
    },
    mounted: function () {},
    methods: {
      test: function (index, src) {
        this.filesss = src;
      }
    }
  }
</script>
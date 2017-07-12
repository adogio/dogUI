<template>
  <div id="app">
    <dog-title icon="plus" title="test">
      <dog-block icon="car" info="asd">
        123
      </dog-block>
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
    input
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
    },
    data: function () {
      return {
        file: null,
        filesss: ""
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
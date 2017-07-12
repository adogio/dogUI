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
  import dogui from './import';

  export default {
    name: 'app',
    components: {
      "dog-block": dogui.block,
      "dog-title": dogui.title,
      "dog-cell": dogui.cell,
      "dog-button": dogui.button,
      "dog-search": dogui.search,
      "dog-upload": dogui.upload
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
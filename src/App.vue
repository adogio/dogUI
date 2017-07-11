<template>
  <div id="app">
    <dog-upload icon="car" quality="40" @change="test(0, $event)">123</dog-upload>
    <img :src="filesss">
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
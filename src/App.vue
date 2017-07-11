<template>
  <div id="app">
    <dog-title title="测试" icon="rss">
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-button v-on:click="test" icon="car" size="large" color="red">123</dog-button>
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
      "dog-button": dogui.button
    },
    methods: {
      test: function () {
        console.log('test');
      }
    }
  }
</script>
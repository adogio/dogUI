<template>
  <div id="app">
    <dog-title title="测试" icon="rss">
      <dog-search v-on:change="test">搜索...</dog-search>
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
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
      "dog-button": dogui.button,
      "dog-search": dogui.search
    },
    methods: {
      test: function (eventt) {
        console.log(eventt);
      }
    }
  }
</script>
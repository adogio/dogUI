<template>
  <div id="app">
    <dog-title title="测试" icon="rss">
      <dog-block icon="car" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="plus" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="car" info="fafda">
        123
      </dog-block>
      <dog-block icon="star" info="123">
        <dog-cell left="aoc">testatsat</dog-cell>
      </dog-block>
      <dog-block icon="user" info="123">
        123
      </dog-block>
      <dog-block icon="car" info="123">
        123
      </dog-block>
      <dog-button v-on:click="test" icon="car" size="large" color="red">123</dog-button>
      <dog-button v-on:click="test" icon="car" size="large" color="orange">123</dog-button>
      <dog-button v-on:click="test" icon="car" size="large" color="green">123</dog-button>
      <dog-button v-on:click="test" icon="car" size="large" color="blue">123</dog-button>
      <dog-button v-on:click="test" icon="car" size="large" color="black">123</dog-button>
      <dog-button v-on:click="test" icon="car" size="large" color="purple">123</dog-button>
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
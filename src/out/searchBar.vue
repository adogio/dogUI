<template>
    <dog-bar>
        <input v-bind:placeholder="placeHT" v-on:keyup="onKeyUp" v-model="inputContent">
    </dog-bar>
</template>

<script>
    import bar from '../components/bar.vue';
    import icon from '../components/icon.vue';

    export default {
        data: function () {
            return {
                inputContent: ""
            }
        },
        props: ['placeholder'],
        components: {
            "dog-bar": bar,
            "dog-icon": icon
        },
        computed: {
            placeHT: function () {
                if (this.placeholder) {
                    return this.placeholder;
                } else if (this.$slots.default[0].text) {
                    return this.$slots.default[0].text
                } else {
                    return "Search..."
                }
            }
        },
        methods: {
            onKeyUp: function (event) {
                this.$emit('change', event);
            }
        }
    }
</script>

<style scoped>
    input {
        border: 0px;
        text-indent: 10px;
        background: transparent;
        height: 45px;
        width: 100%
    }

    div {
        font-size: 32px;
    }
</style>
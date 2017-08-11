<template>
    <div class="topCredit" v-once>
        <img v-if="src||img" :src="srcs">
        <span class="left">
            <dog-icon v-if="icon" :icon="icon"></dog-icon>
            {{indicate}}
        </span>
        <span class="right">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    import anicon from '../components/icon.vue';
    export default {
        data: function () {
            return {
                indicate: this.$dog.appName
            }
        },
        computed: {
            srcs: function () {
                if (this.img) {
                    return this.img;
                } else if (this.src) {
                    return this.src;
                }
            }
        },
        mounted: function () {},
        props: ['src', 'icon', 'img'],
        components: {
            "dog-icon": anicon
        },
        methods: {}
    }
</script>

<style scoped>
    div.topCredit{
        padding-left: 15px;
        font-family: 'ubuntu';
    }
    img {
        height: 20px;
    }
    span.left{
        font-size: 21px;
        color: #474747;
    }
    span.right{
        font-size: 15px;
        color: #373737;
    }
</style>
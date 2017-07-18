<template>
    <div class="main">
        <div class="content" @click="goOut">
            <div>
                <qrcode :content="content" v-if="mode=='qrcode'"></qrcode>
            </div>
            <div class="bottom">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import qrcode from './qrcode.vue';
    export default {
        data: function () {
            return {}
        },
        computed: {

        },
        mounted: function () {},
        props: ['mode', 'content'],
        components: {
            "qrcode": qrcode
        },
        methods: {
            goOut: function () {
                window.unflow();
            }
        }
    }
</script>

<style scoped>
    div.main {
        position: fixed;
        top: 26%;
        left: 0px;
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-family: 'ubuntu';
        word-break: break-word;
    }

    div.bottom {
        padding-top: 20px;
        word-break: break-word;
    }

    div.content {
        text-align: center;
        font-size: 30px;
        font-family: 'ubuntu';
        word-break: break-word;
    }
</style>
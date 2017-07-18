<template>
    <div>
        <img :src="src">
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                qrcode: require('doglib').qrcode,
                src: ""
            }
        },
        computed: {

        },
        watch: {
            content: function () {
                this.src = this.qrcode(this.content, 6);
            }
        },
        mounted: function () {
            this.src = this.qrcode(this.content, 6);
        },
        props: ['content'],
        components: {},
        methods: {}
    }
</script>

<style scoped>
    img {
        border: 1px solid #b30000;
        border-left: 7px solid #b30000;
    }
</style>
<template>
    <div>
        <img :src="src">
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        computed: {

        },
        mounted: function () {},
        props: ['src'],
        components: {},
        methods: {}
    }
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>
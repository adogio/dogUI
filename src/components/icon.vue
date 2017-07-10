<template>
    <i v-bind:class="faicon" class="fa-fw" aria-hidden="true"></i>
</template>

<script>
    export default {
        props: ['icon'],
        computed: {
            faicon: function () {
                return "fa fa-" + this.icon;
            }
        }
    }
</script>

<style scoped>
    i {
        padding: 0px;
        margin: 0px;
        padding-left: 2px;
        padding-right: 2px;
    }
</style>
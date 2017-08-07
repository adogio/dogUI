<template>
    <div class="savior">
        <button class="float-button" @click="clickThis">
            <slot></slot>
        </button>
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
        props: [],
        components: {},
        methods: {
            clickThis: function () {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    button.float-button {
        transition: all 0.5s;
        border-radius: 9px;
        width: 45px;
        height: 45px;
        font-size: 21px;
        font-family: 'ubuntu';
        color: white;
        border: 1px solid whitesmoke;
        background-color: rgba(31%, 51.2%, 100%, 0.7);
        padding: 0px;
        position: fixed;
        right: 12px;
        bottom: 12px;
        z-index: 3;
    }

    button.float-button:active {
        background-color: rgba(100%, 31%, 31%, 0.7);
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.22);
    }
</style>
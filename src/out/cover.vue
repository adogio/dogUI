<template>
    <div>
        <div v-show="!doublecheck">
            <transition name="fade" mode="out-in">
                <component v-bind:is="view">
                    <slot></slot>
                </component>
            </transition>
        </div>
        <div v-show="doublecheck">
            <check :check="data"></check>
        </div>
    </div>
</template>

<script>
    import loading from '../components/loading.vue';
    import dumb from '../components/dumb.vue';
    import dbcheck from '../components/doublecheck.vue';

    export default {
        data: function () {
            return {
                view: this.display,
                doublecheck: false,
                data: null
            }
        },
        computed: {

        },
        watch: {
            display: function () {
                this.view = this.display;
            }
        },
        mounted: function () {
            window.check = (data) => {
                this.data = data;
                this.doublecheck = true;
                return true;
            }
        },
        props: ['display', 'info', 'icon'],
        components: {
            "load": loading,
            "in": dumb,
            "check": dbcheck
        },
        methods: {}
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
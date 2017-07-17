<template>
    <div>
        <transition name="fade" mode="out-in">
            <component v-bind:is="display">
                <slot></slot>
            </component>
        </transition>
    </div>
</template>

<script>
    import loading from '../components/loading.vue';
    import dumb from '../components/dumb.vue';

    export default {
        data: function () {
            return {}
        },
        computed: {

        },
        mounted: function () {},
        props: ['display', 'info', 'icon'],
        components: {
            "load": loading,
            "in": dumb
        },
        methods: {}
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
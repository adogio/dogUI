<template>
    <component v-bind:is="view">
        <slot></slot>
    </component>
</template>

<script>
    import credit from '../components/credit.vue';
    import creditStatic from '../components/creditStatic.vue';

    export default {
        name: "dog-credit",
        props: ['icon'],
        components: {
            "dog-unstatic": credit,
            "dog-static": creditStatic
        },
        data: function () {
            return {
                view: this.$dog.credit ? "dog-static" : "dog-unstatic"
            }
        }
    }
</script>

<style scoped>

</style>
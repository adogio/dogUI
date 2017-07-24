<template>
    <div>
        <dog-alert v-for="i in stack" :icon="i.icon" :info="i.info" :bottom="i.bottom" :timeout="i.timeout"></dog-alert>
    </div>
</template>

<script>
    import notification from './alert.vue';
    export default {
        data: function () {
            return {
                timeouter: 0,
                stack: []
            }
        },
        computed: {

        },
        mounted: function () {
            window.dog.alert = (icon, content, timeout) => {
                const bottom = this.stack.length * 32 + 2;
                const timmer = timeout ? timeout : 4500;
                this.stack.push({
                    icon: icon,
                    info: content,
                    bottom: bottom,
                    timeout: timmer
                })
                clearTimeout(this.timeouter);
                this.timeouter = setTimeout(() => {
                    this.stack = [];
                }, timmer);
                return true;
            }
        },
        components: {
            "dog-alert": notification
        },
        methods: {}
    }
</script>

<style scoped>

</style>
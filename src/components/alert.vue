<template>
    <div>
        <div class="notification" :style="styler" :class="classer">
            <dog-icon :icon="icon"></dog-icon>
            <span class="info">{{info}}</span>
        </div>
    </div>
</template>

<script>
    import icon from './icon.vue';
    export default {
        data: function () {
            return {
                classer: 'animated fadeInUp'
            }
        },
        computed: {
            styler: function () {
                return 'bottom: ' + this.bottom + "px;";
            }
        },
        mounted: function () {
            setTimeout(() => {
                this.classer = 'animated fadeOutDown'
            }, this.timeout - 300);
        },
        props: ['bottom', 'icon', 'info', 'timeout'],
        components: {
            "dog-icon": icon
        },
        methods: {}
    }
</script>

<style scoped>
    span.info {
        color: rgb(0, 4, 129);
    }

    div.notification {
        animation-duration: 0.3s;
        -webkit-animation-duration: 0.3s;
        transition: all 0.3s;
        position: fixed;
        left: 0px;
        z-index: 7;
        background-color: rgba(255, 143, 92, 0.6);
        border-left: 9px solid rgb(0, 152, 255);
        width: 100%;
        font-family: 'ubuntu';
        font-size: 21px;
    }
</style>
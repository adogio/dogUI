<template>
    <div>
        <div class="notification" :style="styler" :class="classer" ref="alert">
            <div class="row">
                <div class="icon col-xs-1">
                    <dog-icon :icon="icon"></dog-icon>
                </div>
                <div class="info col-xs-11">
                    <span class="info" v-html="info"></span>
                </div>
            </div>
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
            this.$dog.alertLength += this.$refs.alert.clientHeight + 2;
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
    div.info {
        color: rgb(0, 4, 129);
        text-align: left;
    }

    div.icon {
        color: azure;
        text-align: center;
    }

    div.notification {
        animation-duration: 0.4s;
        -webkit-animation-duration: 0.4s;
        transition: all 0.4s;
        position: fixed;
        left: 0px;
        z-index: 7;
        background-color: rgba(100%, 50%, 50%, 0.7);
        border-left: 9px solid rgb(0, 152, 255);
        width: 100%;
        font-family: 'ubuntu';
        font-size: 21px;
        height: auto;
        word-wrap: break-word;
    }
</style>
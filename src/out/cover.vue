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
    import uploading from '../components/uploading.vue';

    export default {
        data: function () {
            return {
                view: 'load',
                doublecheck: false,
                data: null,
                upload: {
                    icon: "cloud-upload",
                    info: "Uploading"
                }
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
            window.upload = (icon, info) => {
                if (icon) {
                    this.upload.icon = icon;
                }
                if (info) {
                    this.upload.info = info;
                }
                this.view = 'uploading';
                setTimeout(() => {
                    this.doublecheck = false;
                }, 150);
                return true;
            }
            window.unupload = () => {
                this.view = 'in';
                return true;
            }
            window.back = () => {
                if (getURLVar('environment')) {
                    webkit.messageHandlers.IOS.postMessage("done");
                    return "ios";
                } else {
                    alert("Close");
                    return "normal";
                }

                function getURLVar(string) {
                    return decodeURIComponent((new RegExp('[?|&]' + string + '=' + '([^&;]+?)(&|#|;|$)').exec(
                        location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
                }
            }
        },
        props: ['display', 'info', 'icon'],
        components: {
            "load": loading,
            "in": dumb,
            "check": dbcheck,
            "uploading": uploading
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
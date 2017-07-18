<template>
    <div>
        <div v-show="!doublecheck">
            <transition name="fade" mode="out-in">
                <component v-bind:is="view">
                    <div :class="slots">
                        <slot></slot>
                    </div>
                    <div v-show="floting" :class="flows">
                        <flow :mode="flow.mode" :content="flow.content">{{flow.text}}</flow>
                    </div>
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
    import flow from '../components/flow.vue';

    export default {
        data: function () {
            return {
                view: 'load',
                doublecheck: false,
                data: null,
                floting: false,
                flow: {
                    mode: 'qrcode',
                    text: 'test',
                    content: ''
                },
                slots: "slotun",
                flows: "animated fadeIn",
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
            window.flow = (data, text) => {
                this.flow.mode = 'qrcode';
                this.flow.text = text;
                this.flow.content = data;
                this.floting = true;
                this.slots = "slotun slots";
                this.flows = "animated fadeIn";
                return true;
            }
            window.unflow = () => {
                this.floting = false;
                this.slots = "slotun";
                this.flows = "animated fadeOut";
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
            "uploading": uploading,
            "flow": flow
        },
        methods: {}
    }
</script>

<style scoped>
    .slotun {
        transition: all 0.5s;
    }

    .slots {
        pointer-events: none;
        filter: blur(10px) grayscale(100%);
        -webkit-filter: blur(10px) grayscale(100%);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>
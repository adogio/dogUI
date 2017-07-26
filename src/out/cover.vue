<template>
    <div>
        <div v-show="!doublecheck">
            <transition name="fade" mode="out-in">
                <component v-bind:is="view">
                    <div :class="slots">
                        <slot></slot>
                    </div>
                    <div v-if="flotLoad" v-show="floting" :class="flows">
                        <dog-flow :mode="flow.mode" :content="flow.content">{{flow.text}}</dog-flow>
                    </div>
                </component>
            </transition>
        </div>
        <div v-show="doublecheck">
            <dog-check :check="data"></dog-check>
        </div>
        <dog-alert></dog-alert>
    </div>
</template>

<script>
    import loading from '../components/loading.vue';
    import dumb from '../components/dumb.vue';
    import dbcheck from '../components/doublecheck.vue';
    import uploading from '../components/uploading.vue';
    import flow from '../components/flow.vue';
    import dogalert from '../components/alertManager.vue';

    export default {
        data: function () {
            return {
                view: 'load',
                doublecheck: false,
                data: null,
                floting: false,
                flotLoad: false,
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
        mounted: function () {
            if (typeof this.addOn == 'object') {
                for (let i = 0; i < this.addOn.length; i++) {
                    if (this.addOn[i] == 'qrcode') {
                        this.flotLoad = true;
                        window.dog.qrcode = (data, text) => {
                            this.flow.mode = 'qrcode';
                            this.flow.text = text;
                            this.flow.content = data;
                            this.floting = true;
                            this.slots = "slotun slots";
                            this.flows = "animated fadeIn";
                            return true;
                        }
                        window.dog.unflow = () => {
                            this.floting = false;
                            this.slots = "slotun";
                            this.flows = "animated fadeOut";
                            return true;
                        }
                    }
                }
            }
        },
        created: function () {
            window.dog = {};
            window.dog.check = (data) => {
                this.data = data;
                this.doublecheck = true;
                return true;
            }
            window.dog.upload = (icon, info) => {
                if (icon) {
                    this.upload.icon = icon;
                }
                if (info) {
                    this.upload.info = info;
                }
                this.view = 'uploading';
                setTimeout(() => {
                    this.doublecheck = false;
                }, 80);
                return true;
            }
            window.dog.unload = () => {
                this.view = 'in';
                return true;
            }
            window.dog.back = () => {
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
        props: ['info', 'icon', 'addOn'],
        components: {
            "load": loading,
            "in": dumb,
            "dog-check": dbcheck,
            "uploading": uploading,
            "dog-flow": flow,
            "dog-alert": dogalert
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
        filter: blur(15px) grayscale(100%);
        -webkit-filter: blur(15px) grayscale(100%);
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
<template>
    <div>
        <div v-show="!doublecheck">
            <transition name="fade" mode="out-in">
                <component v-bind:is="view">
                    <div v-if="drawStatus.engaged" @touchstart="drawStart" @touchmove="test" @touchend="drawEnd">
                        <draw-menu :status="drawStatus">
                            <slot name="draw"></slot>
                        </draw-menu>
                        <div :class="slots">
                            <slot></slot>
                        </div>
                    </div>
                    <div v-else>
                        <div :class="slots">
                            <slot></slot>
                        </div>
                    </div>
                    <div v-if="flotLoad" v-show="floting" :class="flows">
                        <dog-flow :mode="flow.mode" :content="flow.content" :imgSetting="flow.imgSetting">{{flow.text}}</dog-flow>
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
    import loadingegg from '../components/esteregg.vue';
    import dumb from '../components/dumb.vue';
    import dbcheck from '../components/doublecheck.vue';
    import uploading from '../components/uploading.vue';
    import flow from '../components/flow.vue';
    import dogalert from '../components/alertManager.vue';
    import drawMenu from '../components/drawMenu.vue';

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
                    content: '',
                    imgCenter: '',
                    imgTopper: ''
                },
                drawStatus: {
                    engaged: false,
                    position: -265,
                    triggered: false,
                    opened: false
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
                    switch (this.addOn[i]) {
                        case "QRcode":
                        case "qrCode":
                        case "QRCode":
                        case "qrcode":
                            this.flotLoad = true;
                            window.dog.qrcode = (data, text, imgSetting) => {
                                this.flow.mode = 'qrcode';
                                this.flow.text = text;
                                this.flow.content = data;
                                this.flow.imgSetting = imgSetting;
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
                            break;
                        case "draw":
                        case "drawmenu":
                        case "drawMenu":
                            this.drawStatus.engaged = true;
                            break;
                    }
                }
            }
        },
        created: function () {
            if (this.$dog.egg) {
                const viewConfigerer = Math.floor(Math.random() * 100);
                this.view = (viewConfigerer <= this.$dog.egg) ? 'load' : 'egg';
            }
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
        },
        props: ['info', 'icon', 'addOn'],
        components: {
            "load": loading,
            "in": dumb,
            "dog-check": dbcheck,
            "uploading": uploading,
            "dog-flow": flow,
            "dog-alert": dogalert,
            "egg": loadingegg,
            "draw-menu": drawMenu
        },
        methods: {
            drawEnd: function (a) {
                let endPosition = this.drawStatus.position;
                this.drawStatus.triggered = false;
                if (endPosition > 125) {
                    this.drawStatus.position = 265;
                    this.drawStatus.opened = true;
                } else {
                    this.drawStatus.position = -265;
                }
            },
            test: function (a) {
                if (this.drawStatus.triggered) {
                    let client = a.touches[0].clientX;
                    this.drawStatus.position = client;
                }
            },
            drawStart: function (a) {
                let client = a.touches[0].clientX;
                if (this.drawStatus.opened) {
                    if (client > 265) {
                        this.drawStatus.position = -265;
                        this.drawStatus.opened = false;
                    } else if (client > 255) {
                        this.drawStatus.triggered = true;
                        this.drawStatus.opened = false;
                    }
                } else {
                    if (client < 10) {
                        this.drawStatus.triggered = true;
                    }
                }
            }
        }
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
<template>
    <div class="switcher">
        <div class="row">
            <div class="lefter col-xs-8">
                <div class="description">
                    <span class="greener placeh"><i :class="ifIcon"></i></span><strong><slot></slot></strong>
                </div>
                <div class="field">
                    {{whichone}}
                </div>
            </div>
            <div class="righter col-xs-4" @click="switchthis">
                <div class="outerbox" :class="outerClass">
                    <i class="fa fa-times icons left"></i>
                    <i class="fa fa-check icons right"></i>
                    <div class="innter" :class="floatClass">
                        <i class="fa fa-bars fa-rotate-90 fa-fw"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                status: this.value
            }
        },
        watch: {
            value: function () {
                this.status = this.value;
            }
        },
        props: ['value', 'true', 'false', 'null'],
        computed: {
            floatClass: function () {
                if (this.status == null) {
                    return "middled";
                }
                if (this.status) {
                    return "closed";
                } else {
                    return "opened";
                }
            },
            whichone: function () {
                if (this.status == null) {
                    return this.null;
                }
                if (this.status) {
                    return this.true;
                } else {
                    return this.false;
                }
            },
            ifIcon: function () {
                if (this.icon) {
                    return "fa fa-" + this.icon + " fa-fw";
                } else {
                    return "fa fa-star fa-fw";
                }
            },
            outerClass: function () {
                if (this.status == null) {
                    return "outerMiddle";
                }
                if (this.status) {
                    return "outerClose";
                } else {
                    return "outerOpen";
                }
            }
        },
        mounted: function () {},
        components: {},
        methods: {
            switchthis: function () {
                if (this.status) {
                    this.status = false;
                } else {
                    this.status = true;
                }
                this.$emit('input', this.status);
            }
        }
    }
</script>

<style scoped>
    .row {
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    div.lefter {
        padding: 0px;
        font-size: 21px;
    }

    div.righter {
        padding: 5px;
    }

    .icons {
        position: absolute;
        top: 35%;
        color: white;
    }

    .icons.left {
        left: 6%;
    }

    .icons.right {
        right: 6%;
    }

    div.switcher {
        height: 50px;
        border-left: 5px solid #b30000;
    }

    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
        font-size: 15px;
        position: absolute;
        margin: 2px 3px 0 0px!important;
    }

    .outerbox {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.22);
        margin: auto;
        border-radius: 5px;
        margin-top: 8px;
        padding-top: 4px;
        padding-right: 5px;
        padding-left: 5%;
        height: 34px;
        width: 100%;
        transition: all 0.3s;
        font-size: 20px;
    }

    span.placeh {
        font-size: 12px;
        vertical-align: text-top;
    }

    span.greener {
        color: #66b1ff;
    }

    .outerOpen {
        background-color: #4f64ff;
    }

    .outerClose {
        background-color: #ffad4f;
    }

    .outerMiddle {
        background-color: #979797;
    }

    .closed {
        left: 64%;
    }

    .opened {
        left: 6%;
    }

    .middled {
        left: 35%;
    }

    .field {
        width: 100%;
        padding-top: 28px;
        padding-left: 11px;
        font-size: 21px;
        line-height: 12px;
        color: #000;
    }

    span.innter {
        font-size: 21px;
    }

    div.innter {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
        position: absolute;
        border-radius: 5px;
        height: 26px;
        width: 30%;
        font-size: 18px;
        background-color: white;
        transition: all 0.3s;
        text-align: center;
        color: #e1e1e1;
    }
</style>
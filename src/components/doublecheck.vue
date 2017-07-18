<template>
    <div v-if="content">
        <div class="padding-line">
        </div>
        <div class="topper">
            <i class="animated pulse infinite framee" :class="warnicon"></i>
        </div>
        <div class="content">
            <p v-html="content.message"></p>
        </div>
        <dog-button size="large" :color="content.color" :icon="ifIcon" @click="confirms">{{content.next}}</dog-button>
        <dog-button size="small" :color="ifColor" icon="arrow-left" @click="goback">{{content.back}}</dog-button>
    </div>
</template>

<script>
    import button from '../out/button.vue';

    export default {
        data: function () {
            return {
                content: this.check
            }
        },
        computed: {
            warnicon: function () {
                if (this.content.top) {
                    return "fa fa-" + this.content.top;
                } else {
                    return "fa fa-exclamation-triangle";
                }
            },
            ifIcon: function () {
                if (this.content.icon) {
                    return this.content.icon;
                } else {
                    return "paper-plane"
                }
            },
            ifColor: function () {
                if (this.content.bcolor) {
                    return this.content.bcolor;
                } else {
                    return "green"
                }
            }
        },
        watch: {
            check: function () {
                this.content = this.check;
            }
        },
        mounted: function () {},
        props: ['check'],
        components: {
            "dog-button": button
        },
        methods: {
            confirms: function () {
                this.content.then();
            },
            goback: function () {
                this.$parent.doublecheck = false;
            }
        }
    }
</script>

<style scoped>
    p {
        font-family: 'Ubuntu';
        font-size: 20px;
        text-align: center;
    }

    .topper {
        padding-top: 20%;
        font-size: 90px;
        text-align: center;
        padding-bottom: 6%;
        color: firebrick;
    }

    .framee {
        -webkit-animation-duration: 2.5s;
        animation-duration: 2.5s;
    }

    @keyframes colorchange {
        0% {
            background-color: #DEFFFC;
        }

        20% {
            background-color: #EB5160;
        }
        40% {
            background-color: #ED9B40;
        }
        60% {
            background-color: #CBE896;
        }
        80% {
            background-color: #8BAAAD;
        }
        100% {
            background-color: #1FD4F9;
        }
    }

    @-webkit-keyframes colorchange {
        0% {
            background-color: #DEFFFC;
        }

        20% {
            background-color: #EB5160;
        }
        40% {
            background-color: #ED9B40;
        }
        60% {
            background-color: #CBE896;
        }
        80% {
            background-color: #8BAAAD;
        }
        100% {
            background-color: #1FD4F9;
        }
    }

    div.padding-line {
        height: 7px;
        background-color: black;
        -webkit-animation: colorchange 25s linear infinite alternate;
        animation: colorchange 25s linear infinite alternate;
    }

    p {
        font-family: 'Ubuntu';
        font-size: 20px;
        text-align: center;
    }

    div {
        padding: 0px;
        margin: 0px;
    }

    button {
        z-index: 4;
        padding: 0px;
        text-align: center;
        margin-top: 2px;
    }

    .button-block {
        width: 100%;
    }
</style>
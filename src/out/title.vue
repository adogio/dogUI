<template>
    <div>
        <div class="animated bounceIn">
            <div class="row">
                <div class="left-bottom" v-bind:style="titleColor">
                    <i class="animated pulse infinite framee" v-bind:class="parsedicon"></i>
                    <br>
                    <span v-text="title" class="shadow-dog"></span>
                </div>
            </div>
            <div class="row">
                <div class="padding-line">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="hint-bottom animated fadeIn">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.combo = Math.floor(Math.random() * 100) % this.part.length;
        },
        props: ['title', 'icon'],
        data: function () {
            return {
                part: ["7FB3D5", "A569BD", "EC7063", "AF7AC5", "45B39D", "F4D03F", "E59866", "B2BABB", "F0B27A"],
                combo: 0
            }
        },
        computed: {
            parsedicon: function () {
                return "fa fa-" + this.icon;
            },
            titleColor: function () {
                return "background-color: #" + this.part[this.combo] + ";";
            }
        }
    }
</script>

<style scoped>
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

    div {
        padding: 0px;
        margin: 0px;
        min-height: 100%;
    }

    .shadow-dog {
        text-shadow: 2px 2px 5px #888888;
    }

    .framee {
        -webkit-animation-duration: 2.5s;
        font-size: 55px;
        animation-duration: 2.5s;
        color: #979A9A;
        text-shadow: 2px 2px 5px #888888;
    }

    div.hint-bottom {
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }

    div.padding-line {
        height: 7px;
        background-color: black;
        -webkit-animation: colorchange 25s linear infinite alternate;
        animation: colorchange 25s linear infinite alternate;
        /*animation-delay: 2s;
        -webkit-animation-delay: 2s;*/
    }

    div.left-bottom {
        font-size: 45px;
        border-left: 9px solid #626567;
        padding-left: 16px;
        padding-bottom: 5px;
        min-width: 100%;
        width: 100%;
        width: 100vw;
        height: 170px;
        display: table-cell;
        vertical-align: bottom;
    }
</style>
<template>
    <div class="main">
        <div class="padding-line">
        </div>
        <div class="content" @click="goOut">
            <div>
                <qrcode :content="content" v-if="mode=='qrcode'"></qrcode>
            </div>
            <div class="bottom">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import qrcode from './qrcode.vue';
    export default {
        data: function () {
            return {}
        },
        computed: {

        },
        mounted: function () {},
        props: ['mode', 'content'],
        components: {
            "qrcode": qrcode
        },
        methods: {
            goOut: function () {
                window.unflow();
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

    div.padding-line {
        height: 7px;
        background-color: black;
        -webkit-animation: colorchange 25s linear infinite alternate;
        animation: colorchange 25s linear infinite alternate;
    }

    div.main {
        position: fixed;
        top: 0px;
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-family: 'ubuntu';
        word-break: break-word;
    }

    div.bottom {
        padding-top: 20px;
        word-break: break-word;
    }

    div.content {
        text-align: center;
        font-size: 30px;
        font-family: 'ubuntu';
        word-break: break-word;
    }
</style>
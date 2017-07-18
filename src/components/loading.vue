<template>
    <div>
        <div class='main-circle circle-auto'>
            <div class='center'>
                <dog-icon v-if='icon' class='align' :icon='icon'></dog-icon>
            </div>
        </div>
        <div class='center' v-if='info' v-html='info'></div>
    </div>
</template>

<script>
    import icon from './icon.vue';

    export default {
        data: function () {
            return {
                icon: this.$parent.icon,
                info: this.$parent.info
            }
        },
        computed: {},
        mounted: function () {},
        props: [],
        components: {
            "dog-icon": icon
        },
        methods: {}
    }
</script>

<style scoped>
    .align {
        padding-top: 10%;
        vertical-align: middle;
    }

    .center {
        font-family: 'ubuntu';
        text-align: center;
        width: 100%;
        font-size: 45px;
    }

    .main-circle {
        background-color: #40bfff;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        margin: auto;
        margin-top: 185px;
        margin-bottom: 135px;
        cursor: pointer;
        text-align: center;
    }

    .circle-auto {
        -webkit-animation: mycircle 5s linear infinite;
        animation: mycircle 5s linear infinite;
    }

    @-webkit-keyframes mycircle {
        0% {
            -webkit-box-shadow: 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        10% {
            -webkit-box-shadow: 0 0 0 10px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        10% {
            -webkit-box-shadow: 0 0 0 20px rgba(255, 220, 64, .8), 0 0 0 10px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        20% {
            -webkit-box-shadow: 0 0 0 50px rgba(255, 220, 64, .6), 0 0 0 20px rgba(46, 155, 203, .8), 0 0 0 10px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        30% {
            -webkit-box-shadow: 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8), 0 0 0 10px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        40% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6), 0 0 0 20px rgba(46, 155, 203, .8), 0 0 0 10px rgba(255, 220, 64, 1);
        }
        50% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8);
        }
        60% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6);
        }
        70% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4);
        }
        80% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2);
        }
        90% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0);
        }
    }

    @keyframes mycircle {
        0% {
            -webkit-box-shadow: 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        10% {
            -webkit-box-shadow: 0 0 0 10px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        10% {
            -webkit-box-shadow: 0 0 0 20px rgba(255, 220, 64, .8), 0 0 0 10px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        20% {
            -webkit-box-shadow: 0 0 0 50px rgba(255, 220, 64, .6), 0 0 0 20px rgba(46, 155, 203, .8), 0 0 0 10px rgba(255, 220, 64, 1), 0 0 0 0px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        30% {
            -webkit-box-shadow: 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8), 0 0 0 10px rgba(46, 155, 203, 1), 0 0 0 0px rgba(255, 220, 64, 1);
        }
        40% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6), 0 0 0 20px rgba(46, 155, 203, .8), 0 0 0 10px rgba(255, 220, 64, 1);
        }
        50% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8);
        }
        60% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6);
        }
        70% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4);
        }
        80% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2);
        }
        90% {
            -webkit-box-shadow: 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, 0);
        }
    }
</style>
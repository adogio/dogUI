<template>
    <div>
        <padding-bar></padding-bar>
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
    import paddingbar from './paddingbar.vue';

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
            "dog-icon": icon,
            "padding-bar": paddingbar
        },
        methods: {}
    }
</script>

<style scoped>
    .align {
        padding-top: 8px;
        vertical-align: middle;
        color: #323232;
    }

    .center {
        font-family: 'ubuntu';
        text-align: center;
        width: 100%;
        font-size: 50px;
    }

    .main-circle {
        background-color: #40bfff;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin: auto;
        margin-top: 185px;
        margin-bottom: 135px;
        cursor: pointer;
        text-align: center;
    }

    .circle-auto {
        -webkit-animation: mycircle 4.2s linear infinite;
        animation: mycircle 4.2s linear infinite;
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
            -webkit-box-shadow: 0 0 0 150px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8);
        }
        60% {
            -webkit-box-shadow: 0 0 0 155px rgba(255, 220, 64, 0), 0 0 0 150px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6);
        }
        70% {
            -webkit-box-shadow: 0 0 0 158px rgba(255, 220, 64, 0), 0 0 0 155px rgba(46, 155, 203, 0), 0 0 0 150px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4);
        }
        80% {
            -webkit-box-shadow: 0 0 0 161px rgba(255, 220, 64, 0), 0 0 0 158px rgba(46, 155, 203, 0), 0 0 0 155px rgba(255, 220, 64, 0), 0 0 0 150px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2);
        }
        90% {
            -webkit-box-shadow: 0 0 0 163px rgba(255, 220, 64, 0), 0 0 0 161px rgba(46, 155, 203, 0), 0 0 0 158px rgba(255, 220, 64, 0), 0 0 0 155px rgba(46, 155, 203, 0), 0 0 0 150px rgba(255, 220, 64, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 165px rgba(255, 220, 64, 0), 0 0 0 163px rgba(46, 155, 203, 0), 0 0 0 161px rgba(255, 220, 64, 0), 0 0 0 158px rgba(46, 155, 203, 0), 0 0 0 155px rgba(255, 220, 64, 0);
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
            -webkit-box-shadow: 0 0 0 150px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4), 0 0 0 50px rgba(46, 155, 203, .6), 0 0 0 20px rgba(255, 220, 64, .8);
        }
        60% {
            -webkit-box-shadow: 0 0 0 155px rgba(255, 220, 64, 0), 0 0 0 150px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2), 0 0 0 90px rgba(46, 155, 203, .4), 0 0 0 50px rgba(255, 220, 64, .6);
        }
        70% {
            -webkit-box-shadow: 0 0 0 158px rgba(255, 220, 64, 0), 0 0 0 155px rgba(46, 155, 203, 0), 0 0 0 150px rgba(255, 220, 64, 0), 0 0 0 140px rgba(46, 155, 203, 0.2), 0 0 0 90px rgba(255, 220, 64, .4);
        }
        80% {
            -webkit-box-shadow: 0 0 0 161px rgba(255, 220, 64, 0), 0 0 0 158px rgba(46, 155, 203, 0), 0 0 0 155px rgba(255, 220, 64, 0), 0 0 0 150px rgba(46, 155, 203, 0), 0 0 0 140px rgba(255, 220, 64, .2);
        }
        90% {
            -webkit-box-shadow: 0 0 0 163px rgba(255, 220, 64, 0), 0 0 0 161px rgba(46, 155, 203, 0), 0 0 0 158px rgba(255, 220, 64, 0), 0 0 0 155px rgba(46, 155, 203, 0), 0 0 0 150px rgba(255, 220, 64, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 165px rgba(255, 220, 64, 0), 0 0 0 163px rgba(46, 155, 203, 0), 0 0 0 161px rgba(255, 220, 64, 0), 0 0 0 158px rgba(46, 155, 203, 0), 0 0 0 155px rgba(255, 220, 64, 0);
        }
    }
</style>
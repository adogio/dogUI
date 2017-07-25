<template>
    <div>
        <div class="tielanimate animated bounceIn">
            <div class="row">
                <div class="left-bottom" v-bind:style="titleColor">
                    <i class="animated pulse infinite framee" v-bind:class="parsedicon"></i>
                    <span v-text="info" class="shadow-dog"></span>
                </div>
            </div>
            <padding-bar></padding-bar>
        </div>
        <div class="row">
            <div class="hint-bottom animated fadeIn">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import paddingbar from '../components/paddingbar.vue';
    import config from '../config/config';

    export default {
        mounted: function () {
            this.combo = Math.floor(Math.random() * 100) % this.part.length;
        },
        components: {
            "padding-bar": paddingbar
        },
        props: ['info', 'icon'],
        name: "dog-title",
        data: function () {
            return {
                part: config.parts,
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
        font-size: 46px;
        animation-duration: 2.5s;
        color: white;
        text-shadow: 2px 2px 5px #888888;
    }

    div.hint-bottom {
        animation-delay: 0.6s;
        -webkit-animation-delay: 0.6s;
    }


    div.left-bottom {
        font-size: 33px;
        border-left: 9px solid #626567;
        font-family: 'ubuntu';
        padding-left: 7px;
        padding-bottom: 5px;
        width: 100vw;
        height: 115px;
        display: table-cell;
        vertical-align: bottom;
    }
</style>
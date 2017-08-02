<template>
    <div class="entire">
        <info-tab :icon="icon" :info="info" :outColor="bgColor" :right="arrowStatus" @click="upOrDown"></info-tab>
        <div :style="bgColor + nbColor" class="contents animated fadeIn" ref="cont">
            <div>
                <slot name="half"></slot>
            </div>
            <div v-show="textStatus">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import infoTab from '../components/tab.vue';
    import config from '../config/config';

    export default {
        components: {
            'info-tab': infoTab
        },
        methods: {
            upOrDown: function () {
                this.nbColor = "height: auto;";
                if (this.arrowStatus == "down") {
                    clearTimeout(this.timmer);
                    this.textStatus = true;
                    this.arrowStatus = "upper";
                    this.nbColor = "height: " + this.higherStorage + "px;";
                } else {
                    this.arrowStatus = "down";
                    this.nbColor = "height: " + this.storage + "px;";
                    this.timmer = setTimeout(() => {
                        this.textStatus = false;
                    }, 300);
                }
            }
        },
        name: "dog-fold",
        mounted: function () {
            this.higherStorage = this.$refs.cont.clientHeight;
            this.textStatus = false;
            setTimeout(() => {
                this.storage = this.$refs.cont.clientHeight;
                this.nbColor = "height: " + this.storage + "px;";
            }, 1);
        },
        data: function () {
            return {
                arrowStatus: "down",
                textStatus: true,
                nbColor: "",
                storage: "",
                higherStorage: "",
                timmer: ""
            }
        },
        props: ['icon', 'info'],
        computed: {
            bgColor: function () {
                const colorList = config.colorList;
                let timeDelay = Math.floor(Math.random() * 100) % 6;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "border-left: 9px solid " + color + ";" + "animation-delay:" + (timeDelay * 0.1) + "s;" +
                    "-webkit-animation-delay:" + (timeDelay * 0.1) +
                    "s;";
            }
        }
    }
</script>
<style scoped>
    div.entire {
        padding-top: 3px;
        margin: 0px;
        min-height: 100%;
    }


    .framee {
        -webkit-animation-duration: 2.5s;
        font-size: 55px;
        animation-duration: 2.5s;
    }

    div.hint-bottom {
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }

    div.contents {
        overflow: hidden;
        padding-top: 1px;

        transition: all .3s ease-out;
    }
</style>
<template>
    <div class="entire">
        <info-tab v-if="tabber" v-bind:icon="icon" v-bind:info="info" :outColor="bgColor"></info-tab>
        <div v-bind:style="bgColor" class="contents animated fadeIn">
            <slot></slot>
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
        mounted: function () {
            if (this.info && this.icon) {
                this.tabber = true;
            }
        },
        name: "dog-block",
        data: function () {
            return {
                tabber: false
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

    div {
        padding-top: 1px;
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
</style>
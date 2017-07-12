<template>
    <div>
        <info-tab v-if="tabber" v-bind:icon="icon" v-bind:info="info"></info-tab>
        <div v-bind:style="bgColor" class="contents animated fadeIn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import infoTab from './tab.vue';

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
                const colorList = [
                    "EE6C4D", "F38D68", "662C91", "17A398", "33312E", "1FD4F9", "FA4A4C", "52489C",
                    "4062BB", "59C3C3"
                ]
                let timeDelay = Math.floor(Math.random() * 100) % 15;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "border-left: 9px solid " + color + ";" + "animation-delay:" + (timeDelay * 0.1) + "s;" +
                    "-webkit-animation-delay:" + (timeDelay * 0.1) +
                    "s;";
            }
        }
    }
</script>
<style scoped>
    div {
        padding-top: 2px;
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
        margin-top: 2px;
        padding-left: 3px;
    }
</style>
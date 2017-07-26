<template>
    <div>
        <div class="right" :style="outColor">
            <div :style="bgColor">
                <anicon class="icon" v-bind:icon="icon"></anicon>
                <span class="spans" v-text="info"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import anicon from '../components/icon.vue';
    import config from '../config/config';

    export default {
        components: {
            "anicon": anicon
        },
        props: ['icon', 'info', 'outColor'],
        data: function () {
            return {}
        },
        name: "dog-tab",
        computed: {
            ouside: function () {
                if (this.outColor) {
                    return this.outColor;
                } else {
                    return "";
                }
            },
            bgColor: function () {
                const colorList = config.colorList;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "border-left: " + 6 + "px solid " + color + ";";
            }
        }
    }
</script>

<style scoped>
    .icon {
        font-size: 21px;
        padding-left: 7px;
    }

    .spans {
        padding-left: 5px;
    }

    .right {
        font-size: 23px;
        font-family: 'ubuntu';
        background-color: rgba(100%, 90%, 50%, 0.3);
    }
</style>
<template>
    <div class="entire">
        <div :style="bgColor">
            <div class="right">
                <anicon class="icon" :icon="ifIcon"></anicon>
                <span class="spans" v-text="info"></span>
            </div>
            <div class="seprate">
                <div class="slotContent">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import anicon from '../components/icon.vue';
    import config from '../config/config';

    export default {
        name: "dog-info",
        components: {
            "anicon": anicon
        },
        props: ['icon', 'info'],
        computed: {
            ifIcon: function () {
                if (this.icon) {
                    return this.icon;
                } else {
                    return 'info-circle';
                }
            },
            bgColor: function () {
                const colorList = config.colorList;
                let color = "#" + colorList[Math.floor(Math.random() * 100) % colorList.length];
                return "border-left: " + 9 + "px solid " + color + ";";
            }
        }
    }
</script>

<style scoped>
    .icon {
        font-size: 21px;
        padding-left: 7px;
    }

    .slotContent {
        background-color: rgba(99.9%, 100%, 69.1%, 0.3);
        border-left: 5px solid #cc2626;
        padding-left: 3px;
        word-wrap: break-word;
    }

    .seprate {
        padding-top: 3px;
    }

    .spans {
        padding-left: 5px;
    }

    div.entire {
        font-size: 23px;
        padding-top: 3px;
        font-family: 'Ubuntu';
    }

    div.right {
        border-left: 6px solid red;
        background-color: rgba(100%, 50%, 50%, 0.3);
    }
</style>